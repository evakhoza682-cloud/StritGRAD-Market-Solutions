import SEO from '../components/SEO.jsx'
import NetworkBg from '../components/NetworkBg.jsx'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import ProvinceMap from '../components/ProvinceMap.jsx'
import { Linkedin } from 'lucide-react'
import { founderPhoto } from '../utils/founderImage.js'
import { values, hybridModel, leadership } from '../utils/data.js'

export default function About() {
  return (
    <div>
      <SEO title="About Us" description="StritGRAD Market Solutions was founded to bridge the gap between strategy and execution." path="/about" />
      <PageHeader eyebrow="About Us" title="Our Story" subtitle="StritGRAD Market Solutions was founded to bridge the gap between strategy and execution." />

      <section className="bg-white"><div className="section max-w-4xl">
        <p className="text-lg text-graytxt leading-relaxed">Too many organisations invest in planning, research, and strategy – only to struggle with implementation. We exist to change that. We combine strategic thinking with on-the-ground delivery, ensuring that programmes don't just get designed – they get delivered, measured, and reported.</p>
      </div></section>

      <section className="bg-offwhite"><div className="section grid md:grid-cols-2 gap-8">
        <div className="card"><p className="eyebrow">Our Mission</p><p className="text-lg">To help organisations implement programmes, engage beneficiaries, generate market intelligence, and measure social impact through innovative hybrid solutions.</p></div>
        <div className="card"><p className="eyebrow">Our Vision</p><p className="text-lg">To be Africa's leading strategic implementation, research, and impact intelligence partner – known for turning strategy into measurable results.</p></div>
      </div></section>

      <section className="bg-white"><div className="section">
        <p className="eyebrow">Our Values</p><h2 className="section-title">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {values.map(([t, d]) => <div key={t} className="card border-t-4 border-gold-light"><h3 className="font-extrabold mb-2">{t}</h3><p className="text-graytxt text-sm">{d}</p></div>)}
        </div>
      </div></section>

      <section className="bg-aurora text-white relative overflow-hidden"><NetworkBg /><div className="section relative">
        <p className="eyebrow !text-gold-light">Our Leadership</p><h2 className="text-3xl md:text-4xl mb-8">Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((l) => (
            <div key={l.name} className="card-dark flex gap-5 items-start md:col-span-2">
              <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 bg-navy-700">
                <img src={founderPhoto} alt={`${l.name}, ${l.role}`} className="w-full h-full object-cover" style={{ objectPosition: '50% 6%' }} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">{l.name}</h3>
                <p className="text-gold-light text-sm font-semibold mb-3">{l.role}</p>
                <p className="text-white/80 text-sm mb-3">{l.bio}</p>
                {l.linkedin && <a href={l.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gold-light hover:underline"><Linkedin size={16} /> LinkedIn</a>}
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="bg-white"><div className="section max-w-4xl">
        <p className="eyebrow">Why We Exist</p><h2 className="section-title">Why StritGRAD Exists</h2>
        <p className="text-lg text-graytxt leading-relaxed">Organisations across Africa invest billions in development programmes, marketing campaigns, and stakeholder engagement. Yet many struggle to prove impact, track beneficiaries, or generate evidence that satisfies funders and regulators. StritGRAD exists to close that gap – providing the implementation muscle, the research rigour, and the measurement tools that turn investment into verified impact.</p>
      </div></section>

      <section className="bg-offwhite"><div className="section">
        <p className="eyebrow">How We Work</p><h2 className="section-title">Our Hybrid Implementation Model</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {hybridModel.map(([t, d], i) => (
            <div key={t} className="card relative"><span className="text-5xl font-black text-gold-light/60 absolute top-3 right-4">{i + 1}</span><h3 className="font-extrabold mb-2 pr-10">{t}</h3><p className="text-sm text-graytxt">{d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="bg-white"><div className="section">
        <p className="eyebrow">Reach</p><h2 className="section-title">Our National Footprint</h2>
        <ProvinceMap />
      </div></section>
      <CTASection />
    </div>
  )
}
