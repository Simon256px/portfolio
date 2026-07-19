// Commun à toutes les pages : fond animé, horloge Paris, retour en haut.
import { createFlowField } from "/js/flow-field.js";

const bg = document.getElementById("bg-canvas");
if (bg) {
  createFlowField(bg, {
    blur: parseFloat(bg.dataset.blur ?? "16"),
    speed: parseFloat(bg.dataset.speed ?? "1"),
    opacity: parseFloat(bg.dataset.opacity ?? "0.9"),
  });
}

// Horloge — mise en pause quand l'onglet est caché (sobriété).
const clocks = document.querySelectorAll(".js-clock");
if (clocks.length) {
  let timer = 0;
  const tick = () => {
    const h = new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris", hour12: false });
    for (const el of clocks) el.textContent = h;
  };
  const start = () => { tick(); timer = setInterval(tick, 1000); };
  const stop = () => clearInterval(timer);
  start();
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
}

document.getElementById("to-top")?.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo({ top: 0, behavior: "smooth" });
});
