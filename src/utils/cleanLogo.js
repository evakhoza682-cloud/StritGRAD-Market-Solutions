// Removes a plain white/light background from a logo (flood-fill from the edges), in the browser.
const cache = {}
export function cleanLogo(src) {
  if (cache[src]) return cache[src]
  cache[src] = new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      try {
        const w = img.naturalWidth, h = img.naturalHeight
        const c = document.createElement('canvas'); c.width = w; c.height = h
        const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0)
        const d = ctx.getImageData(0, 0, w, h), p = d.data
        const corner = (x, y) => { const i = (y * w + x) * 4; return [p[i], p[i + 1], p[i + 2], p[i + 3]] }
        const cs = [corner(0, 0), corner(w - 1, 0), corner(0, h - 1), corner(w - 1, h - 1)].filter((q) => q[3] > 200)
        const bg = cs.length ? cs[0] : [255, 255, 255, 255]
        const tol = (bg[0] > 225 && bg[1] > 225 && bg[2] > 225) ? 30 : 38
        const near = (i) => p[i + 3] < 10 || (Math.abs(p[i] - bg[0]) < tol && Math.abs(p[i + 1] - bg[1]) < tol && Math.abs(p[i + 2] - bg[2]) < tol)
        const seen = new Uint8Array(w * h), stack = []
        const push = (x, y) => { if (x < 0 || y < 0 || x >= w || y >= h) return; const k = y * w + x; if (seen[k]) return; if (!near(k * 4)) return; seen[k] = 1; stack.push(k) }
        for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1) }
        for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y) }
        while (stack.length) { const k = stack.pop(), x = k % w, y = (k / w) | 0; p[k * 4 + 3] = 0; push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1) }
        // soften the edge pixels next to removed background
        for (let k = 0; k < w * h; k++) { if (!seen[k]) { const x = k % w, y = (k / w) | 0; if ((x > 0 && seen[k - 1]) || (x < w - 1 && seen[k + 1]) || (y > 0 && seen[k - w]) || (y < h - 1 && seen[k + w])) { const i = k * 4; if (p[i] > 200 && p[i + 1] > 200 && p[i + 2] > 200) p[i + 3] = 90 } } }
        ctx.putImageData(d, 0, 0)
        resolve(c.toDataURL('image/png'))
      } catch (e) { resolve(src) }
    }
    img.onerror = () => resolve(null)
    img.src = src
  })
  return cache[src]
}
