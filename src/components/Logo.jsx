import { Link } from "react-router-dom";

export default function Logo({ dark = false, className = "h-[64px]" }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 shrink-0 group"
    >
      <picture>
        {/* Mobile logo */}
        <source
          media="(max-width: 767px)"
          srcSet="/logo2.webp"
        />

        {/* Desktop logo */}
        <img
          src="/logo.webp"
          alt="Exim Expertize"
          className={
            "brand-logo " +
            className +
            " w-auto transition-transform duration-500"
          }
        />
      </picture>

      <span
        className={
          "hidden sm:block text-[10px] sm:text-[11px] font-extrabold leading-[1.15] tracking-[.12em] " +
          (dark ? "text-cream" : "text-ink")
        }
      >
        HONESTY
        <br />
        HUMILITY
        <br />
        SINCERITY
      </span>
    </Link>
  );
}