/** Endless scrolling strip. Pauses on hover. */
export default function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/85">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />{t}
          </span>
        ))}
      </div>
    </div>
  )
}
