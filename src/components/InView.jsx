import { useEffect, useRef, useState } from 'react'

/** Adds the class "in-view" once scrolled into view (drives the CSS grow / fill animations). */
export default function InView({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(typeof IntersectionObserver === 'undefined')
  useEffect(() => {
    if (on || !ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.25 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [on])
  return <Tag ref={ref} className={`${className} ${on ? 'in-view' : ''}`}>{children}</Tag>
}
