import { useEffect, useState } from 'react'

export default function RotatingWords({ words, interval = 2600 }) {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % words.length), interval); return () => clearInterval(t) }, [words.length, interval])
  return <span key={i} className="word-swap text-orange-300 font-extrabold">{words[i]}</span>
}
