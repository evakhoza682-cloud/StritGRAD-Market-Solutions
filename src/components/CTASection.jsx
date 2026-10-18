import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title = 'Ready to Deliver Measurable Impact?', text = "Let's discuss how we can help you implement programmes, engage stakeholders, and measure what matters." }) {
  return (
    <section className="bg-navy text-white grid-bg">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact?type=Proposal%20Request" className="btn-gold">Request a Proposal <ArrowRight size={18} /></Link>
          <Link to="/contact?type=Business%20Enquiry&subject=Book%20a%20Consultation" className="btn-navy">Book a Consultation</Link>
        </div>
      </div>
    </section>
  )
}
