import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NAV } from "../data.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 " +
        (scrolled
  ? "shadow-[0_1px_24px_-8px_rgba(30,56,50,.4)] py-2"
  : "py-3")
      }
    >
      {/* Navbar Container */}
      <div className="mx-auto flex w-full items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 md:flex lg:translate-x-[-100px] lg:gap-14">
          {NAV.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                "relative text-[20px] font-bold tracking-wide " +
                "text-ink/80 transition-all duration-300 " +
                "hover:text-ink " +
                "after:absolute after:-bottom-2 after:left-0 after:h-[2px] " +
                "after:w-0 after:bg-gold after:transition-all after:duration-300 " +
                "hover:after:w-full " +
                (isActive
                  ? "text-ink after:w-full"
                  : "")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 md:hidden"
          aria-label="Menu"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            stroke="#1E3832"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <g>
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </g>
            ) : (
              <g>
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
              </g>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-5 mt-3 rounded-2xl bg-white p-4 shadow-xl md:hidden">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-ink/10 py-3 text-base font-semibold text-ink last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}