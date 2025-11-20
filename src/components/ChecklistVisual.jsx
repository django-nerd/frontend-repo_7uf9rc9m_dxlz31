export default function ChecklistVisual() {
  const items = Array.from({ length: 12 }).map((_, i) => `Checkpoint ${i + 1}`)
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our 50‑Point Due Diligence</h2>
        <p className="mt-3 text-slate-700">A rigorous assessment across governance, capability, security and performance. The visual weight matters because the standard matters.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[0,1,2].map((col) => (
            <div key={col} className="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-3 max-h-[420px] overflow-y-auto">
                {items.map((label, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{label}</p>
                      <p className="text-sm text-slate-600">Evidence on file • Verified</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-slate-600 text-sm">No juniors. No black boxes. No commission bias. You own the data from day one.</div>
      </div>
    </section>
  )
}
