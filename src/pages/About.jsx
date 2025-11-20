import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold">The Board</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">Human‑led, not hype‑led. We bring governance and commercial discipline to creative work. Our background is in strategy, operations and finance — not just campaigns.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {name:'Managing Director', bio:'20+ years across consulting and growth in regulated sectors. Focus on risk, return and resourcing.'},
              {name:'Principal, Client Governance', bio:'Former COO. Builds reporting that reads like board papers, not dashboards.'},
              {name:'Principal, Partner Network', bio:'Ex‑agency owner. Vets specialists for capability, controls and conduct.'}
            ].map((p) => (
              <div key={p.name} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm mt-2 text-slate-700">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
