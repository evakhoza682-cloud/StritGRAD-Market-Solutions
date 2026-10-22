import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import CTASection from '../components/CTASection.jsx'
import NotFound from './NotFound.jsx'
import { insights } from '../utils/data.js'

export default function InsightArticle() {
  const { slug } = useParams()
  const a = insights.find((x) => x.slug === slug)
  if (!a) return <NotFound />
  return (
    <div>
      <SEO title={a.title} description={a.excerpt} path={`/insights/${slug}`} />
      <div className="h-72 md:h-96 bg-navy"><img src={a.image} alt={a.title} className="w-full h-full object-cover opacity-90" /></div>
      <article className="max-w-3xl mx-auto px-6 py-14">
        <Link to="/insights" className="inline-flex items-center gap-2 text-gold-700 font-bold text-sm mb-6"><ArrowLeft size={16} /> Back to Insights</Link>
        <p className="text-xs font-bold uppercase tracking-wide text-gold-700 mb-2">{a.category}</p>
        <h1 className="text-3xl md:text-4xl mb-3">{a.title}</h1>
        <p className="text-sm text-graytxt mb-8">{new Date(a.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        {a.body.map((p, i) => <p key={i} className="text-lg text-graytxt leading-relaxed mb-5">{p}</p>)}
      </article>
      <CTASection />
    </div>
  )
}
