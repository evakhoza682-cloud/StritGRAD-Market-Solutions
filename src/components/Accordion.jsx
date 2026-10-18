import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white">
      {items.map((it, i) => (
        <div key={it.title}>
          <button className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-bold text-navy" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {it.title}
            <ChevronDown size={18} className={`shrink-0 transition ${open === i ? 'rotate-180 text-gold-600' : ''}`} />
          </button>
          {open === i && <div className="px-5 pb-5 text-graytxt leading-relaxed">{it.body}</div>}
        </div>
      ))}
    </div>
  )
}
