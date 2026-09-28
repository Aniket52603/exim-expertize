
import { Link } from "react-router-dom";
import Title from "../components/Title.jsx";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">

      <div className="mx-auto max-w-7xl">

        <Title kicker="OUR STORY">
          About Exim Expertize
        </Title>

        {/* COMPANY INTRODUCTION */}
        <section className="mt-10 rounded-3xl bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-10 lg:p-14">

          <p className="text-lg leading-8 text-black/80 lg:text-xl">
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
        <section className="mt-8 rounded-3xl bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-10 lg:p-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
            The Man & Mentor
          </p>

          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Babu Ezhumavil
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-black/80 lg:text-xl">

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
        <section className="mt-8 rounded-3xl bg-ink p-7 text-cream shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:p-10 lg:p-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What We Do
          </p>

          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Comprehensive EXIM Consultancy
          </h2>

          <p className="mt-6 text-lg leading-8 text-cream/80 lg:text-xl">
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
        <section className="mt-8 rounded-3xl border border-ink/10 bg-white p-8 text-center sm:p-10 lg:p-12">

          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Humility. Sincerity. Honesty.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/75">
            We believe in sharing knowledge, providing practical
            guidance and helping businesses better understand
            the procedures involved in international trade.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-gold px-8 py-3 font-semibold text-ink transition hover:bg-gold2"
          >
            Contact Us
          </Link>

        </section>

      </div>
    </main>
  );
}