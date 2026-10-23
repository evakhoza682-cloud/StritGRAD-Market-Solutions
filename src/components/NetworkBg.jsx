import { useEffect, useRef } from 'react'

/** Living "tech network": drifting nodes joined by glowing lines, with data pulses; reacts to the mouse. */
export default function NetworkBg({ density = 0.00012, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current; if (!cv || !cv.getContext) return
    const ctx = cv.getContext('2d'); if (!ctx) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, nodes = [], pulses = [], raf = 0, mx = -999, my = -999, visible = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const r = cv.getBoundingClientRect(); w = r.width; h = r.height
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(24, Math.min(90, Math.round(w * h * density)))
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8, o: Math.random() < .22 }))
    }
    const link = 165
    const frame = () => {
      raf = requestAnimationFrame(frame); if (!visible) return
      ctx.clearRect(0, 0, w, h)
      for (const a of nodes) {
        a.x += a.vx; a.y += a.vy
        if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1
        const dx = a.x - mx, dy = a.y - my, d = Math.hypot(dx, dy)
        if (d < 120 && d > 0) { a.x += dx / d * .6; a.y += dy / d * .6 }
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < link) {
          const al = (1 - d / link) * .75
          ctx.strokeStyle = (a.o || b.o) ? `rgba(255,138,31,${al})` : `rgba(160,190,255,${al * .7})`
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          if (!reduce && Math.random() < .0009 && pulses.length < 14) pulses.push({ a, b, t: 0 })
        }
      }
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.283)
        ctx.fillStyle = n.o ? 'rgba(255,138,31,.95)' : 'rgba(210,225,255,.8)'
        if (n.o) { ctx.shadowColor = '#fc7404'; ctx.shadowBlur = 10 } else ctx.shadowBlur = 0
        ctx.fill()
      }
      ctx.shadowBlur = 0
      pulses = pulses.filter((p) => {
        p.t += .018; if (p.t >= 1) return false
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t
        ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.283); ctx.fillStyle = '#ffb066'; ctx.shadowColor = '#ff8a1f'; ctx.shadowBlur = 14; ctx.fill(); ctx.shadowBlur = 0
        return true
      })
    }
    const move = (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top }
    const leave = () => { mx = -999; my = -999 }
    resize()
    window.addEventListener('resize', resize)
    const host = cv.parentElement || cv
    host.addEventListener('mousemove', move); host.addEventListener('mouseleave', leave)
    let io
    if ('IntersectionObserver' in window) { io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }); io.observe(cv) }
    if (reduce) { frame(); cancelAnimationFrame(raf) } else raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); host.removeEventListener('mousemove', move); host.removeEventListener('mouseleave', leave); io && io.disconnect() }
  }, [density])
  return <canvas ref={ref} aria-hidden="true" className={`absolute inset-0 w-full h-full ${className}`} />
}
