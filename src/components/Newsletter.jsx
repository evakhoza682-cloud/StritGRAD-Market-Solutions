import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import api, { track } from '../utils/api.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    const clean = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) { setError('Please enter a valid email address.'); return }
    setStatus('loading')
    try {
      await api.post('/api/newsletter', { email: clean, source: 'StritGRAD Market Solutions' })
      track('newsletter_signup')
      setStatus('success'); setEmail('')
    } catch (err) {
      setStatus('error')
      const m = err?.response?.data?.error
      setError(err?.response ? (m || 'Something went wrong. Please try again.') : 'Could not reach the server. Please try again.')
    }
  }

  if (status === 'success') return <p className="flex items-center gap-2 text-gold-light text-sm"><CheckCircle2 size={18} /> Thanks for subscribing!</p>
  return (
    <form onSubmit={submit} noValidate className="flex flex-col xl:flex-row gap-3">
      <input type="email" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"
        className="flex-1 min-w-0 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
      <button type="submit" disabled={status === 'loading'} className="btn-gold !py-2.5 shrink-0 disabled:opacity-60"><Send size={16} />{status === 'loading' ? 'Sending...' : 'Subscribe'}</button>
      {error && <p role="alert" className="text-red-300 text-xs sm:basis-full">{error}</p>}
    </form>
  )
}
