import NetworkBg from './NetworkBg.jsx'

export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="bg-aurora text-white relative overflow-hidden">
      <NetworkBg />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        {eyebrow && <p className="eyebrow !text-gold-light">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl leading-tight max-w-4xl">{title}</h1>
        {subtitle && <p className="text-white/80 text-lg mt-5 max-w-3xl">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </header>
  )
}
