// Journal : filtres par catégorie, recherche instantanée, compteurs de likes.
import { fetchCounts, paintCounts } from "/js/likes.js";

const rows = [...document.querySelectorAll(".article-row")];
const chips = [...document.querySelectorAll(".chip")];
const input = document.getElementById("search");
const empty = document.getElementById("no-result");

// Recherche insensible aux accents et à la casse.
const fold = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

let cat = "TOUS";
let query = "";

function apply() {
  let visible = 0;
  for (const row of rows) {
    const okCat = cat === "TOUS" || row.dataset.cat === cat;
    const okSearch = query === "" || fold(row.dataset.search).includes(query);
    const show = okCat && okSearch;
    row.classList.toggle("hidden", !show);
    if (show) {
      visible++;
      const idx = row.querySelector(".idx");
      if (idx) idx.textContent = String(visible).padStart(2, "0");
    }
  }
  if (empty) empty.style.display = visible === 0 ? "block" : "none";
}

for (const chip of chips) {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("active", c === chip));
    cat = chip.dataset.cat;
    apply();
  });
}

let deb = 0;
input?.addEventListener("input", () => {
  clearTimeout(deb);
  deb = setTimeout(() => {
    query = fold(input.value.trim());
    apply();
  }, 120);
});

try {
  paintCounts(await fetchCounts());
} catch {
  paintCounts({});
}
