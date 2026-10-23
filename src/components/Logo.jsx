import { useEffect, useState } from 'react'
import { cleanLogo } from '../utils/cleanLogo.js'

export const LOGO_SRC = '/images/logo/market-solutions-logo.png'

/** Cleaned logo (white background removed in the browser). Returns null until ready / if missing. */
export function useLogo() {
  const [src, setSrc] = useState(null)
  useEffect(() => { let on = true; cleanLogo(LOGO_SRC).then((s) => on && setSrc(s)); return () => { on = false } }, [])
  return src
}

export default function Logo({ className = 'h-12' }) {
  const src = useLogo()
  if (src) return <img src={src} alt="StritGRAD Market Solutions" className={`${className} w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]`} />
  return (
    <span className="flex items-center gap-3 leading-none">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-navy font-black flex items-center justify-center text-lg shadow-[0_6px_18px_rgba(252,116,4,.45)]">SG</span>
      <span>
        <span className="block text-white font-black text-lg tracking-wide">STRIT<span className="text-orange-400">GRAD</span></span>
        <span className="block text-[9px] tracking-[0.28em] text-white/70 font-semibold mt-1">MARKET SOLUTIONS</span>
      </span>
    </span>
  )
}
