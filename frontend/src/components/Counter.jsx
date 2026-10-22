import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const run = () => {
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    if (typeof IntersectionObserver === 'undefined') { setN(value); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, duration])
  return <span ref={ref}>{n.toLocaleString('en-ZA')}{suffix}</span>
}
