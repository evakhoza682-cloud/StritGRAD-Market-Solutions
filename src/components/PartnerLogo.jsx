import { useState } from 'react'

const slug = (n) => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/**
 * Drop a logo file in /public/images/partners/<name>.png (e.g. yaei.png, capital-legacy.png,
 * flexi-group.png). White backgrounds blend away automatically on light sections.
 */
export default function PartnerLogo({ name }) {
  const exts = ['png', 'svg', 'jpg', 'jpeg', 'webp']
  const [i, setI] = useState(0)
  const failed = i >= exts.length
  return (
    <div className="logo-tile h-28 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col items-center justify-center gap-2 px-4 hover:-translate-y-1 hover:shadow-cardHover transition duration-300" title={name}>
      {!failed ? (
        <img src={`/images/partners/${slug(name)}.${exts[i]}`} alt={`${name} logo`} onError={() => setI(i + 1)} className="logo-clean max-h-14 max-w-full object-contain" />
      ) : (
        <span className="text-navy font-black text-center text-sm leading-tight">{name}</span>
      )}
      {!failed && <span className="text-[11px] font-semibold text-slate-500">{name}</span>}
    </div>
  )
}
