import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { impactAreas } from '../utils/data.js'
import { getIcon } from '../utils/icons.js'

export default function ImpactIntelligence() {
  return (
    <div>
      <SEO title="Impact Intelligence™" description="Our methodology for measuring, tracking and reporting social impact, trusted by funders, government and corporates." path="/impact-intelligence" />
      <PageHeader eyebrow="Flagship Methodology" title="Impact Intelligence™ – Evidence That Matters" subtitle="Our proprietary methodology for measuring, tracking, and reporting social impact – trusted by funders, government, and corporates.">
        <Link to="/contact?type=Business%20Enquiry&subject=Impact%20Intelligence%20Demo" className="btn-gold">Request an Impact Intelligence Demo</Link>
      </PageHeader>
      <section className="bg-offwhite"><div className="section">
        <p className="eyebrow">The Framework</p><h2 className="section-title">Nine capabilities, one evidence chain</h2>
        <p className="section-sub">From the first baseline to the final board report, every step is connected so that decisions rest on verified data.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map(([t, d, ic], i) => { const Icon = getIcon(ic); return (
            <div key={t} className="card">
              <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 rounded-lg bg-navy text-gold-light flex items-center justify-center"><Icon size={24} /></div><span className="text-3xl font-black text-gold-light/70">{String(i + 1).padStart(2, '0')}</span></div>
              <h3 className="font-extrabold mb-2">{t}</h3><p className="text-sm text-graytxt">{d}</p>
            </div>) })}
        </div>
      </div></section>
      <section className="bg-aurora text-white grid-bg"><div className="section max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Evidence-based decision making</h2>
        <p className="text-white/80 text-lg">Impact Intelligence™ turns programme data into insight: what is working, for whom, and where to adjust, so funders, government and corporates can invest with confidence and report with credibility.</p>
      </div></section>
      <CTASection title="See Impact Intelligence™ in action" text="Request a demo and see how real-time dashboards and verified evidence can support your programme." />
    </div>
  )
}
