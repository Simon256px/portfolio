import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  location: new URL("https://simoncourtois.com"),
});

site.add("styles.css");
site.add("js");
site.add("fonts");

// Temps de lecture estimé (200 mots/min), calculé au build.
site.preprocess([".md"], (pages) => {
  for (const page of pages) {
    const words = String(page.data.content ?? "").split(/\s+/).filter(Boolean).length;
    page.data.readingTime = Math.max(1, Math.round(words / 200));
  }
});

// Date au format de la maquette : 12.07.26
site.filter("dmy", (value: unknown) => {
  const d = value instanceof Date ? value : new Date(String(value));
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${String(d.getFullYear()).slice(-2)}`;
});

site.filter("pad2", (n: unknown) => String(n).padStart(2, "0"));

// Couleur de pastille par catégorie : celles de la maquette sont fixes,
// toute nouvelle catégorie reçoit une couleur stable issue de la palette du fond animé.
const FIXED_DOTS: Record<string, string> = {
  "CREATIVE DEV": "#0284C6",
  "FRONT-END": "#D84122",
  "DESIGN": "#A25788",
  "CARNET": "#1A629C",
};
const DOT_PALETTE = ["#0284C6", "#D84122", "#A25788", "#1A629C", "#7A8C4F", "#B98A2F", "#512131"];
site.filter("dotColor", (cat: unknown) => {
  const c = String(cat ?? "").toUpperCase();
  if (FIXED_DOTS[c]) return FIXED_DOTS[c];
  let h = 0;
  for (const ch of c) h = (h * 31 + ch.codePointAt(0)!) >>> 0;
  return DOT_PALETTE[h % DOT_PALETTE.length];
});

export default site;
