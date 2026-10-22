import { useRef } from 'react'

/** Wraps children in a card that tilts toward the mouse (3D). Disabled for reduced motion / touch. */
export default function Tilt({ children, className = '', max = 7, as: Tag = 'div' }) {
  const ref = useRef(null)
  const ok = () => typeof window !== 'undefined' && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches && !window.matchMedia?.('(hover: none)').matches
  const move = (e) => {
    if (!ok()) return
    const el = ref.current; const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return <Tag ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`}>{children}</Tag>
}
