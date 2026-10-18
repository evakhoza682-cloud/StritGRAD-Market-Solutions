import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { careers, careerIntro } from '../utils/data.js'

export default function Careers() {
  return (
    <div>
      <SEO title="Careers" description="Join the StritGRAD Market Solutions team: vacancies, internships, graduate programme and volunteer opportunities." path="/careers" />
      <PageHeader eyebrow="Careers" title="Join Our Team" subtitle="Help us turn strategy into measurable impact across South Africa and Africa." />
      <section className="bg-offwhite"><div className="section grid md:grid-cols-2 gap-6">
        {Object.entries(careers).map(([sec, jobs]) => (
          <div key={sec} className="card">
            <h2 className="text-xl font-extrabold mb-1">{sec}</h2>
            <p className="text-sm text-graytxt mb-4">{careerIntro[sec]}</p>
            {jobs.length === 0 ? (
              <>
                <p className="text-sm bg-offwhite rounded-md p-3 mb-4">No listings are open right now. Send us your details and we will contact you when something suits you.</p>
                <Link to={`/contact?type=Careers%20Enquiry&subject=${encodeURIComponent(sec + ' - General application')}`} className="btn-outline !py-2 text-sm">Apply Now</Link>
              </>
            ) : jobs.map((j) => (
              <div key={j.title} className="border-t border-gray-100 py-3"><p className="font-bold">{j.title}</p><p className="text-xs text-graytxt">{j.location} · {j.type}</p><p className="text-sm text-graytxt my-2">{j.description}</p>
                <Link to={`/contact?type=Careers%20Enquiry&subject=${encodeURIComponent(j.title)}`} className="btn-gold !py-2 text-sm">Apply Now</Link></div>
            ))}
          </div>
        ))}
      </div></section>
    </div>
  )
}
