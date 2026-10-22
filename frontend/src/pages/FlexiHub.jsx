import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { flexiSections } from '../utils/data.js'

export default function FlexiHub() {
  return (
    <div>
      <SEO title="Flexi Hub Partnership" description="A strategic collaboration bringing digital solutions, financial inclusion and business growth to communities across South Africa." path="/flexi-hub" />
      <PageHeader eyebrow="Partnership" title="Flexi Hub Partnership – Digitising Business, Driving Inclusion" subtitle="A strategic collaboration bringing digital solutions, financial inclusion, and business growth to communities across South Africa.">
        <Link to="/contact?type=Partnership%20Enquiry&subject=Partner%20With%20Flexi%20Hub" className="btn-gold">Partner With Flexi Hub</Link>
      </PageHeader>
      <section className="bg-offwhite"><div className="section grid md:grid-cols-2 gap-6">
        {flexiSections.map(([t, d], i) => (
          <div key={t} className="card"><span className="text-xs font-bold text-gold-700">0{i + 1}</span><h2 className="text-xl font-extrabold my-1">{t}</h2><p className="text-graytxt">{d}</p></div>
        ))}
      </div></section>
      <section className="bg-navy text-white"><div className="section text-center">
        <h2 className="text-3xl mb-4">Ready to get your business onboarded?</h2>
        <Link to="/contact?type=Partnership%20Enquiry&subject=Partner%20With%20Flexi%20Hub" className="btn-gold">Partner With Flexi Hub</Link>
      </div></section>
    </div>
  )
}
