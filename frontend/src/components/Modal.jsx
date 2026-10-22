import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return
    const h = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/80" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-cardHover" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 p-6 border-b border-gray-100">
          <h3 className="text-xl font-extrabold text-navy">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="text-graytxt hover:text-navy"><X size={22} /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
