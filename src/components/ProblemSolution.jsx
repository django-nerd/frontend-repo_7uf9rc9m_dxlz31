export default function ProblemSolution() {
  return (
    <section className="bg-white py-16" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">The problem</h2>
            <div className="mt-4 space-y-3 text-slate-700">
              <p>Hiring marketing agencies is a wild west. Credentials are inflated, juniors run accounts, and reporting reads like a highlight reel.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>No line of sight on who actually does the work.</li>
                <li>Assets and data locked in black boxes.</li>
                <li>Fees bundled with undisclosed kickbacks.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our governance model</h2>
            <div className="mt-4 space-y-3 text-slate-700">
              <p>We operate like an external board for your marketing. Independent, transparent, and accountable.</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><span className="font-semibold">The Blueprint:</span> precision strategy before a dollar is spent.</li>
                <li><span className="font-semibold">The Brokerage:</span> matching you with vetted partners — not random selection.</li>
                <li><span className="font-semibold">The Governance:</span> monthly board‑level reporting that translates data into decisions.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
