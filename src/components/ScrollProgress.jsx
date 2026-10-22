import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? Math.min(window.scrollY / h, 1) : 0})`
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}
