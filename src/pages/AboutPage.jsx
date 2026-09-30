
import { Link } from "react-router-dom";
import Title from "../components/Title.jsx";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] px-4 pb-12 pt-28 sm:px-5 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-44">

      <div className="mx-auto max-w-7xl">

        <Title kicker="OUR STORY">
          About Exim Expertize
        </Title>

        {/* COMPANY INTRODUCTION */}
        <section className="mt-7 rounded-2xl bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:mt-10 sm:rounded-3xl sm:p-10 lg:p-14">

          <p className="text-base leading-7 text-black/80 lg:text-[1.3125rem] lg:leading-8">
            Established in Ahmedabad in 1989,{" "}
            <strong className="text-ink">Exim Expertize</strong>{" "}
            provides consultancy, advice and guidance to exporters,
            importers, manufacturers and organisations involved in
            international trade. We serve clients across India,
            helping them navigate export-import procedures and
            regulatory requirements.
          </p>

        </section>

        {/* FOUNDER */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:mt-8 sm:rounded-3xl sm:p-10 lg:p-14">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
            The Man & Mentor
          </p>

          <h2 className="font-display text-2xl text-ink sm:text-4xl">
            Babu Ezhumavil
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-black/80 sm:mt-6 sm:space-y-5 lg:text-[1.3125rem] lg:leading-8">

            <p>
              Babu Ezhumavil's experience in import-export procedures
              began in 1978. After working with private firms, he
              joined F. A. Chasmawala Pvt. Ltd. in Vadodara, an
              exporter of spectacle frames, lenses and hinges.
              There, he took on responsibility for import-export
              activities and developed his practical knowledge
              of the field.
            </p>

            <p>
              After eleven years of service with an export house
              in Vadodara, he moved to Ahmedabad in 1989 and
              continued as a consultant and adviser to exporters
              and importers across India.
            </p>

            <p>
              His professional contributions include speaking at
              industry associations such as CII, FICCI and
              ASSOCHAM, teaching at management institutes, editing
              trade publications, writing for foreign trade
              journals and authoring books and articles on
              related subjects.
            </p>

          </div>

        </section>

        {/* OUR EXPERTISE */}
        <section className="mt-6 rounded-2xl bg-ink p-5 text-cream shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:mt-8 sm:rounded-3xl sm:p-10 lg:p-14">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
            What We Do
          </p>

          <h2 className="font-display text-2xl text-cream sm:text-4xl">
            Comprehensive EXIM Consultancy
          </h2>

          <p className="mt-5 text-base leading-7 text-cream/80 sm:mt-6 lg:text-[1.3125rem] lg:leading-8">
            Our consultancy covers DGFT and ICEGATE procedures,
            Advance Authorisation, EPCG, SCOMET, Restricted Product
            Authorisations and Certificates of Origin. We also
            provide guidance on EOU, SEZ, MOOWR and AEO schemes,
            along with Customs procedures, FEMA-related formalities,
            banking procedures, refunds, applications, appeals,
            reviews and replies to Show Cause Notices.
          </p>

        </section>

        {/* VALUES */}
        <section className="mt-6 rounded-2xl border border-ink/10 bg-white p-5 text-center sm:mt-8 sm:rounded-3xl sm:p-10 lg:p-12">

          <h2 className="font-display text-xl text-ink sm:text-3xl">
            Humility. Sincerity. Honesty.
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-black/75 sm:mt-4 lg:text-[1.1875rem] lg:leading-8">
            We believe in sharing knowledge, providing practical
            guidance and helping businesses better understand
            the procedures involved in international trade.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold2 sm:mt-7 sm:px-8 sm:text-base"
          >
            Contact Us
          </Link>

        </section>

      </div>
    </main>
  );
}