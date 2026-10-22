import { useEffect, useRef, useState } from 'react'

/** Fades/slides content in when it scrolls into view. dir: up | left | right | zoom */
export default function Reveal({ children, delay = 0, dir = 'up', className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const d = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : dir === 'zoom' ? 'reveal-zoom' : ''
  return <Tag ref={ref} style={{ '--d': `${delay}ms` }} className={`reveal ${d} ${on ? 'in' : ''} ${className}`}>{children}</Tag>
}
