import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vetting from './pages/Vetting'
import WhoWeHelp from './pages/WhoWeHelp'
import Audit from './pages/Audit'
import About from './pages/About'
import Knowledge from './pages/Knowledge'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vetting" element={<Vetting />} />
      <Route path="/who-we-help" element={<WhoWeHelp />} />
      <Route path="/audit" element={<Audit />} />
      <Route path="/about" element={<About />} />
      <Route path="/knowledge" element={<Knowledge />} />
    </Routes>
  )
}

export default App
