import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import api, { track } from '../utils/api.js'
import { enquiryTypes } from '../utils/data.js'

export default function EnquiryForm({ defaultType = 'Business Enquiry', defaultSubject = '' }) {
  const blank = { fullName: '', email: '', phone: '', company: '', enquiryType: enquiryTypes.includes(defaultType) ? defaultType : 'Business Enquiry', subject: defaultSubject, message: '' }
  const [form, setForm] = useState(blank)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })
    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) return setStatus({ type: 'error', msg: 'Please fill in your name, email and message.' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
    setLoading(true)
    try {
      await api.post('/api/contact', { ...form, email: form.email.trim(), source: 'StritGRAD Market Solutions website' })
      track('form_submit', { form_type: form.enquiryType })
      setStatus({ type: 'success', msg: "Thank you. We've received your enquiry and will respond within 2 business days." })
      setForm(blank)
    } catch (err) {
      const m = err?.response?.data?.error
      setStatus({ type: 'error', msg: err?.response ? (m || 'Something went wrong. Please try again.') : 'Could not reach the server. Please try again, or email us directly.' })
    } finally { setLoading(false) }
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      {status.msg && (
        <div role="alert" className={`flex items-start gap-2 rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>
          {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />} {status.msg}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="label">Full name *</label><input className="input" value={form.fullName} onChange={set('fullName')} /></div>
        <div><label className="label">Email *</label><input type="email" className="input" value={form.email} onChange={set('email')} /></div>
        <div><label className="label">Phone</label><input className="input" value={form.phone} onChange={set('phone')} /></div>
        <div><label className="label">Company</label><input className="input" value={form.company} onChange={set('company')} /></div>
        <div className="sm:col-span-2"><label className="label">Enquiry type</label>
          <select className="input" value={form.enquiryType} onChange={set('enquiryType')}>{enquiryTypes.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div className="sm:col-span-2"><label className="label">Subject</label><input className="input" value={form.subject} onChange={set('subject')} /></div>
        <div className="sm:col-span-2"><label className="label">Message *</label><textarea rows={5} className="input" value={form.message} onChange={set('message')} /></div>
      </div>
      <button type="submit" disabled={loading} className="btn-gold disabled:opacity-60"><Send size={16} />{loading ? 'Sending...' : 'Send Enquiry'}</button>
    </form>
  )
}
