import { MessageCircle } from 'lucide-react'
import { site } from '../utils/data.js'

const text = "Hi StritGRAD Market Solutions, I'd like to find out more about your services."
const mobileLink = `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(text)}`
const desktopLink = `https://web.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(text)}`

/** Phones open the WhatsApp app; computers open WhatsApp Web directly (skips the wa.me landing page). */
export default function WhatsAppButton() {
  const onClick = (e) => {
    const mobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent || '')
    if (!mobile) { e.preventDefault(); window.open(desktopLink, '_blank', 'noopener,noreferrer') }
  }
  return (
    <a href={mobileLink} onClick={onClick} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-cardHover flex items-center justify-center hover:scale-110 transition-transform">
      <MessageCircle className="text-white" size={28} fill="white" />
    </a>
  )
}
