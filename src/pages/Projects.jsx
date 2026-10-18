import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Modal from '../components/Modal.jsx'
import CTASection from '../components/CTASection.jsx'
import { projects } from '../utils/data.js'

const uniq = (k) => ['All', ...Array.from(new Set(projects.map((p) => p[k])))]

export default function Projects() {
  const [f, setF] = useState({ industry: 'All', service: 'All', province: 'All' })
  const [sel, setSel] = useState(null)
  const list = projects.filter((p) => ['industry', 'service', 'province'].every((k) => f[k] === 'All' || p[k] === f[k]))
  const Select = ({ k, label }) => (
    <label className="text-sm font-semibold block">{label}
      <select className="input mt-1" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}>{uniq(k).map((o) => <option key={o}>{o}</option>)}</select>
    </label>
  )
  return (
    <div>
      <SEO title="Projects & Case Studies" description="Selected StritGRAD Market Solutions projects: background, challenge, approach and results." path="/projects" />
      <PageHeader eyebrow="Projects" title="Projects & Case Studies" subtitle="Delivery across industries, services and provinces. Filter to find work relevant to you." />
      <section className="bg-offwhite"><div className="section">
        <div className="grid sm:grid-cols-3 gap-4 mb-8"><Select k="industry" label="Industry" /><Select k="service" label="Service" /><Select k="province" label="Province" /></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <button key={p.id} onClick={() => setSel(p)} className="card p-0 overflow-hidden text-left group">
              <div className="h-44 overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" /></div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gold-700">{p.industry}</span>
                <h3 className="font-extrabold my-1">{p.title}</h3>
                <p className="text-xs text-graytxt flex items-center gap-1 mb-2"><MapPin size={12} /> {p.province} · {p.service}</p>
                <p className="text-sm text-graytxt">{p.background}</p>
              </div>
            </button>
          ))}
          {list.length === 0 && <p className="text-graytxt">No projects match those filters.</p>}
        </div>
        <p className="text-xs text-graytxt mt-8">Project summaries are illustrative and will be replaced with client-approved case studies.</p>
      </div></section>

      <Modal open={!!sel} onClose={() => setSel(null)} title={sel?.title}>
        {sel && (
          <div className="space-y-4 text-sm">
            <img src={sel.image} alt={sel.title} className="w-full h-48 object-cover rounded-lg" />
            <p><b>Client:</b> {sel.client}</p>
            <p><b>Background:</b> {sel.background}</p>
            <p><b>Challenge:</b> {sel.challenge}</p>
            <p><b>Approach:</b> {sel.approach}</p>
            <div><b>Results:</b><ul className="list-disc pl-5 mt-1 text-graytxt">{sel.results.map((r) => <li key={r}>{r}</li>)}</ul></div>
            <Link to={`/contact?type=Business%20Enquiry&subject=${encodeURIComponent('Case study request - ' + sel.title)}`} onClick={() => setSel(null)} className="btn-gold">Request a Case Study (PDF)</Link>
          </div>
        )}
      </Modal>
      <CTASection />
    </div>
  )
}
