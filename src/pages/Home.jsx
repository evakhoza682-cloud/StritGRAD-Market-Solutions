import { Link } from 'react-router-dom'
import NetworkBg from '../components/NetworkBg.jsx'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Quote, TrendingUp, Users, MapPin, ShieldCheck, FileCheck2, Globe2, Settings2, Rocket, UserPlus, BarChart3, Building2, Landmark, HeartHandshake } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import Counter from '../components/Counter.jsx'
import Tilt from '../components/Tilt.jsx'
import PartnerLogo from '../components/PartnerLogo.jsx'
import InView from '../components/InView.jsx'
import RotatingWords from '../components/RotatingWords.jsx'
import CTASection from '../components/CTASection.jsx'
import { stats, services, differentiators, industries, partners, testimonials, insights, hybridModel } from '../utils/data.js'
import { getIcon } from '../utils/icons.js'

function HeroVisual() {
  return (
    <div className="hidden lg:block perspective relative h-[460px]" aria-hidden="true">
      <div className="absolute inset-0 preserve-3d">
        <div className="float-a absolute left-6 top-4 w-80 glass p-5 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
          <p className="text-[11px] uppercase tracking-widest text-orange-300 font-bold mb-3">Impact dashboard</p>
          <div className="flex items-end gap-2 h-28">
            {[40, 62, 48, 80, 66, 95, 84].map((h, i) => (<div key={i} className="flex-1 rounded-t bg-gradient-to-t from-orange-600 to-orange-300" style={{ height: `${h}%` }} />))}
          </div>
          <div className="flex justify-between text-[10px] text-white/60 mt-2"><span>Baseline</span><span>Tracking</span><span>Evidence</span></div>
        </div>
        <div className="float-b absolute right-0 top-40 w-60 glass p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-orange-400/20 text-orange-300 flex items-center justify-center"><Users size={20} /></div>
            <div><p className="text-2xl font-black text-white">15,000+</p><p className="text-xs text-white/70">Entrepreneurs reached</p></div></div>
        </div>
        <div className="float-c absolute left-24 bottom-0 w-64 glass p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-orange-500/30 text-orange-200 flex items-center justify-center"><MapPin size={20} /></div>
            <div><p className="text-2xl font-black text-white">9 Provinces</p><p className="text-xs text-white/70">National footprint</p></div></div>
        </div>
      </div>
    </div>
  )
}


const badges = [[ShieldCheck, 'POPIA-compliant data handling'], [FileCheck2, 'B-BBEE & compliance reporting'], [Globe2, 'Delivery in all 9 provinces']]
const stepIcons = [Settings2, Rocket, UserPlus, BarChart3]
const stepText = [
  ['Strategy & Design', 'We define objectives, design the programme and plan implementation with you.'],
  ['Field Implementation', 'Our teams engage communities, run campaigns and manage contact centres on the ground.'],
  ['Data Collection & Measurement', 'We collect data, track beneficiaries and measure outcomes with Impact Intelligence™.'],
  ['Reporting & Evidence', 'Dashboards and reports that satisfy funders and demonstrate return on investment.']
]
const audiences = [
  { key: 'corp', label: 'Corporates & CSI / ESD', icon: Building2, title: 'Corporates, CSI and ESD teams',
    points: ['End-to-end programme implementation', 'Beneficiary tracking with verified data', 'Funder-ready impact reports', 'B-BBEE and ESD scorecard support', 'Field teams across all 9 provinces'] },
  { key: 'gov', label: 'Government & Municipalities', icon: Landmark, title: 'Government departments and municipalities',
    points: ['Community mobilisation and engagement', 'Beneficiary registration and management', 'Programme monitoring and evaluation', 'Compliance-ready reporting', 'Workshop facilitation and feedback'] },
  { key: 'dev', label: 'Agencies, NGOs & Funders', icon: HeartHandshake, title: 'Development agencies, NGOs and funders',
    points: ['Baseline to endline research', 'Independent evaluation and SROI', 'Real-time impact dashboards', 'Transparent evidence for decisions', 'Enterprise development and market access'] }
]

function DashboardMockup() {
  const bars = [32, 48, 41, 63, 57, 78, 70, 92]
  const rows = [['Beneficiaries tracked', 86], ['Surveys completed', 72], ['Reports delivered', 94]]
  return (
    <InView className="glass p-6 shadow-[0_30px_70px_rgba(0,0,0,.45)] float-a" >
      <div className="flex items-center justify-between mb-4"><p className="text-[11px] uppercase tracking-widest text-orange-300 font-bold">Impact dashboard (illustrative)</p><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-ring" /></div>
      <div className="flex items-end gap-2 h-32 mb-5">
        {bars.map((b, i) => <div key={i} className="grow-bar flex-1 rounded-t bg-gradient-to-t from-orange-600 to-orange-300" style={{ height: `${b}%`, transitionDelay: `${i * 90}ms` }} />)}
      </div>
      {rows.map(([l, v]) => (
        <div key={l} className="mb-3"><div className="flex justify-between text-xs text-white/80 mb-1"><span>{l}</span><span>{v}%</span></div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="fill-bar h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300" style={{ '--w': `${v}%` }} /></div></div>
      ))}
    </InView>
  )
}

function Audience() {
  const [k, setK] = useState('corp')
  const a = audiences.find((x) => x.key === k)
  const Icon = a.icon
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist">
        {audiences.map((x) => { const I = x.icon; return (
          <button key={x.key} role="tab" aria-selected={k === x.key} onClick={() => setK(x.key)}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition duration-300 ${k === x.key ? 'bg-navy text-orange-300 shadow-cardHover -translate-y-0.5' : 'bg-white text-navy border border-slate-200 hover:border-orange-400'}`}><I size={18} />{x.label}</button>) })}
      </div>
      <div key={k} className="page-fade card grid md:grid-cols-2 gap-8 items-center">
        <div><div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-600 text-orange-400 flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(10,22,40,.3)]"><Icon size={28} /></div>
          <h3 className="text-2xl font-black mb-3">{a.title}</h3>
          <Link to={`/contact?type=Business%20Enquiry&subject=${encodeURIComponent(a.label)}`} className="btn-gold mt-2">Talk to us <ArrowRight size={18} /></Link></div>
        <ul className="space-y-3">{a.points.map((p) => <li key={p} className="flex gap-3 font-semibold"><CheckCircle2 className="text-orange-600 shrink-0 mt-0.5" size={20} />{p}</li>)}</ul>
      </div>
    </div>
  )
}

export default function Home() {
  const [py, setPy] = useState(0)
  useEffect(() => { const f = () => setPy(Math.min(window.scrollY, 700)); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <div>
      <SEO description="StritGRAD Market Solutions helps organisations implement programmes, engage beneficiaries, generate market intelligence and measure social impact across South Africa and Africa." />

      {/* Hero */}
      <section className="relative bg-aurora text-white overflow-hidden">
        <img src="/images/academy-training-day.jpg" alt="" className="absolute inset-0 w-full h-[120%] object-cover opacity-[.14] mix-blend-luminosity" style={{ translate: `0 ${py * 0.12}px` }} />
        <NetworkBg />
        <div className="orb w-72 h-72 bg-orange-500 -top-10 right-10" style={{ translate: `0 ${py * 0.25}px` }} /><div className="orb w-80 h-80 bg-navy-400 bottom-0 -left-10" style={{ translate: `0 ${py * -0.15}px` }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-300 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6"><TrendingUp size={14} /> Strategic Implementation Partner</p>
            <h1 className="text-4xl md:text-6xl leading-[1.05] font-black">From Strategy to <span className="text-gradient">Measurable Impact.</span></h1>
            <p className="text-lg md:text-xl text-white/85 mt-6 max-w-xl">We help organisations implement programmes, engage beneficiaries, generate market intelligence and measure social impact through innovative hybrid solutions.</p>
            <p className="text-white/65 mt-4 max-w-xl">Bridging the gap between planning and execution: we deliver programmes that work, generate evidence, and create lasting impact.</p>
            <p className="mt-5 text-lg text-white/80">We <RotatingWords words={['implement.', 'engage communities.', 'measure outcomes.', 'report evidence.']} /></p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/contact?type=Proposal%20Request" className="btn-gold">Request a Proposal <ArrowRight size={18} /></Link>
              <Link to="/contact?type=Business%20Enquiry&subject=Book%20a%20Consultation" className="btn-navy">Book a Consultation</Link>
            </div>
            <ul className="flex flex-wrap gap-3 mt-8">{badges.map(([I, t]) => <li key={t} className="inline-flex items-center gap-2 text-xs font-bold bg-white/10 border border-white/15 rounded-full px-3.5 py-2"><I size={15} className="text-orange-300" />{t}</li>)}</ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Stats band (overlapping 3D cards) */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-4 perspective">
          {stats.map((s) => (
            <Tilt key={s.label} className="rounded-2xl bg-white shadow-cardHover p-5 border border-slate-100 text-center">
              <p className="text-3xl md:text-4xl font-black text-gold-600"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="text-xs md:text-sm text-graytxt font-semibold mt-1">{s.label}</p>
            </Tilt>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white">
        <div className="section grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="section-title">An Implementation Partner, Not Just a Consulting Company</h2>
            <p className="text-graytxt text-lg mb-6">StritGRAD Market Solutions bridges the gap between planning and execution by helping organisations successfully deliver programmes while generating meaningful evidence and measurable impact. We don't just advise – we implement, measure, and report.</p>
            <Link to="/about" className="btn-outline">Learn More About Us <ArrowRight size={18} /></Link>
          </div>
          <div className="perspective">
            <Tilt className="rounded-3xl overflow-hidden shadow-cardHover" max={5}>
              <img src="/images/yaei-visit-group.jpg" alt="StritGRAD team and beneficiaries" className="w-full h-80 object-cover" loading="lazy" />
            </Tilt>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-offwhite">
        <div className="section">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Everything you need to implement, measure and report impact.</h2>
          <p className="section-sub">Six integrated service pillars designed to deliver end-to-end implementation and measurable impact.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
            {services.map((s) => { const Icon = getIcon(s.icon); return (
              <Tilt key={s.slug} className="card flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-600 text-orange-300 flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(10,22,40,.3)]"><Icon size={26} /></div>
                <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                <p className="text-graytxt text-sm mb-5 flex-1">{s.short}</p>
                <Link to={`/services/${s.slug}`} className="text-gold-700 font-bold text-sm inline-flex items-center gap-1 hover:text-navy">Learn More <ArrowRight size={14} /></Link>
              </Tilt>) })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title">From strategy to impact reporting in four steps.</h2>
          <InView className="relative mt-12">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-200"><div className="step-line h-full bg-gradient-to-r from-orange-400 to-orange-600" /></div>
            <ol className="grid md:grid-cols-4 gap-8 relative">
              {stepText.map(([t, d], i) => { const I = stepIcons[i]; return (
                <li key={t} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-600 text-orange-400 flex items-center justify-center shadow-cardHover relative z-10 pulse-ring"><I size={28} /></div>
                  <p className="text-xs font-bold text-orange-700 mt-4 mb-1">STEP {i + 1}</p>
                  <h3 className="font-extrabold mb-2">{t}</h3><p className="text-sm text-graytxt">{d}</p>
                </li>) })}
            </ol>
          </InView>
        </div>
      </section>

      {/* Dashboard / evidence */}
      <section className="bg-aurora text-white relative overflow-hidden">
        <NetworkBg />
        <div className="relative section grid lg:grid-cols-2 gap-12 items-center perspective">
          <div>
            <p className="eyebrow !text-orange-300">Evidence You Can Trust</p>
            <h2 className="text-3xl md:text-4xl font-black mb-5">Your programme. Your data. Your evidence.</h2>
            <ul className="space-y-4">
              {['Real-time dashboards for funders, boards and programme teams.', 'Verified beneficiary and outcome data collected in the field.', 'POPIA-compliant data handling and secure storage.', 'Reports built for B-BBEE, ESD and funder compliance.'].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="text-orange-300 shrink-0 mt-0.5" size={20} /><span className="text-white/90">{x}</span></li>))}
            </ul>
            <Link to="/impact-intelligence" className="btn-gold mt-8">Explore Impact Intelligence™ <ArrowRight size={18} /></Link>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* Built for you */}
      <section className="bg-offwhite">
        <div className="section">
          <p className="eyebrow">Built For You</p>
          <h2 className="section-title">Three kinds of client. One implementation partner.</h2>
          <Audience />
        </div>
      </section>

      {/* Sector marquee */}
      <section className="bg-navy text-white overflow-hidden py-5 border-y border-white/10" aria-label="Sectors we serve">
        <div className="marquee">
          {[...industries, ...industries].map((i, n) => <span key={n} className="mx-8 text-sm font-bold uppercase tracking-widest text-white/80 whitespace-nowrap">{i.name} <span className="text-orange-400 mx-6">●</span></span>)}
        </div>
      </section>

      {/* Why */}
      <section className="bg-aurora text-white relative overflow-hidden">
        <NetworkBg /><div className="orb w-72 h-72 bg-orange-500 top-0 right-0" />
        <div className="relative section grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow !text-orange-300">Why Choose StritGRAD</p>
            <h2 className="text-3xl md:text-4xl mb-5 font-black">One hybrid model: advisory, field execution and data-driven measurement</h2>
            <p className="text-white/80 text-lg">We combine consulting expertise, on-the-ground implementation and rigorous measurement, so your programme is designed well, delivered properly and proven with evidence.</p>
          </div>
          <ul className="grid gap-3 perspective">
            {differentiators.map((d) => (
              <Tilt as="li" key={d} max={4} className="flex items-start gap-3 glass p-4"><CheckCircle2 className="text-orange-300 shrink-0 mt-0.5" size={20} /><span className="font-semibold">{d}</span></Tilt>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">Sectors</p>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-sub">Every sector has its own rules, stakeholders and reporting needs. We bring implementation experience and measurement discipline to each of them.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
            {industries.map((i) => { const Icon = getIcon(i.icon); return (
              <Tilt key={i.slug} className="card">
                <div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white flex items-center justify-center shadow-[0_10px_20px_rgba(252,116,4,.35)]"><Icon size={24} /></div><h3 className="font-extrabold leading-tight">{i.name}</h3></div>
                <p className="text-sm text-graytxt mb-3">{i.summary}</p>
                <ul className="text-sm space-y-1.5 mb-3">{i.help.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 size={16} className="text-gold-600 shrink-0 mt-0.5" />{h}</li>)}</ul>
              </Tilt>) })}
          </div>
          <div className="mt-10"><Link to="/industries" className="btn-outline">Explore All Industries <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-offwhite">
        <div className="section text-center">
          <p className="eyebrow">Our Network</p>
          <h2 className="section-title">Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-5 my-10 perspective">
            {partners.map((p) => <div key={p} className="w-52"><PartnerLogo name={p} /></div>)}
          </div>
          <Link to="/contact?type=Partnership%20Enquiry" className="btn-outline">Partner With Us</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="section">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 perspective">
            {testimonials.map((t, i) => (
              <Tilt as="figure" key={i} className="card">
                <Quote className="text-orange-300 mb-3" size={30} />
                <blockquote className="text-graytxt mb-5">{t.quote}</blockquote>
                <figcaption className="text-sm"><span className="font-bold block">{t.name}</span><span className="text-graytxt">{t.org}</span>
                  <span className="inline-block mt-2 text-[11px] font-bold uppercase tracking-wide bg-navy text-orange-300 px-2 py-0.5 rounded">{t.type}</span></figcaption>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-offwhite">
        <div className="section">
          <h2 className="section-title">Latest News &amp; Insights</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 perspective">
            {insights.slice(0, 3).map((a) => (
              <Tilt key={a.slug} max={5} className="card p-0 overflow-hidden group">
                <Link to={`/insights/${a.slug}`} className="block">
                  <div className="h-44 overflow-hidden"><img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" /></div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-gold-700">{a.type}</span>
                    <h3 className="font-extrabold mt-1 mb-2">{a.title}</h3>
                    <p className="text-xs text-graytxt mb-2">{new Date(a.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-sm text-graytxt mb-3">{a.excerpt}</p>
                    <span className="text-gold-700 font-bold text-sm">Read More →</span>
                  </div>
                </Link>
              </Tilt>
            ))}
          </div>
          <div className="mt-8"><Link to="/insights" className="btn-outline">View All Insights</Link></div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
