import { MessageCircle } from 'lucide-react'
import { site } from '../utils/data.js'

export default function WhatsAppButton() {
  const msg = encodeURIComponent("Hi StritGRAD Market Solutions, I'd like to find out more about your services.")
  return (
    <a href={`https://wa.me/${site.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-cardHover flex items-center justify-center hover:scale-110 transition-transform">
      <MessageCircle className="text-white" size={28} fill="white" />
    </a>
  )
}
