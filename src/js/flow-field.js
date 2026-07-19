// Fond animé « tourbillons » — champ de vecteurs + vortex, rendu basse résolution, blur CSS par-dessus.
// createFlowField(canvas, opts) -> { set(cle, valeur), destroy() }
export function createFlowField(canvas, opts = {}) {
  const o = Object.assign({ speed: 1, blur: 16, opacity: 0.9, scale: 0.4, density: 1 }, opts);
  const HEX = ['#014472', '#1A629C', '#0284C6', '#512131', '#D84122'];
  const COLS = HEX.map((h) => {
    const n = parseInt(h.slice(1), 16);
    return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',0.55)';
  });
  const ctx = canvas.getContext('2d', { alpha: false });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const VORT = [
    { px: 0.24, py: 0.36, s: 1, str: 1.0, f1: 0.11, f2: 0.07, ph: 0.0 },
    { px: 0.74, py: 0.28, s: -1, str: 0.85, f1: 0.07, f2: 0.05, ph: 2.1 },
    { px: 0.56, py: 0.76, s: 1, str: 1.2, f1: 0.05, f2: 0.09, ph: 4.2 },
    { px: 0.10, py: 0.88, s: -1, str: 0.7, f1: 0.09, f2: 0.06, ph: 1.3 },
  ];
  let W = 0, H = 0, raf = 0, t = Math.random() * 90, parts = [], dead = false;
  const rnd = Math.random;
  function spawn(p) { p.x = rnd() * W; p.y = rnd() * H; p.life = 80 + rnd() * 240; return p; }
  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = Math.max(2, (r.width * o.scale) | 0), h = Math.max(2, (r.height * o.scale) | 0);
    if (Math.abs(w - W) < 3 && Math.abs(h - H) < 3) return;
    W = canvas.width = w; H = canvas.height = h;
    parts = [];
    const n = Math.min(1400, (((W * H) / 460) * o.density) | 0);
    for (let i = 0; i < n; i++) parts.push(spawn({ x: 0, y: 0, life: 0 }));
    ctx.fillStyle = '#0A0A0C'; ctx.fillRect(0, 0, W, H);
    if (reduced) warmup();
  }
  function applyStyle() {
    canvas.style.filter = 'blur(' + o.blur + 'px) saturate(1.3)';
    canvas.style.opacity = o.opacity;
  }
  const v = { x: 0, y: 0 };
  function field(x, y) {
    let vx = Math.sin(y * 0.006 + t * 0.5) * 0.34;
    let vy = Math.cos(x * 0.005 - t * 0.4) * 0.3;
    for (let i = 0; i < VORT.length; i++) {
      const c = VORT[i];
      const cx = (c.px + 0.15 * Math.sin(t * c.f1 + c.ph)) * W;
      const cy = (c.py + 0.13 * Math.cos(t * c.f2 + c.ph)) * H;
      const dx = x - cx, dy = y - cy;
      const g = c.s * c.str * Math.exp(-(dx * dx + dy * dy) / (W * H * 0.055));
      vx += -dy * g * 0.02; vy += dx * g * 0.02;
    }
    v.x = vx; v.y = vy;
  }
  function stepAll() {
    t += 0.0065 * o.speed;
    ctx.fillStyle = 'rgba(10,10,12,0.05)'; ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 1;
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      field(p.x, p.y);
      const m = Math.hypot(v.x, v.y);
      const k = Math.min(5, (1.9 * o.speed) / (m + 0.14));
      const nx = p.x + v.x * k, ny = p.y + v.y * k;
      if (--p.life < 0 || nx < -12 || nx > W + 12 || ny < -12 || ny > H + 12) { spawn(p); continue; }
      const u = Math.min(1, m / 1.05);
      ctx.strokeStyle = COLS[u < 0.2 ? 0 : u < 0.38 ? 1 : u < 0.55 ? 2 : u < 0.72 ? 3 : 4];
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
      p.x = nx; p.y = ny;
    }
  }
  function warmup() { for (let i = 0; i < 220; i++) stepAll(); }
  function loop() { raf = requestAnimationFrame(loop); stepAll(); }
  function start() { if (dead || reduced) return; cancelAnimationFrame(raf); loop(); }
  function stop() { cancelAnimationFrame(raf); raf = 0; }
  const onVis = () => { document.hidden ? stop() : start(); };
  document.addEventListener('visibilitychange', onVis);
  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas);
  resize(); applyStyle(); start();
  return {
    set(k, val) { o[k] = val; if (k === 'blur' || k === 'opacity') applyStyle(); },
    destroy() { dead = true; stop(); ro.disconnect(); document.removeEventListener('visibilitychange', onVis); },
  };
}
