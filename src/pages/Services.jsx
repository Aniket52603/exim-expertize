import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-5 sm:pt-36 sm:pb-24 lg:max-w-7xl lg:px-10 lg:pt-48 lg:pb-32">

      <Title kicker="OUR EXPERTISE">Services</Title>

      <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:gap-8">

        {SERVICES.map((s, i) => (
          <Reveal key={s.t} delay={i * 60}>
            <div className="lift flex h-full items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 sm:gap-5 sm:rounded-2xl sm:p-6 lg:gap-7 lg:p-12">

              <span className="mt-1 h-6 w-1 shrink-0 rounded bg-gold sm:h-8" />

              <div>
                <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl lg:text-[2.125rem]">
                  {s.t}
                </h3>

                <p className="mt-1.5 text-[15px] leading-relaxed text-black/80 sm:mt-2 sm:text-base lg:mt-3 lg:text-xl lg:text-black">
                  {s.d}
                </p>
              </div>

            </div>
          </Reveal>
        ))}

      </div>

      {/* ================= CONSULTANCY CTA ================= */}
      <Reveal className="mt-10 rounded-xl bg-ink px-5 py-8 text-center text-cream sm:mt-14 sm:rounded-2xl sm:p-10 lg:p-14">

        <h3 className="mx-auto max-w-3xl font-display text-xl leading-snug sm:text-2xl lg:text-3xl">
          Need guidance with an Export–Import requirement, authorisation
          or regulatory procedure?
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-cream/80 sm:mt-4 sm:text-base lg:text-lg">
          Get practical guidance for navigating EXIM procedures,
          documentation, authorisations and regulatory requirements.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block w-full rounded-full bg-gold px-7 py-3 text-center font-semibold text-ink transition hover:bg-gold2 sm:w-auto lg:mt-7 lg:px-9 lg:py-3.5 lg:text-lg"
        >
          Discuss Your Requirement
        </Link>

      </Reveal>

    </section>
  );
}