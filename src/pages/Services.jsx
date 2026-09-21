import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-36 pb-24 lg:max-w-7xl lg:px-10 lg:pt-48 lg:pb-32">
      <Title kicker="OUR EXPERTISE">Services</Title>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.t} delay={i * 60}>
            <div className="lift flex h-full gap-7 rounded-2xl border border-ink/10 bg-white p-10 lg:p-12">
              <span className="mt-1 h-8 w-1 shrink-0 rounded bg-gold" />
              <div>
                <h3 className="font-display text-3xl text-ink lg:text-[2.125rem]">{s.t}</h3>
                <p className="mt-3 text-lg leading-relaxed text-black lg:text-xl">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 rounded-2xl bg-ink p-10 text-center text-cream lg:p-14">
        <h3 className="font-display text-2xl lg:text-3xl lg:mx-auto lg:max-w-3xl">
          Also handled: AEO renewals, RoDTEP, MEIS legacy claims, licence transfers and DGFT
          representations.
        </h3>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-gold2 lg:mt-7 lg:px-9 lg:py-3.5 lg:text-lg"
        >
          Discuss your requirement
        </Link>
      </Reveal>
    </section>
  );
}
