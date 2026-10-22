import { Link } from 'react-router-dom'
import { CheckCircle2, Users, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Tilt from '../components/Tilt.jsx'
import { industries } from '../utils/data.js'
import { getIcon } from '../utils/icons.js'

export default function Industries() {
  return (
    <div>
      <SEO title="Industries We Serve" description="How StritGRAD Market Solutions supports mining, financial services, government, education, development agencies, NGOs, municipalities, corporate CSI and enterprise and supplier development." path="/industries" />
      <PageHeader eyebrow="Industries" title="Industries We Serve" subtitle="Every sector has its own rules, stakeholders and reporting needs. Here is how we help in each one." />
      <section className="bg-offwhite"><div className="section grid md:grid-cols-2 gap-6 perspective">
        {industries.map((i) => { const Icon = getIcon(i.icon); return (
          <Tilt key={i.slug} className="card" max={4}>
            <div className="flex items-center gap-4 mb-3"><div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white flex items-center justify-center shadow-[0_10px_20px_rgba(252,116,4,.35)]"><Icon size={26} /></div><h2 className="text-xl font-extrabold">{i.name}</h2></div>
            <p className="text-graytxt mb-4">{i.summary}</p>
            <p className="text-xs font-bold uppercase tracking-wide text-gold-700 mb-2">How we help</p>
            <ul className="space-y-2 mb-4 text-sm">{i.help.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 size={16} className="text-gold-600 shrink-0 mt-0.5" />{h}</li>)}</ul>
            <p className="text-sm flex gap-2 text-graytxt mb-4"><Users size={16} className="text-gold-600 shrink-0 mt-0.5" /><span><b className="text-navy">Typical clients:</b> {i.clients}</span></p>
            <Link to={`/contact?type=Business%20Enquiry&subject=${encodeURIComponent(i.name + ' enquiry')}`} className="text-gold-700 font-bold text-sm inline-flex items-center gap-1">Discuss your {i.name.toLowerCase()} programme <ArrowRight size={14} /></Link>
          </Tilt>) })}
      </div></section>
      <CTASection />
    </div>
  )
}
