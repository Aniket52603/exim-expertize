import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NAV } from "../data.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;

      setScrolled(y > 20);

      // ignore tiny movements
      if (Math.abs(y - lastY) > 8) {
        // hide when scrolling down (past 80px), show when scrolling up
        setHidden(y > lastY && y > 80);
        lastY = y;
      }

      // always show at the very top
      if (y < 20) setHidden(false);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // close the mobile menu when the navbar hides
  useEffect(() => {
    if (hidden) setMenuOpen(false);
  }, [hidden]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 " +
        (hidden && !menuOpen ? "-translate-y-full " : "translate-y-0 ") +
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
        <nav className="site-nav hidden items-center gap-8 md:flex lg:gap-10">
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
                (isActive ? "text-ink after:w-full" : "")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E3832"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <nav
          className="mx-5 mt-3 rounded-2xl bg-white p-4 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                "block border-b border-ink/10 py-3 text-base font-semibold " +
                "last:border-0 transition-colors " +
                (isActive ? "text-gold" : "text-ink hover:text-gold")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}