import { Link, NavLink } from "react-router-dom";
import H4 from "./typography/H4";
import H3 from "./typography/H3";

export default function Header() {
  return (
    <header className="sticky top-3 z-1 flex w-6/7 px-15 py-0 justify-between items-center bg-primary rounded-tr-[4.375rem] rounded-bl-[4.375rem] shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] mt-8 mx-auto">
      
      <Link to="/" className="logo">
        <img src="/src/assets/logo.svg" alt="Logo" className="w-50 h-25 transition-transform duration-300 ease-out hover:scale-110" />
      </Link>

      <div className="flex items-center gap-8">
        
        <nav className="flex gap-8">
          <H4><NavLink to="/services" className={({ isActive }) => isActive ? "text-text underline underline-offset-4":"text-text"}>Services</NavLink></H4>
          <H4><NavLink to="/cases" className={({ isActive }) => isActive ? "text-text underline underline-offset-4" : "text-text"}>Cases</NavLink></H4>
          <H4><NavLink to="/omos" className={({ isActive }) => isActive ? "text-text underline underline-offset-4" : "text-text"}>Om os</NavLink></H4>
          <H4><NavLink to="/kontakt" className={({ isActive }) => isActive ? "text-text underline underline-offset-4" : "text-text"}>Kontakt</NavLink></H4>
        </nav>

        <div className="lightmode-icon cursor-pointer">
          <img src="/src/assets/sun.svg" alt="Lightmode Icon" className="w-8 h-8" />
        </div>

      </div>
    </header>
  );
}