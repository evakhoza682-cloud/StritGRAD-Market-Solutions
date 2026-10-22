import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '../utils/data.js'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home', end: true }, { to: '/about', label: 'About' }, { to: '/services', label: 'Services', dropdown: true },
  { to: '/industries', label: 'Industries' }, { to: '/impact-intelligence', label: 'Impact Intelligence' }, { to: '/flexi-hub', label: 'Flexi Hub' }, { to: '/projects', label: 'Projects' },
  { to: '/insights', label: 'Insights' }, { to: '/careers', label: 'Careers' }, { to: '/contact', label: 'Contact' }
]
const cls = ({ isActive }) => `text-[13px] whitespace-nowrap font-semibold transition hover:text-gold-light ${isActive ? 'text-gold-light' : 'text-white'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)
  const close = () => { setOpen(false); setDd(false) }
  return (
    <nav className="bg-navy/90 backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" onClick={close} className="shrink-0" aria-label="StritGRAD Market Solutions home"><Logo className="h-12" /></Link>
        <div className="hidden xl:flex items-center gap-5">
          {links.map((l) => l.dropdown ? (
            <div key={l.to} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
              <NavLink to={l.to} className={(s) => cls(s) + ' inline-flex items-center gap-1'}>{l.label}<ChevronDown size={14} /></NavLink>
              {dd && (
                <div className="absolute left-0 top-full pt-3 w-80">
                  <div className="bg-deep border border-white/10 rounded-lg shadow-cardHover p-2">
                    {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`} onClick={close} className="block px-3 py-2 rounded text-sm text-white/90 hover:bg-white/10 hover:text-gold-light">{s.title}</Link>)}
                  </div>
                </div>
              )}
            </div>
          ) : <NavLink key={l.to} to={l.to} end={l.end} className={cls}>{l.label}</NavLink>)}
        </div>
        <Link to="/contact?type=Proposal%20Request" className="hidden xl:inline-flex btn-gold !py-2.5 !px-4 text-sm whitespace-nowrap shrink-0">Request a Proposal</Link>
        <button className="xl:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={26} /> : <Menu size={26} />}</button>
      </div>
      {open && (
        <div className="xl:hidden bg-deep border-t border-white/10 px-6 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} onClick={close} className={(s) => cls(s) + ' block py-2.5'}>{l.label}</NavLink>)}
          <div className="pl-4 border-l border-gold/40 space-y-1">
            {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`} onClick={close} className="block py-1.5 text-xs text-white/70 hover:text-gold-light">{s.title}</Link>)}
          </div>
          <Link to="/contact?type=Proposal%20Request" onClick={close} className="btn-gold w-full mt-3">Request a Proposal</Link>
        </div>
      )}
    </nav>
  )
}
