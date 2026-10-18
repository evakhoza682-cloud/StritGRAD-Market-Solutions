import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { insights, insightCategories } from '../utils/data.js'

export default function Insights() {
  const [cat, setCat] = useState('All')
  const list = insights.filter((a) => cat === 'All' || a.category === cat)
  return (
    <div>
      <SEO title="Insights" description="Articles, thought leadership and research on impact measurement, entrepreneurship, marketing and digital transformation." path="/insights" />
      <PageHeader eyebrow="Insights" title="Insights & Thought Leadership" subtitle="Practical thinking on implementation, impact measurement and enterprise development." />
      <section className="bg-offwhite"><div className="section">
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', ...insightCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-bold transition ${cat === c ? 'bg-navy text-gold-light' : 'bg-white text-navy border border-gray-200 hover:border-gold-500'}`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((a) => (
            <Link key={a.slug} to={`/insights/${a.slug}`} className="card p-0 overflow-hidden group">
              <div className="h-44 overflow-hidden"><img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" /></div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gold-700">{a.category}</span>
                <h2 className="font-extrabold mt-1 mb-2">{a.title}</h2>
                <p className="text-xs text-graytxt mb-2">{new Date(a.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-sm text-graytxt">{a.excerpt}</p>
              </div>
            </Link>
          ))}
          {list.length === 0 && <p className="text-graytxt">Nothing in this category yet. Check back soon.</p>}
        </div>
      </div></section>
    </div>
  )
}
