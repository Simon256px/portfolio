// Article : compteurs + bouton « J'aime » (un like par navigateur).
import { fetchCounts, paintCounts, sendLike } from "/js/likes.js";

const btn = document.getElementById("like-btn");
const word = document.getElementById("like-word");
const slug = btn?.dataset.slug;
const KEY = "sc-liked:" + slug;

let liked = localStorage.getItem(KEY) === "1";

function paint() {
  btn.classList.toggle("liked", liked);
  word.textContent = liked ? "AIMÉ" : "J'AIME";
}

if (btn && slug) {
  paint();
  btn.addEventListener("click", async () => {
    btn.disabled = true;
    try {
      const data = await sendLike(slug, !liked);
      liked = data.liked;
      localStorage.setItem(KEY, liked ? "1" : "0");
      for (const el of document.querySelectorAll(`.likes[data-slug="${slug}"]`)) {
        el.textContent = String(data.count);
      }
    } catch {
      // API indisponible : on ne change rien.
    } finally {
      btn.disabled = false;
      paint();
    }
  });
}

try {
  paintCounts(await fetchCounts());
} catch {
  paintCounts({});
}
