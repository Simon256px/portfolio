// Titre « SIMON COURTOIS » en particules interactives — repris de la maquette.
// Respecte prefers-reduced-motion (rendu statique) et se met en pause hors écran.
export function initTitleParticles(cv) {
  const wrap = cv.parentElement, ctx = cv.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PAL = [[2, 132, 198], [26, 98, 156], [162, 87, 136], [216, 65, 34], [81, 33, 49]];
  const STOPS = [0, 0.3, 0.55, 0.8, 1];
  const sprites = {}, mouse = { x: -1e5, y: -1e5 };
  let parts = [], W = 0, H = 0, dpr = 1, raf = 0, t = 0, roT = 0;
  const lerp = (a, b, u) => a + (b - a) * u;
  const colU = (u) => {
    u = Math.min(1, Math.max(0, u));
    let i = 1;
    while (STOPS[i] < u) i++;
    const a = PAL[i - 1], b = PAL[i], k = (u - STOPS[i - 1]) / (STOPS[i] - STOPS[i - 1]);
    return [lerp(a[0], b[0], k) | 0, lerp(a[1], b[1], k) | 0, lerp(a[2], b[2], k) | 0];
  };
  const sprite = (rgb, r) => {
    const key = rgb.join() + "|" + r;
    let s = sprites[key];
    if (s) return s;
    s = document.createElement("canvas");
    const d = Math.ceil(r * 2) + 2;
    s.width = s.height = d;
    const c = s.getContext("2d");
    c.fillStyle = "rgb(" + rgb.join() + ")";
    c.beginPath();
    c.arc(d / 2, d / 2, r, 0, 6.2832);
    c.fill();
    return sprites[key] = s;
  };
  const build = () => {
    const rct = wrap.getBoundingClientRect();
    if (rct.width < 60) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = cv.width = (rct.width * dpr) | 0;
    H = cv.height = (rct.height * dpr) | 0;
    const off = document.createElement("canvas");
    off.width = W;
    off.height = H;
    const oc = off.getContext("2d", { willReadFrequently: true });
    const font = (s) => "900 " + s + 'px "Helvetica Neue", Helvetica, Arial, sans-serif';
    oc.font = font(100);
    const fs = Math.min(100 * (W * 0.94) / oc.measureText("COURTOIS").width, H * 0.42);
    oc.font = font(fs);
    oc.textAlign = "center";
    const hL = fs * 0.72, gapL = fs * 0.18, y0 = (H - (hL * 2 + gapL)) / 2 + hL;
    oc.fillStyle = "#fff";
    oc.fillText("SIMON", W / 2, y0);
    oc.fillText("COURTOIS", W / 2, y0 + hL + gapL);
    const px = oc.getImageData(0, 0, W, H).data;
    const gap = Math.max(3, Math.round(fs / 34));
    parts = [];
    for (let y = 0; y < H; y += gap) {
      for (let x = 0; x < W; x += gap) {
        if (px[(y * W + x) * 4 + 3] < 140) continue;
        const u = Math.round((x / W + (Math.random() - 0.5) * 0.13) * 22) / 22;
        let rgb = Math.random() < 0.055 ? PAL[(Math.random() * PAL.length) | 0] : colU(u);
        const v = [0.82, 1, 1.2][(Math.random() * 3) | 0];
        rgb = [Math.min(255, (rgb[0] * v) | 0), Math.min(255, (rgb[1] * v) | 0), Math.min(255, (rgb[2] * v) | 0)];
        const r = Math.max(1, Math.round(gap * (0.3 + Math.random() * 0.26) * 2) / 2);
        parts.push({
          hx: x + (Math.random() - 0.5) * gap * 0.8,
          hy: y + (Math.random() - 0.5) * gap * 0.8,
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0,
          vy: 0,
          ph: Math.random() * 6.28,
          s: sprite(rgb, r),
        });
      }
    }
    if (reduced) {
      for (const p of parts) { p.x = p.hx; p.y = p.hy; }
      drawOnce();
    }
  };
  const drawOnce = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) ctx.drawImage(p.s, p.x - p.s.width / 2, p.y - p.s.height / 2);
  };
  const step = () => {
    raf = requestAnimationFrame(step);
    t += 0.016;
    ctx.clearRect(0, 0, W, H);
    const R = 115 * dpr, R2 = R * R;
    for (const p of parts) {
      p.vx += (p.hx - p.x) * 0.03 + Math.sin(t * 1.6 + p.ph) * 0.05 * dpr;
      p.vy += (p.hy - p.y) * 0.03 + Math.cos(t * 1.2 + p.ph * 1.7) * 0.045 * dpr;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < R2) {
        const d = Math.sqrt(d2) || 1, f = (1 - d / R) * 3.6 * dpr;
        p.vx += dx / d * f;
        p.vy += dy / d * f;
      }
      p.vx *= 0.855;
      p.vy *= 0.855;
      p.x += p.vx;
      p.y += p.vy;
      ctx.drawImage(p.s, p.x - p.s.width / 2, p.y - p.s.height / 2);
    }
  };
  const toLocal = (e) => {
    const r = cv.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) * (W / r.width);
    mouse.y = (e.clientY - r.top) * (H / r.height);
  };
  const onMove = (e) => toLocal(e);
  const onLeave = () => { mouse.x = -1e5; mouse.y = -1e5; };
  const onDown = (e) => {
    toLocal(e);
    for (const p of parts) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const fall = Math.max(0, 1 - d / (W * 0.75)), f = 30 * dpr * fall * fall;
      p.vx += dx / d * f + (Math.random() - 0.5) * 2 * dpr;
      p.vy += dy / d * f + (Math.random() - 0.5) * 2 * dpr;
    }
  };
  cv.addEventListener("pointermove", onMove);
  cv.addEventListener("pointerleave", onLeave);
  cv.addEventListener("pointerdown", onDown);
  const onVis = () => {
    if (reduced) return;
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else if (!raf) step();
  };
  document.addEventListener("visibilitychange", onVis);
  const ro = new ResizeObserver(() => {
    clearTimeout(roT);
    roT = setTimeout(build, 140);
  });
  ro.observe(wrap);
  build();
  if (!reduced) step();
  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(roT);
    ro.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    cv.removeEventListener("pointermove", onMove);
    cv.removeEventListener("pointerleave", onLeave);
    cv.removeEventListener("pointerdown", onDown);
  };
}
