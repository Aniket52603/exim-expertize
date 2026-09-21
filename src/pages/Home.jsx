import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import AboutUs from "../components/AboutUs.jsx";
import { SERVICES, HILITE } from "../data.js";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
     /* <section className="relative overflow-hidden bg-ink pt-36 pb-24 text-cream sm:pt-44 sm:pb-32 lg:pt-56 lg:pb-40">

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[28px] border-teal/20 float lg:h-[34rem] lg:w-[34rem] lg:-right-32 lg:-top-32" />

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl lg:h-[28rem] lg:w-[28rem]" />

        {/* HERO CONTENT */}
        <div className="hero-content relative mx-auto max-w-6xl px-5 lg:max-w-7xl lg:px-10">

          {/* Heading */}
          <Reveal>
            <div className="hero-text max-w-3xl lg:max-w-4xl">
              <p className="mb-4 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[.2em] text-gold2 lg:px-5 lg:py-2 lg:text-sm">
                AHMEDABAD · SINCE 1980s
              </p>

              <h1 className="font-display text-4xl leading-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                Clearing the path for{" "}
                <span className="sheen">Indian exporters</span> &amp; importers.
              </h1>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={150}>
            <div className="hero-text">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 lg:mt-8 lg:max-w-2xl lg:text-xl">
                Over 40 years of hands-on expertise in Foreign Trade Policy,
                Customs, SVB, GST and FEMA — turning complex regulation into
                practical, audit-ready compliance.
              </p>
            </div>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={280}>
            <div className="hero-text mt-9 flex flex-wrap gap-4 lg:mt-12 lg:ml-[-10px] lg:gap-6">
              <Link
                to="/services"
                className="rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-gold2 hover:shadow-[0_14px_30px_-12px_rgba(217,155,37,.9)] sm:text-lg lg:px-9 lg:py-4.5 lg:text-xl"
              >
                Explore services
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-cream/30 px-7 py-3.5 text-base font-semibold transition hover:border-gold hover:text-gold2 sm:text-lg lg:px-9 lg:py-4.5 lg:text-xl"
              >
                Request a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


      

      {/* ================= HIGHLIGHTS ================= */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 lg:-mt-16 lg:max-w-7xl lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {HILITE.map(([a, b], i) => (
            <Reveal
              key={a}
              delay={i * 90}
              className="bg-cream px-6 py-7 text-center lg:px-8 lg:py-10"
            >
              <p className="font-display text-2xl text-gold lg:text-3xl">
                {a}
              </p>

              <p className="mt-1 text-sm font-medium text-ink/70 lg:mt-2 lg:text-base">
                {b}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <AboutUs />

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:max-w-7xl lg:px-10 lg:py-32">
        <Title kicker="WHAT WE DO">
          Specialised EXIM advisory
        </Title>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="lift h-full rounded-2xl border border-ink/10 bg-white p-8 lg:p-10">
                <h3 className="font-display text-2xl text-ink lg:text-[2rem]">
                  {s.t}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-ink/70 lg:text-lg">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="ul-anim font-semibold text-ink lg:text-lg"
          >
            View all services →
          </Link>
        </Reveal>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-ink2 py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
              Facing an SVB query or a pending EODC?
            </h2>

            <p className="mt-4 text-cream/70 lg:mt-5 lg:text-lg">
              Send us the file. You'll get a clear, practical opinion — not a
              textbook.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:bg-gold2 lg:mt-9 lg:px-10 lg:py-4 lg:text-lg"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}