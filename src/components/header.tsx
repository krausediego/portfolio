import { useLocation } from "react-router";
import { NavLink } from "./nav-link";
import { ChevronLeft } from "lucide-react";

export function Header() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-16 items-center gap-6 px-4">
      {pathname !== "/" && (
        <NavLink to="/" className="transition-all">
          <ChevronLeft className="w-4 h-4" />
          Back
        </NavLink>
      )}

      <nav className="flex ml-auto gap-6">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        {/* <NavLink to="/setup">Setup</NavLink> */}

        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
