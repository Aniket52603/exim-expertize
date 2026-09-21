import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import AboutUs from "../components/AboutUs.jsx";
import { SERVICES, HILITE } from "../data.js";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">

        {/* ================= CARGO SHIP WALLPAPER ================= */}
        <div className="absolute inset-0">
          <img
            src="/image.png"
            alt="Cargo ship and containers at an international port"
            className="h-full w-full object-cover object-center opacity-95"
          />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div
          className="
            hero-content
            relative
            z-10
            mx-auto
            max-w-5xl
            px-5
            pt-28
            lg:max-w-6xl
            lg:px-8
            lg:pt-36
          "
        >

          {/* ================= HEADING ================= */}
          <Reveal>
            <div className="hero-text max-w-2xl lg:max-w-3xl">

              <p
                className="
                  mb-3
                  inline-block
                  rounded-full
                  border
                  border-gold/40
                  px-3.5
                  py-1
                  text-xs
                  tracking-[.2em]
                  text-gold2
                  lg:px-4
                  lg:py-1.5
                "
              >
                AHMEDABAD · SINCE 1980s
              </p>

              <h1
                className="
                  font-display
                  text-3xl
                  leading-tight
                  text-white
                  drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]
                  sm:text-5xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                Clearing the path for{" "}
                <span className="text-gold">
                  Indian exporters
                </span>{" "}
                &amp; importers.
              </h1>

            </div>
          </Reveal>

          {/* ================= DESCRIPTION ================= */}
          <Reveal delay={150}>
            <div className="hero-text">

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-relaxed
                  text-white
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                  sm:text-base
                  lg:mt-5
                  lg:max-w-xl
                  lg:text-lg
                "
              >
                Over 40 years of hands-on expertise in Foreign Trade Policy,
                Customs, SVB, GST and FEMA — turning complex regulation into
                practical, audit-ready compliance.
              </p>

            </div>
          </Reveal>

          {/* ================= BUTTONS ================= */}
          <Reveal delay={280}>
            <div
              className="
                hero-text
                mt-7
                flex
                flex-wrap
                gap-3
                lg:mt-9
                lg:gap-4
              "
            >

              <Link
                to="/services"
                className="
                  rounded-full
                  bg-gold
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  text-ink
                  transition
                  hover:bg-gold2
                  hover:shadow-[0_14px_30px_-12px_rgba(217,155,37,.9)]
                  sm:text-base
                  lg:px-7
                  lg:py-3
                "
              >
                Explore services
              </Link>

              <Link
                to="/contact"
                className="
                  rounded-full
                  border
                  border-white/70
                  bg-black/20
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:border-gold
                  hover:text-gold2
                  sm:text-base
                  lg:px-7
                  lg:py-3
                "
              >
                Request a consultation
              </Link>

            </div>
          </Reveal>

        </div>

      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-5 lg:-mt-12 lg:max-w-6xl lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-xl bg-ink/10 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
          {HILITE.map(([a, b], i) => (
            <Reveal
              key={a}
              delay={i * 90}
              className="bg-cream px-5 py-5 text-center lg:px-6 lg:py-7"
            >
              <p className="font-display text-xl text-gold lg:text-2xl">
                {a}
              </p>

              <p className="mt-1 text-xs font-medium text-ink/70 lg:text-sm">
                {b}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <AboutUs />

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-5xl px-5 py-16 lg:max-w-6xl lg:px-8 lg:py-20">
        <Title kicker="WHAT WE DO">
          Specialised EXIM advisory
        </Title>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="lift h-full rounded-xl border border-ink/10 bg-white p-6 lg:p-7">
                <h3 className="font-display text-xl text-ink lg:text-2xl">
                  {s.t}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70 lg:text-base">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link
            to="/services"
            className="ul-anim text-sm font-semibold text-ink lg:text-base"
          >
            View all services →
          </Link>
        </Reveal>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-ink2 py-14 text-cream lg:py-18">
        <div className="mx-auto max-w-2xl px-5 text-center lg:max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl">
              Facing an SVB query or a pending EODC?
            </h2>

            <p className="mt-3 text-sm text-cream/70 lg:mt-4 lg:text-base">
              Send us the file. You'll get a clear, practical opinion — not a
              textbook.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-gold px-7 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold2 lg:mt-7 lg:px-8 lg:py-3 lg:text-base"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}