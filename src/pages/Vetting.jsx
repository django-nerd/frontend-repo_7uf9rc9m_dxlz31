import Navbar from '../components/Navbar'
import ChecklistVisual from '../components/ChecklistVisual'

export default function Vetting() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-semibold">Vetting & Standards</h1>
            <p className="mt-4 text-slate-700 max-w-3xl">We apply a 50‑point due diligence across capability, controls and conduct. Partners must meet this bar to be introduced to clients.</p>
            <ul className="mt-6 grid md:grid-cols-3 gap-6 text-slate-700">
              {[
                {title:'No Juniors', desc:'Senior oversight on all accounts. No bait‑and‑switch.'},
                {title:'No Black Boxes', desc:'You own accounts, data and IP from day one.'},
                {title:'No Commission Bias', desc:'Transparent fixed‑fee model. No kickbacks.'}
              ].map((i)=> (
                <li key={i.title} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <p className="font-semibold text-slate-900">{i.title}</p>
                  <p className="text-sm mt-2">{i.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ChecklistVisual />
      </main>
    </div>
  )
}
