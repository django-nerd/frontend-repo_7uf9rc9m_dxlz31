import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Governance, Not Guesswork. The safe way to scale your firm’s marketing.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            We vet, verify, and manage high‑performance marketing partners so you don’t have to.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/audit" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">Book a Governance Audit</a>
            <a href="#process" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50">How it works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
