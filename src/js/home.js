// Accueil : titre en particules + colonne « Les plus aimés ».
import { initTitleParticles } from "/js/title-particles.js";
import { fetchCounts, paintCounts } from "/js/likes.js";

const cv = document.getElementById("title-canvas");
if (cv) initTitleParticles(cv);

const esc = (s) => String(s)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const box = document.getElementById("top-liked");
const idx = document.getElementById("posts-index");
if (box && idx) {
  try {
    const counts = await fetchCounts();
    const posts = JSON.parse(idx.textContent);
    posts.sort((a, b) =>
      (counts[b.slug] ?? 0) - (counts[a.slug] ?? 0) || b.date.localeCompare(a.date)
    );
    box.innerHTML = posts.slice(0, 5).map((p, i) => `
      <a href="${esc(p.url)}" class="mini-row">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span>
          <span class="title">${esc(p.title)}</span>
          <span class="meta">${esc(p.category)} · ${p.minutes} MIN</span>
        </span>
        <span class="side">${counts[p.slug] ?? 0} ♥</span>
      </a>`).join("");
  } catch {
    // API indisponible : la liste de repli (articles récents) reste affichée.
    paintCounts({});
  }
}
