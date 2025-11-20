export default function SocialProof() {
  const logos = ['EO', 'ICA', 'AICD', 'Chambers', 'FINSIA', 'AMA']
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-slate-600">Trusted by members of</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="h-12 flex items-center justify-center bg-white border border-slate-200 rounded">
              <span className="text-slate-500 text-sm font-semibold">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
