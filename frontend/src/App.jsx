import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import ImpactIntelligence from './pages/ImpactIntelligence.jsx'
import FlexiHub from './pages/FlexiHub.jsx'
import Projects from './pages/Projects.jsx'
import Insights from './pages/Insights.jsx'
import InsightArticle from './pages/InsightArticle.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import { Privacy, Popia, Terms } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollAndTrack() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    try { if (window.gtag) window.gtag('event', 'page_view', { page_path: pathname }) } catch (e) { /* ignore */ }
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID
    if (!id || window.gtag) return
    const s = document.createElement('script')
    s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date()); window.gtag('config', id, { send_page_view: false })
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollAndTrack />
      <Navbar />
      <main key={pathname} className="flex-1 page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/impact-intelligence" element={<ImpactIntelligence />} />
          <Route path="/flexi-hub" element={<FlexiHub />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/popia" element={<Popia />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
