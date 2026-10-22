import { useEffect, useState } from 'react'

export default function RotatingWord({ words, every = 2400 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % words.length), every)
    return () => clearInterval(t)
  }, [words.length, every])
  return <span key={i} className="word-swap text-gradient">{words[i]}</span>
}
