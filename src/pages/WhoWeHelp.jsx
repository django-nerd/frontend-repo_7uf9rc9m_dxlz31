import Navbar from '../components/Navbar'

const sectors = [
  {
    title: 'Legal Firms',
    points: [
      'Matter intake and marketing that stands up to discovery.',
      'PII protection and permissions baked into process.',
      'Advertising that aligns with professional conduct rules.'
    ]
  },
  {
    title: 'Financial & Accounting',
    points: [
      'AFSL/ASIC aware campaigns with pre‑clearance workflow.',
      'Evidence‑based reporting. No vanity metrics.',
      'Vendor controls for data residency and access.'
    ]
  },
  {
    title: 'Medical & Specialist',
    points: [
      'AHPRA compliant copy and claims review.',
      'Protected Health Information handled with controls.',
      'Patient‑first communication standards.'
    ]
  },
  {
    title: 'Construction & Manufacturing',
    points: [
      'Bid support and case‑study rigour.',
      'Supply chain and subcontractor representation aligned.',
      'Safety and quality certifications accurately communicated.'
    ]
  }
]

export default function WhoWeHelp() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Who We Help</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">We work with regulated, high‑trust firms where compliance, clarity and consistency matter as much as creativity.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {sectors.map((s) => (
              <div key={s.title} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  {s.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
