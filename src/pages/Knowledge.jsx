import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

export default function Knowledge() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/articles`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Could not load articles')
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Knowledge Hub</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">Educational, structured articles written for partners and boards. No jargon. No fluff.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {items.length === 0 && !error && (
              <div className="text-slate-600">No articles yet.</div>
            )}
            {error && <div className="text-red-700">{error}</div>}
            {items.map((a) => (
              <article key={a.id} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-slate-700">{a.summary}</p>
                <div className="mt-3 text-sm text-slate-500">By {a.author}</div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
