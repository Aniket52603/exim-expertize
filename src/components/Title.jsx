import Reveal from "./Reveal.jsx";

export default function Title({ kicker, children, light = false }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold tracking-[.25em] text-gold lg:text-sm">{kicker}</p>
      <h2 className={"font-display text-3xl sm:text-4xl lg:text-5xl " + (light ? "text-cream" : "text-ink")}>
        {children}
      </h2>
      <span className="mx-auto mt-5 block h-px w-24 bg-gold lg:mt-6 lg:w-28" />
    </Reveal>
  );
}
