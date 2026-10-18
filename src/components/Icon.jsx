import * as L from 'lucide-react'
export default function Icon({ name, size = 28, className = '' }) {
  const C = L[name] || L.Circle
  return <C size={size} className={className} />
}
