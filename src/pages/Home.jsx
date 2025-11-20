import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import SocialProof from '../components/SocialProof'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <SocialProof />
        <CTA />
      </main>
    </div>
  )
}
