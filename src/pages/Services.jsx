import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../utils/data.js'
import { getIcon } from '../utils/icons.js'

export default function Services() {
  return (
    <div>
      <SEO title="Services" description="Strategic marketing, research and market intelligence, monitoring and evaluation, stakeholder engagement, contact centre services and enterprise development support." path="/services" />
      <PageHeader eyebrow="Services" title="Six Integrated Service Pillars" subtitle="End-to-end implementation, from strategy and fieldwork to measurement and reporting." />
      <section className="bg-offwhite"><div className="section grid md:grid-cols-2 gap-6">
        {services.map((s) => { const Icon = getIcon(s.icon); return (
          <div key={s.slug} className="card">
            <div className="flex items-center gap-4 mb-3"><div className="w-12 h-12 rounded-lg bg-navy text-gold-light flex items-center justify-center"><Icon size={24} /></div><h2 className="text-xl font-extrabold">{s.title}</h2></div>
            <p className="text-graytxt mb-4">{s.overview}</p>
            <Link to={`/services/${s.slug}`} className="text-gold-700 font-bold inline-flex items-center gap-1">View service <ArrowRight size={14} /></Link>
          </div>) })}
      </div></section>
      <CTASection />
    </div>
  )
}
