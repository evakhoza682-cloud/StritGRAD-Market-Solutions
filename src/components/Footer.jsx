import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Globe, MapPin, Phone, Mail } from 'lucide-react'
import Newsletter from './Newsletter.jsx'
import Logo from './Logo.jsx'
import { site, services } from '../utils/data.js'

const social = [
  { Icon: Linkedin, href: site.linkedin, label: 'LinkedIn' },
  { Icon: Facebook, href: site.facebook, label: 'Facebook' },
  { Icon: Instagram, href: site.instagram, label: 'Instagram' }
].filter((s) => s.href)

export default function Footer() {
  return (
    <footer className="bg-aurora text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4"><Logo className="h-14" /></div>
          <p className="text-[10px] tracking-[0.25em] text-white/60 font-semibold mb-4">MARKET SOLUTIONS (PTY) LTD</p>
          <p className="text-sm mb-4">Strategic implementation, research, marketing, customer engagement and impact intelligence partner.</p>
          <div className="flex gap-3">
            {social.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-light hover:text-navy transition"><Icon size={16} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-gold-light">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold-light">About</Link></li>
            <li><Link to="/industries" className="hover:text-gold-light">Industries</Link></li>
            <li><Link to="/impact-intelligence" className="hover:text-gold-light">Impact Intelligence™</Link></li>
            <li><Link to="/flexi-hub" className="hover:text-gold-light">Flexi Hub Partnership</Link></li>
            <li><Link to="/projects" className="hover:text-gold-light">Projects</Link></li>
            <li><Link to="/insights" className="hover:text-gold-light">Insights</Link></li>
            <li><Link to="/careers" className="hover:text-gold-light">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
          <div className="space-y-2 text-sm mt-5">
            <p className="flex items-start gap-2"><MapPin size={16} className="text-gold-light shrink-0 mt-0.5" /> {site.address}</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-gold-light" /> <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-gold-light" /> {site.email}</p>
            <p className="flex items-center gap-2"><Globe size={16} className="text-gold-light" /> <a href={site.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">stritgradgroup.co.za</a></p>

          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Insights on impact, implementation and enterprise development.</p>
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} StritGRAD Market Solutions (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link to="/popia" className="hover:text-gold-light">POPIA</Link>
            <Link to="/terms" className="hover:text-gold-light">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
