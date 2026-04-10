import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import H3 from "./typography/H3"
import H4 from "./typography/H4"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/cases", label: "Cases" },
    { to: "/omos", label: "Om os" },
    { to: "/kontakt", label: "Kontakt" },
  ]

  const linkClass = ({ isActive }) =>
    isActive ? "text-text underline underline-offset-4" : "text-text"

  return (
    <div className="sticky top-0 z-40 w-11/12 mx-auto mt-4">

      {/* Header bar */}
      <header className="flex px-4 md:px-10 justify-between items-center bg-primary rounded-tr-[4.375rem] rounded-bl-[4.375rem] shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
        
        <Link to="/">
          <img src="/src/assets/logo.svg" alt="Logo" className="w-50 h-20 hover:scale-110 transition-transform" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map(link => (
              <H4 key={link.to}>
                <NavLink to={link.to} className={linkClass}>{link.label}</NavLink>
              </H4>
            ))}
          </nav>
          <img src="/src/assets/sun.svg" alt="Lightmode" className="w-8 h-8 cursor-pointer" />
        </div>

        {/* Mobil ikoner */}
        <div className="flex md:hidden items-center gap-4">
          <img src="/src/assets/sun.svg" alt="Lightmode" className="w-8 h-8 cursor-pointer" />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line
                x1="4" y1="8" x2="28" y2="8"
                stroke="var(--color-text)" strokeWidth="3" strokeLinecap="round"
                style={{
                  transformOrigin: "16px 16px",
                  transition: "transform 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translateY(8px)" : "rotate(0deg)"
                }}
              />
              <line
                x1="4" y1="16" x2="28" y2="16"
                stroke="var(--color-text)" strokeWidth="3" strokeLinecap="round"
                style={{
                  transition: "opacity 0.3s ease",
                  opacity: menuOpen ? 0 : 1
                }}
              />
              <line
                x1="4" y1="24" x2="28" y2="24"
                stroke="var(--color-text)" strokeWidth="3" strokeLinecap="round"
                style={{
                  transformOrigin: "16px 16px",
                  transition: "transform 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "rotate(0deg)"
                }}
              />
            </svg>
          </button>
        </div>

      </header>

      {/* Mobil dropdown */}
      <div
        className="md:hidden absolute right-0 w-1/2 bg-primary rounded-bl-[4.375rem] overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? "400px" : "0px" }}
      >
        <nav className="flex flex-col gap-6 p-8">
          {navLinks.map(link => (
            <H3 key={link.to}>
              <NavLink to={link.to} onClick={() => setMenuOpen(false)} className={linkClass}>
                {link.label}
              </NavLink>
            </H3>
          ))}
        </nav>
      </div>

    </div>
  )
}