import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-slate-900 bg-slate-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold">S</div>
            <span className="font-semibold text-slate-900">Squeeze Marketing Brokerage</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/vetting', 'Vetting & Standards')}
            {navItem('/who-we-help', 'Who We Help')}
            {navItem('/knowledge', 'Knowledge Hub')}
            {navItem('/about', 'About')}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/audit"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Book a Governance Audit
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItem('/', 'Home')}
              {navItem('/vetting', 'Vetting & Standards')}
              {navItem('/who-we-help', 'Who We Help')}
              {navItem('/knowledge', 'Knowledge Hub')}
              {navItem('/about', 'About')}
              <Link
                to="/audit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Book a Governance Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
