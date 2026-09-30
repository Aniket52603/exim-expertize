import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const AboutUs = () => {
  return (
    <section className="bg-[#f8f6f0] px-4 py-12 sm:px-5 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* ABOUT HEADING */}
        <Reveal>
          <div className="mb-7 flex items-center justify-center gap-4 sm:mb-12 sm:gap-6 lg:mb-14 lg:gap-8">
            <span className="hidden h-[2px] w-12 bg-ink sm:block sm:w-20 lg:w-36" />

            <h2 className="text-center font-display text-[1.75rem] leading-tight text-ink sm:whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl">
              About Exim Expertize
            </h2>

            <span className="hidden h-[2px] w-12 bg-ink sm:block sm:w-20 lg:w-36" />
          </div>
        </Reveal>

        {/* SHORT INTRODUCTION */}
        <Reveal
          delay={160}
          className="mx-auto max-w-8xl rounded-2xl bg-white px-5 py-7 shadow-[0_10px_35px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:px-10 sm:py-11 lg:px-14 lg:py-12"
        >

          <div className="text-[25px] leading-relaxed text-black/80 sm:text-lg lg:text-xl">

            <p className="mb-4 sm:mb-5">
              <strong className="text-ink">
                Exim Expertize
              </strong>{" "}
              is an export-import consultancy based in Ahmedabad,
              established in 1989. We provide professional advice
              and guidance to exporters, importers and manufacturers
              dealing with India's international trade procedures
              and regulatory requirements.
            </p>

            <p className="mb-4 sm:mb-5">
              Guided by the experience of our founder and mentor,{" "}
              <strong className="text-ink">
                Babu Ezhumavil
              </strong>
              , we assist businesses with EXIM documentation,
              authorisations, DGFT and ICEGATE procedures, Customs
              matters and various export-import schemes.
            </p>

            <p>
              Our approach combines practical industry experience
              with a commitment to{" "}
              <strong className="text-ink">
                humility, sincerity and honesty
              </strong>
              , helping businesses navigate complex trade procedures
              with greater clarity and confidence.
            </p>

          </div>

          {/* READ MORE */}
          <div className="mt-6 sm:mt-8">
            <Link
              to="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-[15px] font-semibold text-black transition hover:bg-gold2 sm:w-auto sm:px-8 sm:text-base"
            >
              Discover Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </Reveal>
      </div>
    </section>
  );
};

export default AboutUs;