import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <section className="bg-navy text-white min-h-[60vh] flex items-center">
      <SEO title="Page not found" description="This page could not be found." />
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-gold-light text-6xl font-black mb-4">404</p>
        <h1 className="text-3xl mb-4">We couldn't find that page</h1>
        <p className="text-white/80 mb-8">It may have moved or the link may be wrong.</p>
        <Link to="/" className="btn-gold">Back to Home</Link>
      </div>
    </section>
  )
}
