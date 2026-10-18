import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import CTASection from '../components/CTASection.jsx'
import NotFound from './NotFound.jsx'
import { services, projects } from '../utils/data.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const cases = projects.filter((p) => s.title.startsWith(p.service.split(' ')[0]) || p.service === s.title).slice(0, 2)
  return (
    <div>
      <SEO title={s.title} description={s.overview} path={`/services/${slug}`} />
      <PageHeader eyebrow="Service" title={s.title} subtitle={s.overview}>
        <Link to={`/contact?type=Proposal%20Request&subject=${encodeURIComponent(s.title)}`} className="btn-gold">Request a Proposal</Link>
      </PageHeader>
      <section className="bg-white"><div className="section grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div><h2 className="text-2xl font-extrabold mb-4">Methodology</h2>
            <div className="flex flex-wrap items-center gap-2">
              {s.method.map((m, i) => (<span key={m} className="inline-flex items-center gap-2"><span className="bg-navy text-white font-bold text-sm px-4 py-2 rounded-md">{i + 1}. {m}</span>{i < s.method.length - 1 && <ChevronRight size={16} className="text-gold-600" />}</span>))}
            </div></div>
          <div><h2 className="text-2xl font-extrabold mb-4">Details</h2>
            <Accordion items={[
              { title: 'Benefits', body: <ul className="space-y-2">{s.benefits.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />{b}</li>)}</ul> },
              { title: 'Ideal clients', body: <ul className="space-y-2">{s.clients.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />{b}</li>)}</ul> },
              { title: 'Deliverables', body: <ul className="space-y-2">{s.deliverables.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 size={18} className="text-gold-600 shrink-0 mt-0.5" />{b}</li>)}</ul> }
            ]} /></div>
          {cases.length > 0 && <div><h2 className="text-2xl font-extrabold mb-4">Related case studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">{cases.map((c) => <Link key={c.id} to="/projects" className="card"><h3 className="font-extrabold mb-1">{c.title}</h3><p className="text-sm text-graytxt">{c.background}</p></Link>)}</div></div>}
        </div>
        <aside className="space-y-4">
          <div className="card-dark"><h3 className="font-extrabold mb-3 text-gold-light">Other services</h3>
            <ul className="space-y-2 text-sm">{services.filter((x) => x.slug !== slug).map((x) => <li key={x.slug}><Link to={`/services/${x.slug}`} className="hover:text-gold-light">{x.title}</Link></li>)}</ul></div>
        </aside>
      </div></section>
      <CTASection />
    </div>
  )
}
