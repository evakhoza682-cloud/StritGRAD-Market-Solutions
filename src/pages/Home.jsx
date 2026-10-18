import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import Counter from '../components/Counter.jsx'
import CTASection from '../components/CTASection.jsx'
import { stats, services, differentiators, industries, partners, testimonials, insights } from '../utils/data.js'
import { getIcon } from '../utils/icons.js'

export default function Home() {
  return (
    <div>
      <SEO description="StritGRAD Market Solutions helps organisations implement programmes, engage beneficiaries, generate market intelligence and measure social impact across South Africa and Africa." />

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <img src="/images/academy-training-day.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="eyebrow !text-gold-light">Strategic Implementation Partner</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] max-w-4xl">From Strategy to <span className="text-gold-light">Measurable Impact.</span></h1>
          <p className="text-lg md:text-xl text-white/85 mt-6 max-w-3xl">We help organisations implement programmes, engage beneficiaries, generate market intelligence and measure social impact through innovative hybrid solutions.</p>
          <p className="text-white/70 mt-4 max-w-3xl">Bridging the gap between planning and execution: we deliver programmes that work, generate evidence, and create lasting impact.</p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link to="/contact?type=Proposal%20Request" className="btn-gold">Request a Proposal <ArrowRight size={18} /></Link>
            <Link to="/contact?type=Business%20Enquiry&subject=Book%20a%20Consultation" className="btn-navy">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* About preview + stats */}
      <section className="bg-white">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">An Implementation Partner, Not Just a Consulting Company</h2>
              <p className="text-graytxt text-lg mb-6">StritGRAD Market Solutions bridges the gap between planning and execution by helping organisations successfully deliver programmes while generating meaningful evidence and measurable impact. We don't just advise – we implement, measure, and report.</p>
              <Link to="/about" className="btn-outline">Learn More About Us <ArrowRight size={18} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`rounded-xl bg-navy text-white p-6 ${i === 4 ? 'col-span-2' : ''}`}>
                  <p className="text-4xl font-black text-gold-light"><Counter value={s.value} suffix={s.suffix} /></p>
                  <p className="text-sm text-white/80 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-offwhite">
        <div className="section">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-sub">Six integrated service pillars designed to deliver end-to-end implementation and measurable impact.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => { const Icon = getIcon(s.icon); return (
              <div key={s.slug} className="card flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-navy text-gold-light flex items-center justify-center mb-4"><Icon size={24} /></div>
                <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                <p className="text-graytxt text-sm mb-5 flex-1">{s.short}</p>
                <Link to={`/services/${s.slug}`} className="text-gold-700 font-bold text-sm inline-flex items-center gap-1 hover:text-navy">Learn More <ArrowRight size={14} /></Link>
              </div>) })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-navy text-white grid-bg">
        <div className="section grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow !text-gold-light">Why Choose StritGRAD</p>
            <h2 className="text-3xl md:text-4xl mb-5">One hybrid model: advisory, field execution and data-driven measurement</h2>
            <p className="text-white/80 text-lg">We combine consulting expertise, on-the-ground implementation and rigorous measurement, so your programme is designed well, delivered properly and proven with evidence.</p>
          </div>
          <ul className="grid gap-3">
            {differentiators.map((d) => (
              <li key={d} className="flex items-start gap-3 bg-deep border border-white/10 rounded-lg p-4"><CheckCircle2 className="text-gold-light shrink-0 mt-0.5" size={20} /><span className="font-semibold">{d}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">Sectors</p>
          <h2 className="section-title">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {industries.map((i) => { const Icon = getIcon(i.icon); return (
              <div key={i.name} className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 hover:border-gold-500 hover:shadow-card transition">
                <Icon className="text-gold-600 shrink-0" size={26} /><span className="font-bold">{i.name}</span>
              </div>) })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-offwhite">
        <div className="section text-center">
          <h2 className="section-title">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
            {partners.map((p) => (
              <div key={p} className="h-20 rounded-lg bg-white border border-gray-200 flex items-center justify-center px-3 text-sm font-bold text-navy/70">{p}</div>
            ))}
          </div>
          <Link to="/contact?type=Partnership%20Enquiry" className="btn-outline">Partner With Us</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="section">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="card relative">
                <Quote className="text-gold-300 mb-3" size={28} />
                <blockquote className="text-graytxt mb-5">{t.quote}</blockquote>
                <figcaption className="text-sm"><span className="font-bold block">{t.name}</span><span className="text-graytxt">{t.org}</span>
                  <span className="inline-block mt-2 text-[11px] font-bold uppercase tracking-wide bg-navy text-gold-light px-2 py-0.5 rounded">{t.type}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-offwhite">
        <div className="section">
          <h2 className="section-title">Latest News &amp; Insights</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {insights.slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="card p-0 overflow-hidden group">
                <div className="h-44 overflow-hidden"><img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" /></div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gold-700">{a.type}</span>
                  <h3 className="font-extrabold mt-1 mb-2">{a.title}</h3>
                  <p className="text-xs text-graytxt mb-2">{new Date(a.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-sm text-graytxt mb-3">{a.excerpt}</p>
                  <span className="text-gold-700 font-bold text-sm">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8"><Link to="/insights" className="btn-outline">View All Insights</Link></div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
