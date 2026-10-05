import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import AboutUs from "../components/AboutUs.jsx";
import { SERVICES, HILITE } from "../data.js";

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[750px] lg:min-h-[875px]">

        {/* ================= CARGO SHIP WALLPAPER ================= */}
        <div className="absolute inset-0">
          <img
            src="/image.webp"
            alt="Cargo ship and containers at an international port"
            fetchpriority="high"
            className="h-full w-full object-cover object-[70%_center] opacity-96 sm:object-center"
          />

          {/* Readability overlay: mobile/tablet only */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 lg:hidden" />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div
          className="
            hero-content
            relative
            z-10
            mx-auto
            max-w-6xl
            px-5
            pt-28
            sm:pt-36
            lg:max-w-7xl
            lg:px-10
            lg:pt-56
            lg:-translate-x-20
          "
        >

          {/* ================= HEADING ================= */}
          {/* No Reveal here — this is part of the LCP area */}
          <div className="hero-text max-w-3xl lg:max-w-4xl">

            <p
              className="
                mb-4
                inline-block
                rounded-full
                border
                border-gold/40
                text-cream/90
                px-3
                py-1.5
                text-[10px]
                font-bold
                tracking-[.15em]
                text-gold2
                lg:px-5
                lg:py-2
                lg:text-sm
                lg:tracking-[.2em]
              "
            >
              AHMEDABAD · SINCE 1980s
            </p>

            <h1
              className="
                font-display
                text-[2.1rem]
                leading-[1.15]
                text-white
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              <span>
                Clearing the path for{" "}
              </span>

              <span className="text-[#ffc93c] drop-shadow-[0_2px_8px_rgba(10,30,60,0.55)]">
                Indian exporters
              </span>{" "}

              <span>
                &amp; importers.
              </span>
            </h1>

          </div>

          {/* ================= DESCRIPTION ================= */}
          {/* No Reveal here — part of the initial viewport */}
          <div className="hero-text">

            <p
              className="
                mt-5
                max-w-xl
                text-[15px]
                leading-relaxed
                text-white
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                sm:text-base
                lg:mt-8
                lg:max-w-2xl
                lg:text-xl
              "
            >
              Over 40 years of hands-on expertise in Foreign Trade Policy,
              Customs, SVB, GST and FEMA — turning complex regulation into
              practical, audit-ready compliance.
            </p>

          </div>

          {/* ================= BUTTONS ================= */}
          {/* No Reveal here — avoid delaying initial hero paint */}
          <div
            className="
              hero-text
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
              lg:mt-12
              lg:ml-[-10px]
              lg:gap-6
            "
          >

            <Link
              to="/services"
              className="
                w-full
                rounded-full
                bg-gold
                px-7
                py-3.5
                text-center
                text-base
                font-semibold
                text-ink
                transition
                hover:bg-gold2
                hover:shadow-[0_14px_30px_-12px_rgba(217,155,37,.9)]
                sm:w-auto
                lg:px-9
                lg:py-4.5
                lg:text-xl
              "
            >
              Explore services
            </Link>

            <Link
              to="/contact"
              className="
                w-full
                rounded-full
                border
                border-white/70
                bg-black/20
                px-7
                py-3.5
                text-center
                text-base
                font-semibold
                text-white
                backdrop-blur-sm
                transition
                hover:border-gold
                hover:text-gold2
                sm:w-auto
                lg:px-9
                lg:py-4.5
                lg:text-xl
              "
            >
              Request a consultation
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
          HIGHLIGHTS
          ========================================================= */}
      <section
        className="
          relative
          z-10
          mx-auto
          -mt-12
          max-w-6xl
          px-4
          sm:px-5
          lg:-mt-16
          lg:max-w-7xl
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            bg-cream
            shadow-[0_20px_50px_-20px_rgba(10,30,60,0.45)]
            ring-1
            ring-ink/5
            lg:grid-cols-4
          "
        >
          {HILITE.map(([a, b], i) => (
            <Reveal
              key={a}
              delay={i * 90}
              className={`
                flex
                flex-col
                items-center
                justify-center
                border-ink/10
                px-3
                py-5
                text-center
                sm:px-6
                sm:py-7
                lg:px-8
                lg:py-10
                ${i % 2 === 1 ? "border-l" : ""}
                ${i >= 2 ? "border-t lg:border-t-0" : ""}
                ${i > 0 ? "lg:border-l" : ""}
              `}
            >
              <p
                className="
                  font-display
                  text-base
                  font-bold
                  leading-tight
                  text-gold
                  [text-wrap:balance]
                  sm:text-xl
                  lg:text-2xl
                  xl:text-[1.7rem]
                "
              >
                {a}
              </p>

              <span className="mx-auto mt-2 h-0.5 w-8 rounded bg-gold/40 lg:mt-3" />

              <p
                className="
                  mt-2
                  max-w-[15rem]
                  text-xs
                  font-medium
                  leading-snug
                  text-ink/70
                  [text-wrap:balance]
                  sm:text-sm
                  lg:mt-3
                  lg:text-base
                "
              >
                {b}
              </p>
            </Reveal>
          ))}
        </div>
      </section>


      {/* =========================================================
          ABOUT US
          ========================================================= */}
      <AboutUs />


      {/* =========================================================
          SERVICES
          ========================================================= */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-4
          py-12
          sm:px-5
          sm:py-20
          lg:max-w-7xl
          lg:px-10
          lg:py-32
        "
      >
        <Title kicker="WHAT WE DO">
          Specialised EXIM advisory
        </Title>

        <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:gap-8">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div
                className="
                  lift
                  flex
                  h-full
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-ink/10
                  bg-white
                  p-4
                  sm:gap-5
                  sm:rounded-2xl
                  sm:p-6
                  lg:gap-7
                  lg:p-12
                "
              >
                <span className="mt-1 h-6 w-1 shrink-0 rounded bg-gold sm:h-8" />

                <div>
                  <h3
                    className="
                      font-display
                      text-xl
                      leading-snug
                      text-ink
                      sm:text-2xl
                      lg:text-[2.125rem]
                    "
                  >
                    {s.t}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[15px]
                      leading-relaxed
                      text-black/80
                      sm:mt-2
                      sm:text-base
                      lg:mt-3
                      lg:text-xl
                      lg:text-black
                    "
                  >
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center sm:mt-10">
          <Link
            to="/services"
            className="ul-anim font-semibold text-ink lg:text-lg"
          >
            View all services →
          </Link>
        </Reveal>
      </section>


      {/* =========================================================
          CONTACT CTA
          ========================================================= */}
      <section className="bg-ink2 py-14 text-cream sm:py-20 lg:py-28">
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
              className="
                mt-8
                inline-block
                rounded-full
                bg-gold
                px-8
                py-3.5
                font-semibold
                text-ink
                transition
                hover:bg-gold2
                lg:mt-9
                lg:px-10
                lg:py-4
                lg:text-lg
              "
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}