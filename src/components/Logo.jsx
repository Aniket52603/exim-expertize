import { Link } from "react-router-dom";

export default function Logo({ dark = false, className = "h-[64px]" }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 shrink-0 group"
    >
      <img
        src="/logo.png"
        alt="Exim Expertize"
        className={
          "brand-logo " + className +
          " w-auto transition-transform duration-500"
        }
      />

      <span
        className={
          "hidden sm:block text-[10px] sm:text-[11px] font-extrabold leading-[1.15] tracking-[.12em] " +
          (dark ? "text-cream" : "text-ink")
        }
      >
        HUMILITY
        <br />
        SINCERITY
        <br />
        HONESTY
      </span>
    </Link>
  );
}