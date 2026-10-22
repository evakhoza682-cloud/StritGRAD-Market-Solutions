import { useState } from 'react'
import { provinces } from '../utils/data.js'

/** Interactive tile map of South Africa's 9 provinces (schematic layout, not to scale). */
export default function ProvinceMap() {
  const [active, setActive] = useState('GP')
  const cur = provinces.find((p) => p.id === active)
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto w-full" role="group" aria-label="Provinces map">
        {[1, 2, 3, 4].flatMap((row) => [1, 2, 3, 4].map((col) => {
          const p = provinces.find((x) => x.row === row && x.col === col)
          if (!p) return <div key={`${row}-${col}`} className="aspect-square" />
          const on = p.id === active
          return (
            <button key={p.id} onClick={() => setActive(p.id)} onMouseEnter={() => setActive(p.id)} aria-pressed={on}
              className={`aspect-square rounded-lg text-xs font-extrabold flex items-center justify-center transition ${on ? 'bg-gold-light text-navy scale-105 shadow-cardHover' : 'bg-navy text-white hover:bg-navy-600'}`}>
              {p.id}
            </button>
          )
        }))}
      </div>
      <div>
        <p className="eyebrow">Selected province</p>
        <h3 className="text-3xl font-extrabold mb-3">{cur.name}</h3>
        <p className="text-graytxt mb-4">We have delivered projects in all 9 provinces of South Africa, combining local field teams with national coordination and reporting.</p>
        <p className="text-sm text-graytxt">Tap or hover a tile to explore. Layout is schematic.</p>
      </div>
    </div>
  )
}
