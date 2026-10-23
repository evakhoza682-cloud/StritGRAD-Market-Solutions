import { useEffect, useState } from 'react'
import { cleanLogo } from '../utils/cleanLogo.js'

const slug = (n) => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const exts = ['png', 'svg', 'jpg', 'jpeg', 'webp']

/** Drop a logo in /public/images/partners/<name>.png. Its background is removed automatically. */
export default function PartnerLogo({ name }) {
  const [i, setI] = useState(0)
  const [src, setSrc] = useState(null)
  const failed = i >= exts.length
  useEffect(() => {
    if (failed) return
    let on = true
    const url = `/images/partners/${slug(name)}.${exts[i]}`
    cleanLogo(url).then((s) => { if (!on) return; if (s) setSrc(s); else setI((n) => n + 1) })
    return () => { on = false }
  }, [i, name, failed])
  return (
    <div className="logo-tile h-28 flex flex-col items-center justify-center gap-2 px-4 hover:-translate-y-1 transition duration-300" title={name}>
      {!failed && src ? (
        <img src={src} alt={`${name} logo`} className="max-h-16 max-w-full object-contain drop-shadow-[0_6px_10px_rgba(10,22,40,.18)] hover:scale-110 transition duration-300" />
      ) : failed ? (
        <span className="text-navy font-black text-center text-sm leading-tight">{name}</span>
      ) : null}
      {!failed && src && <span className="text-[11px] font-semibold text-slate-500">{name}</span>}
    </div>
  )
}
