// Serveur de production (Deno Deploy) et de dev local :
// - sert le site statique généré par Lume (_site/)
// - expose l'API likes sur Deno KV
//
//   GET  /api/likes  -> { counts: { "slug": 3, ... } }
//   POST /api/like   -> body { slug, liked } -> { count, liked }
//
// Un like par visiteur : dédoublonnage par empreinte SHA-256(sel + IP + user-agent).
// L'IP n'est jamais stockée en clair.

import { serveDir } from "jsr:@std/http@1/file-server";

// KV_PATH : chemin du fichier SQLite des likes sur le VPS (sur Deno Deploy, laisser vide → KV managé).
const kv = await Deno.openKv(Deno.env.get("KV_PATH") || undefined);
const SALT = Deno.env.get("LIKE_SALT") ?? "simoncourtois-likes-v1";
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,99}$/;
const HOSTNAME = Deno.env.get("HOST") || undefined; // 127.0.0.1 derrière nginx, sinon toutes interfaces
const PORT = Number(Deno.env.get("PORT") ?? 8000);

// Derrière nginx, l'IP réelle du client arrive dans X-Real-IP / X-Forwarded-For ;
// remoteAddr vaudrait 127.0.0.1 pour tout le monde et ne distinguerait pas les visiteurs.
function clientIp(req: Request, info: Deno.ServeHandlerInfo): string {
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return (info.remoteAddr as Deno.NetAddr).hostname ?? "";
}

async function fingerprint(req: Request, info: Deno.ServeHandlerInfo): Promise<string> {
  const ip = clientIp(req, info);
  const ua = req.headers.get("user-agent") ?? "";
  const data = new TextEncoder().encode(`${SALT}|${ip}|${ua}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

async function slugExists(slug: string): Promise<boolean> {
  try {
    await Deno.stat(`_site/journal/${slug}/index.html`);
    return true;
  } catch {
    return false;
  }
}

async function getCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for await (const e of kv.list<bigint>({ prefix: ["count"] })) {
    counts[String(e.key[1])] = Number(e.value);
  }
  return counts;
}

async function toggleLike(slug: string, fp: string, liked: boolean): Promise<number> {
  const voteKey = ["vote", slug, fp];
  const countKey = ["count", slug];
  for (let attempt = 0; attempt < 5; attempt++) {
    const [vote, count] = await kv.getMany<[boolean, bigint]>([voteKey, countKey]);
    const current = count.value ?? 0n;
    if (liked === Boolean(vote.value)) return Number(current); // déjà dans l'état voulu
    const next = liked ? current + 1n : (current > 0n ? current - 1n : 0n);
    const tx = kv.atomic().check(vote).check(count).set(countKey, next);
    if (liked) tx.set(voteKey, true);
    else tx.delete(voteKey);
    const res = await tx.commit();
    if (res.ok) return Number(next);
  }
  throw new Error("conflit KV persistant");
}

Deno.serve({ hostname: HOSTNAME, port: PORT }, async (req: Request, info: Deno.ServeHandlerInfo) => {
  const url = new URL(req.url);

  if (url.pathname === "/api/likes" && req.method === "GET") {
    return json({ counts: await getCounts() });
  }

  if (url.pathname === "/api/like" && req.method === "POST") {
    let body: { slug?: unknown; liked?: unknown };
    try {
      body = await req.json();
    } catch {
      return json({ error: "corps JSON invalide" }, 400);
    }
    const slug = String(body.slug ?? "");
    const liked = Boolean(body.liked);
    if (!SLUG_RE.test(slug) || !(await slugExists(slug))) {
      return json({ error: "article inconnu" }, 404);
    }
    const fp = await fingerprint(req, info);
    try {
      const count = await toggleLike(slug, fp, liked);
      return json({ count, liked });
    } catch {
      return json({ error: "réessaie dans un instant" }, 503);
    }
  }

  // Site statique
  const res = await serveDir(req, { fsRoot: "_site", quiet: true });
  if (res.status === 404) {
    try {
      const page = await Deno.readFile("_site/404.html");
      return new Response(page, { status: 404, headers: { "content-type": "text/html; charset=utf-8" } });
    } catch {
      return res;
    }
  }
  // Cache raisonnable : HTML court, assets plus long (les woff2/js changent rarement).
  const ct = res.headers.get("content-type") ?? "";
  if (res.ok) {
    res.headers.set(
      "cache-control",
      ct.includes("text/html") ? "public, max-age=300" : "public, max-age=86400",
    );
  }
  return res;
});
