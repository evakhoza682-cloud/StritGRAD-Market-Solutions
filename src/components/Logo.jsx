import { useState } from 'react'

export const LOGO_SRC = '/images/logo/market-solutions-logo.png'

/** Uses your real logo file if it is in /public/images/logo/, else a clean wordmark. */
export default function Logo({ className = 'h-12' }) {
  const [failed, setFailed] = useState(false)
  if (!failed) return <img src={LOGO_SRC} alt="StritGRAD Market Solutions" className={`${className} w-auto object-contain`} onError={() => setFailed(true)} />
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
