import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import AboutUs from "../components/AboutUs.jsx";
import { SERVICES, HILITE } from "../data.js";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
<section className="relative min-h-[680px] w-full overflow-hidden sm:min-h-[720px] lg:min-h-[780px]">

  {/* ================= CARGO SHIP WALLPAPER ================= */}
  <div className="absolute inset-0 h-full w-full">
    <img
      src="/image.png"
      alt="Cargo ship and containers at an international port"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  </div>

  {/* ================= HERO OVERLAYS ================= */}

  {/* Left dark gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

  {/* Bottom dark gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />


  {/* ================= HERO CONTENT ================= */}
  <div className="relative z-10 w-full">

    <div
      className="
        mx-auto
        w-full
        max-w-[1400px]
        px-6
        pt-32
        sm:px-10
        sm:pt-40
        lg:px-14
        lg:pt-48
        xl:px-16
      "
    >

      {/* ================= HEADING ================= */}
      <Reveal>

        <div className="w-full max-w-4xl">

          {/* Location Badge */}
          <p
            className="
              mb-5
              inline-block
              rounded-full
              border
              border-gold/40
              bg-white/90
              px-4
              py-1.5
              text-xs
              font-bold
              tracking-[0.2em]
              text-gold2
              sm:px-5
              sm:py-2
              sm:text-sm
            "
          >
            AHMEDABAD · SINCE 1980s
          </p>


          {/* Main Heading */}
          <h1
            className="
              font-display
              text-4xl
              leading-[1.05]
              text-white
              [text-shadow:0_5px_18px_rgba(0,0,0,0.75)]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[5.2rem]
            "
          >
            Clearing the path for{" "}

            <span className="text-gold [text-shadow:none]">
              Indian exporters
            </span>{" "}

            &amp; importers.
          </h1>

        </div>

      </Reveal>


      {/* ================= DESCRIPTION ================= */}
      <Reveal delay={150}>

        <div className="w-full">

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-white
              [text-shadow:0_5px_18px_rgba(0,0,0,0.75)]
              sm:text-lg
              lg:mt-7
              lg:text-xl
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
            mt-8
            flex
            w-full
            flex-wrap
            gap-4
            lg:mt-10
            lg:gap-5
          "
        >

          {/* Explore Services */}
          <Link
            to="/services"
            className="
              rounded-full
              bg-gold
              px-7
              py-3
              text-base
              font-semibold
              text-ink
              transition
              hover:bg-gold2
              sm:px-8
              sm:py-3.5
              sm:text-lg
              lg:px-9
              lg:py-4
            "
          >
            Explore services
          </Link>


          {/* Consultation */}
          <Link
            to="/contact"
            className="
              rounded-full
              border
              border-white/70
              bg-black/20
              px-7
              py-3
              text-base
              font-semibold
              text-white
              backdrop-blur-sm
              transition
              hover:border-gold
              hover:text-gold2
              sm:px-8
              sm:py-3.5
              sm:text-lg
              lg:px-9
              lg:py-4
            "
          >
            Request a consultation
          </Link>

        </div>

      </Reveal>

    </div>

  </div>

</section>

      {/* ================= HIGHLIGHTS ================= */}
      <section
        className="
          relative
          z-10
          mx-auto
          -mt-12
          max-w-6xl
          px-5
          lg:-mt-16
          lg:max-w-7xl
          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-px
            overflow-hidden
            rounded-2xl
            bg-ink/10
            shadow-xl
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {HILITE.map(([a, b], i) => (
            <Reveal
              key={a}
              delay={i * 90}
              className="bg-white px-6 py-7 text-center lg:px-8 lg:py-10"
            >
              <p className="font-display text-2xl text-gold lg:text-3xl">
                {a}
              </p>

              <p className="mt-1 text-sm font-medium text-black/70 lg:mt-2 lg:text-base">
                {b}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <AboutUs />

      {/* ================= SERVICES ================= */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-24
          lg:px-10
          lg:py-32
        "
      >

        <Title kicker="WHAT WE DO">
          Specialised EXIM advisory
        </Title>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>

              <div
                className="
                  lift
                  h-full
                  rounded-2xl
                  border
                  border-ink/10
                  bg-white
                  p-8
                  lg:p-10
                "
              >
                <h3
                  className="
                    font-display
                    text-3xl
                    text-black
                    lg:text-[2.25rem]
                  "
                >
                  {s.t}
                </h3>

                <p
                  className="
                    mt-3
                    text-lg
                    leading-relaxed
                    text-black
                    lg:text-xl
                  "
                >
                  {s.d}
                </p>
              </div>

            </Reveal>
          ))}

        </div>

        {/* View All Services */}
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

    </div>
  );
}