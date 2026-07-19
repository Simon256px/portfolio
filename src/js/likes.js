// Client de l'API likes (voir serve.ts).
export async function fetchCounts() {
  const res = await fetch("/api/likes");
  if (!res.ok) throw new Error("likes indisponibles");
  const { counts } = await res.json();
  return counts;
}

// Remplit tous les <span class="likes" data-slug="…"> de la page.
export function paintCounts(counts) {
  for (const el of document.querySelectorAll(".likes[data-slug]")) {
    el.textContent = String(counts[el.dataset.slug] ?? 0);
  }
}

export async function sendLike(slug, liked) {
  const res = await fetch("/api/like", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ slug, liked }),
  });
  if (!res.ok) throw new Error("échec du like");
  return res.json();
}
