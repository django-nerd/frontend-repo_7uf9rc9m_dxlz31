import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Audit() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    firm: '',
    industry: '',
    monthly_marketing_spend: '',
    phone: '',
    notes: '',
    preferred_time: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          monthly_marketing_spend: form.monthly_marketing_spend ? Number(form.monthly_marketing_spend) : null
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok: true, message: 'Thanks. We’ll be in touch shortly.' })
      setForm({ name:'', email:'', firm:'', industry:'', monthly_marketing_spend:'', phone:'', notes:'', preferred_time:'' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  const field = (label, name, type = 'text', required = false) => (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        required={required}
        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900"
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Marketing Governance Audit</h1>
          <p className="mt-4 text-slate-700">Is your high‑value time being wasted on low‑value marketing tasks? We audit your current agency contracts, spend and results to find waste and risk.</p>
          <form onSubmit={submit} className="mt-8 space-y-4 bg-slate-50 border border-slate-200 rounded-lg p-6">
            {field('Full name', 'name', 'text', true)}
            {field('Work email', 'email', 'email', true)}
            {field('Firm name', 'firm', 'text', true)}
            {field('Industry', 'industry')}
            {field('Monthly marketing spend (approx)', 'monthly_marketing_spend', 'number')}
            {field('Phone', 'phone')}
            <div>
              <label className="block text-sm font-medium text-slate-700">Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-900 focus:ring-slate-900"
              />
            </div>
            {field('Preferred time for a call', 'preferred_time')}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? 'Submitting…' : 'Book the Audit'}
            </button>
            {status && (
              <div className={`text-sm ${status.ok ? 'text-emerald-700' : 'text-red-700'}`}>{status.message}</div>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}
