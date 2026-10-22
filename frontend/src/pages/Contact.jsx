import { useSearchParams } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site } from '../utils/data.js'

export default function Contact() {
  const [p] = useSearchParams()
  const type = p.get('type') || 'Business Enquiry'
  const subject = p.get('subject') || ''
  return (
    <div>
      <SEO title="Contact" description="Get in touch with StritGRAD Market Solutions to request a proposal or book a consultation." path="/contact" />
      <PageHeader eyebrow="Contact" title="Get In Touch" subtitle="Tell us about your programme and we will respond within two business days." />
      <section className="bg-offwhite"><div className="section grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card"><EnquiryForm key={type + subject} defaultType={type} defaultSubject={subject} /></div>
        <div className="space-y-6">
          <div className="card text-sm space-y-4">
            <h2 className="font-extrabold text-base">Contact details</h2>
            <p className="flex gap-3"><MapPin size={18} className="text-gold-600 shrink-0" /><span>{site.address}<br /><span className="text-xs text-graytxt">Registered address: {site.registeredAddress}</span></span></p>
            <p className="flex gap-3"><Phone size={18} className="text-gold-600 shrink-0" /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p>
            <p className="flex gap-3"><Mail size={18} className="text-gold-600 shrink-0" />{site.email}</p>
            <p className="flex gap-3"><Globe size={18} className="text-gold-600 shrink-0" /><a href={site.website} target="_blank" rel="noopener noreferrer">stritgradgroup.co.za</a></p>
            <p className="flex gap-3"><Clock size={18} className="text-gold-600 shrink-0" />Mon – Fri: 08:00 – 17:00</p>
          </div>
          <div className="card p-0 overflow-hidden">
            <iframe title="StritGRAD Market Solutions location" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} width="100%" height="260" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div></section>
    </div>
  )
}
