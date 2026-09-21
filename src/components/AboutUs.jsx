const AboutUs = () => {
  return (
    <section className="bg-[#f8f6f0] px-5 py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl">

    {/* ================= ABOUT HEADING ================= */}
    <div className="mb-10 flex items-center justify-center gap-4 sm:mb-12 sm:gap-6 lg:mb-14 lg:gap-8">

      <span className="h-[2px] w-12 bg-ink sm:w-20 lg:w-36"></span>

      <h2 className="whitespace-nowrap font-display text-3xl text-ink sm:text-4xl md:text-5xl lg:text-6xl">
        About Exim Expertize
      </h2>

      <span className="h-[2px] w-12 bg-ink sm:w-20 lg:w-36"></span>

    </div>

    {/* ================= WHITE TEXT CARD ================= */}
    <div className="mx-auto max-w-8xl rounded-3xl bg-white px-7 py-9 shadow-[0_10px_35px_rgba(0,0,0,0.08)] sm:px-10 sm:py-11 lg:px-14 lg:py-12">

      <div className="text-xl leading-9 text-black/90 sm:text-2xl sm:leading-10 lg:text-[22px] lg:leading-9">

        <p className="mb-6">
          Welcome to{" "}
          <strong className="text-ink">
            Exim Expertize
          </strong>
          , a specialised advisory firm supporting exporters,
          importers and businesses navigating India's complex
          international trade regulations.
        </p>

        <p className="mb-6">
          With over{" "}
          <strong className="text-ink">
            40 years of practical experience
          </strong>
          , we provide guidance across Foreign Trade Policy,
          Customs, SVB, GST, FEMA and other areas of EXIM compliance.
          Our approach is focused on providing clear, practical and
          commercially relevant solutions.
        </p>

        <p className="mb-6">
          We assist businesses with regulatory procedures,
          authorisations, registrations, documentation, compliance
          requirements and post-approval matters. From Advance
          Authorisation and EPCG to AEO, MOOWR, SEZ, EOU and
          duty-related matters, our objective is to simplify
          complex processes and help businesses move forward
          with confidence.
        </p>

        <p>
          At Exim Expertize, we believe in{" "}
          <strong className="text-ink">
            humility, sincerity and honesty
          </strong>
          . We combine regulatory knowledge with practical
          experience to deliver dependable advisory support
          tailored to each client's requirements.
        </p>

      </div>

    </div>

  </div>
</section>
  );
};

export default AboutUs;