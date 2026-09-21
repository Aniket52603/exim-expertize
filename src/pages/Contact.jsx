import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import Title from "../components/Title.jsx";
import { CONTACT } from "../data.js";

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3.5 text-lg outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 lg:px-5 lg:py-4.5 lg:text-xl";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSend = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/chandananiket555@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.msg,

            // Email subject
            _subject: `Website enquiry from ${form.name}`,

            // Email template
            _template: "table",

            // Reply directly to the person who submitted the form
            _replyto: form.email,
          }),
        }
      );

      const data = await response.json();

      console.log("FormSubmit response:", data);

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send enquiry.");
      }

      // Clear form after successful submission
      setForm({
        name: "",
        email: "",
        msg: "",
      });

      setStatus("success");
    } catch (err) {
      console.error("FormSubmit error:", err);

      setStatus("error");

      setError(
        err.message ||
          "We could not send your enquiry. Please try again or contact us directly."
      );
    }
  };

  const rows = [
    ["Office", CONTACT.office],
    ["Mobile", CONTACT.mobile],
    ["Landline", CONTACT.landline],
    ["Email", CONTACT.emails],
  ];

  // WhatsApp message
  const whatsappMessage =
    "Hello Exim Expertize, I would like to know more about your EXIM advisory services.";

  return (
    <section className="mx-auto max-w-6xl px-5 pt-36 pb-24 lg:max-w-7xl lg:px-10 lg:pt-48 lg:pb-32">

      {/* ================= PAGE TITLE ================= */}
      <Title kicker="GET IN TOUCH">
        Contact us
      </Title>

      {/* ================= CONTACT GRID ================= */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

        {/* =====================================================
            LEFT SIDE - CONTACT DETAILS
        ====================================================== */}
        <Reveal>
          <div className="space-y-9 rounded-2xl bg-ink p-11 text-cream lg:p-14">

            {rows.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-cream/15 pb-5 last:border-0"
              >
                <p className="text-sm tracking-[.2em] text-gold lg:text-base">
                  {label.toUpperCase()}
                </p>

                <p className="mt-1.5 text-xl leading-relaxed text-cream/85 lg:text-[1.375rem]">
                  {value}
                </p>
              </div>
            ))}

            <p className="text-lg text-cream/60 lg:text-xl">
              Working hours: Mon–Sat, 10:00 AM – 7:00 PM IST
            </p>

          </div>
        </Reveal>


        {/* =====================================================
            RIGHT SIDE - CONTACT FORM
        ====================================================== */}
        <Reveal delay={140}>
          <div className="rounded-2xl border border-ink/10 bg-white p-11 lg:p-14">

            <h3 className="font-display text-3xl lg:text-[2.125rem]">
              Send an enquiry
            </h3>

            <form
              onSubmit={handleSend}
              className="mt-7 space-y-6"
            >

              {/* ================= NAME ================= */}
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />


              {/* ================= EMAIL ================= */}
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Your email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />


              {/* ================= MESSAGE ================= */}
              <textarea
                rows="5"
                name="message"
                className={inputClass}
                placeholder="Briefly describe your requirement"
                aria-label="Briefly describe your requirement"
                required
                value={form.msg}
                onChange={(e) =>
                  setForm({
                    ...form,
                    msg: e.target.value,
                  })
                }
              />


              {/* ================= SEND EMAIL BUTTON ================= */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  w-full
                  rounded-full
                  bg-gold
                  py-3.5
                  font-semibold
                  text-ink
                  transition
                  hover:bg-gold2
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  lg:py-4
                  lg:text-lg
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send enquiry"}
              </button>


              {/* ================= WHATSAPP BUTTON ================= */}
              <a
                href={`https://wa.me/918010393572?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#25D366]
                  py-3.5
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#20bd5a]
                  hover:shadow-lg
                  lg:py-4
                  lg:text-lg
                "
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.149.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.848 1.213 3.047.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />

                  <path d="M20.52 3.449A11.93 11.93 0 0012.01 0C5.37 0 0 5.373 0 12.01c0 2.117.553 4.184 1.604 6.006L0 24l6.138-1.593a11.98 11.98 0 005.87 1.496h.005c6.635 0 12.01-5.373 12.01-12.01a11.93 11.93 0 00-3.503-8.444zM12.012 21.91h-.004a9.9 9.9 0 01-5.047-1.374l-.362-.215-3.642.946.973-3.55-.236-.364a9.91 9.91 0 01-1.522-5.343c0-5.478 4.456-9.934 9.94-9.934a9.87 9.87 0 017.035 2.917 9.87 9.87 0 012.912 7.04c-.003 5.477-4.459 9.93-9.947 9.93z" />
                </svg>

                Chat with us on WhatsApp
              </a>


              {/* ================= SUCCESS MESSAGE ================= */}
              {status === "success" && (
                <p
                  className="text-center text-sm font-medium text-green-700"
                  role="status"
                >
                  Thanks! Your enquiry has been sent successfully.
                </p>
              )}


              {/* ================= ERROR MESSAGE ================= */}
              {status === "error" && (
                <p
                  className="text-center text-sm font-medium text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}

            </form>

          </div>
        </Reveal>

      </div>
    </section>
  );
}