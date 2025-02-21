import { ChevronLeft } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { NavLink } from './nav-link'

export function Header() {
  const { pathname } = useLocation()

  return (
    <div className="flex h-16 items-center gap-6 px-4">
      {pathname !== '/' && (
        <NavLink to="/" className="transition-all">
          <ChevronLeft className="h-4 w-4" />
          Back
        </NavLink>
      )}

      <nav className="ml-auto flex gap-6">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        {/* <NavLink to="/setup">Setup</NavLink> */}

        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}
