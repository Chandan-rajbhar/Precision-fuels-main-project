import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import heroImg from "../assets/hero-station.jpg";
import { FadeIn, PageHero } from "@/components/Section";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VoltaFuel" },
      {
        name: "description",
        content:
          "Get in touch with VoltaFuel for fuel delivery, partnerships and 24/7 emergency support.",
      },
      { property: "og:title", content: "Contact VoltaFuel" },
      { property: "og:description", content: "Talk to our energy experts." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's power what's next."
        subtitle="Quote requests, partnerships, careers — our team replies within one business day."
        image={heroImg}
      />
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Let’s Talk About Your Fuel Needs
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Get in touch with our team for fuel delivery, support, emergency response, or
              partnership opportunities.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side Info Cards */}
            <FadeIn>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    t: "Headquarters",
                    d: "1200 Energy Blvd\nHouston, TX 77002",
                  },
                  {
                    icon: Phone,
                    t: "Sales & Support",
                    d: "+1 (800) 555-FUEL\nMon–Fri, 8am–8pm CT",
                  },
                  {
                    icon: Mail,
                    t: "Email Address",
                    d: "hello@voltafuel.com\npartners@voltafuel.com",
                  },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                        <c.icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{c.t}</h3>

                        <p className="text-gray-600 whitespace-pre-line mt-2 leading-relaxed">
                          {c.d}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Emergency Card */}
                <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-lg">
                  <div className="text-sm uppercase tracking-[0.2em] text-orange-400 font-semibold">
                    24/7 Emergency Support
                  </div>

                  <div className="text-3xl font-bold mt-3">+1 (800) 555-9999</div>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Spill response, urgent fuel delivery, and after-hours emergency assistance
                    anytime.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right Side Form */}
            <FadeIn delay={0.15}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Request a Quote</h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Tell us about your fuel requirements and our team will contact you shortly.
                  </p>
                </div>

                {/* Inputs */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" placeholder="John Doe" />
                  <Field label="Company Name" name="company" placeholder="Acme Marine" />
                  <Field label="Email Address" type="email" name="email" placeholder="you@example.com" />
                  <Field label="Phone Number" type="tel" name="phone" placeholder="(800) 555-0000" />
                </div>

                {/* Textarea */}
                <div className="mt-5">
                  <label className="text-sm font-semibold text-gray-800">How can we help?</label>

                  <textarea
                    required
                    rows={5}
                    className="mt-3 w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none"
                    placeholder="Volume, fuel type, delivery location..."
                  />
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 px-8 py-4 text-white font-semibold transition-all duration-300 shadow-lg"
                  disabled={sent}
                >
                  {sent ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
