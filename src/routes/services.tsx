import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageHero } from "@/components/Section";
import { Phone, Mail, MapPin, Clock, Plus, Minus } from "lucide-react";

const mapImg = "/images/services_image/map.png";
const Ship_img_1 = "/images/services_image/Ship_img.png";
const fuel_img = "/images/services_image/fuel.png";
const Ship_img_2 = "/images/services_image/Ship_img_2.png";
const Ship_img_3 = "/images/services_image/Ship_img_3.png";
const Fuel_truck = "/images/services_image/Fuel_truck.png";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — VoltaFuel" },
      {
        name: "description",
        content:
          "Retail fueling, fleet supply, industrial diesel, aviation, marine and renewable energy services.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: "/images/services_image/Card_Icon_1.png",
    title: "Retail Fueling",
    desc: "Branded forecourts with smart pumps, loyalty integrations and 24/7 monitoring.",
  },
  {
    icon: "/images/services_image/Card_Icon_2.png",
    title: "Fleet & Bulk Delivery",
    desc: "Bulk diesel and gasoline delivery with automated tank monitoring.",
  },
  {
    icon: "/images/services_image/Card_Icon_3.png",
    title: "Industrial Supply",
    desc: "High-volume fuel contracts for industrial and heavy-duty operations.",
  },
  {
    icon: "/images/services_image/Card_Icon_4.png",
    title: "Aviation Fuel",
    desc: "Jet A-1 and Avgas supplied with strict quality control and fast turnaround.",
  },
];

const gallery = [Ship_img_1, fuel_img, Fuel_truck, Ship_img_2, Ship_img_3];

const faqs = [
  {
    question: "What is Precision Fuel & Hydration?",
    answer:
      "We help endurance athletes solve their fueling and hydration challenges with personalized plans, sweat testing, and a range of fast-absorbing carb and electrolyte products designed for training and race day.",
  },
  {
    question: "Who are your products for?",
    answer:
      "Runners, cyclists, triathletes, hikers, and any endurance athlete training or racing for longer than 60–90 minutes — from beginners to elite competitors.",
  },
  {
    question:
      "What's the difference between PF Carb & Electrolyte drink mixes and PH electrolyte drinks?",
    answer:
      "PF drinks deliver carbohydrate fuel (energy) plus sodium. PH drinks are calorie-free electrolyte mixes focused purely on replacing sodium lost in sweat. Most athletes use both — PF for fuel, PH for hydration top-ups.",
  },
  {
    question: "How much sodium do your PH electrolytes contain?",
    answer:
      "PH 250, 500, 1000, and 1500 — the number indicates milligrams of sodium per serving, so you can match intake to your personal sweat sodium loss.",
  },
  {
    question: "Are your products vegan and gluten-free?",
    answer: "Yes — all PF&H gels, chews, and drink mixes are vegan-friendly and gluten-free.",
  },
  {
    question: "Do your products contain caffeine?",
    answer:
      "Most don't. Caffeinated options (gels and chews) are clearly labelled with the caffeine amount per serving.",
  },
  {
    question: "What is an Advanced Sweat Test?",
    answer:
      "A lab-style test that measures exactly how much sodium you lose per litre of sweat, so you can hydrate precisely instead of guessing. Available at testing centers worldwide or via an at-home kit.",
  },
  {
    question: "Do I really need a sweat test?",
    answer:
      "Not essential — our free online Fuel & Hydration Planner gives strong recommendations based on your event and body data. A sweat test is recommended if you cramp, bonk, or compete at a high level.",
  },
  {
    question: "Is the Fuel & Hydration Planner free?",
    answer:
      "Yes, completely free. It generates a personalized carb, fluid, and sodium plan for your specific race.",
  },
  {
    question: "How many carbs per hour should I take?",
    answer:
      "Most endurance athletes do well on 60–90g/hour. Trained guts can tolerate 90–120g/hour for long or intense events. Build up gradually in training.",
  },
  {
    question: "Can I mix PF and PH in the same bottle?",
    answer:
      "Yes — combining a PF drink mix with a PH tab is a common way to hit both your carb and sodium targets in one bottle.",
  },
  {
    question: "Will gels upset my stomach?",
    answer:
      "PF 30 gels use a 1:0.8 glucose-to-fructose ratio for fast absorption and minimal GI distress, but always practice in training before race day.",
  },
  {
    question: "Where do you ship?",
    answer:
      "Worldwide, with dedicated warehouses in the UK, EU, US, and Australia for faster regional delivery.",
  },
  {
    question: "What's your return policy?",
    answer:
      "Unopened products can be returned within 30 days. Contact support for any product quality issues.",
  },
  {
    question: "Do you offer team or trade discounts?",
    answer: "Yes — clubs, coaches, and retailers can apply through our Team & Trade program.",
  },
];

function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Services"
        title="Energy services, end to end."
        subtitle="From a single forecourt to a global supply chain — we engineer the fuel logistics that keep your operation moving."
        image="/images/tanker.jpg"
      />

      {/* Services */}
      <section className="py-16 lg:py-24 bg-[#F5F3F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Our Operations
            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-black">
              Specialized Fueling Solutions
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="h-full bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F3F7] flex items-center justify-center mb-5">
                    <img src={s.icon} alt={s.title} className="w-6 h-6 object-contain" />
                  </div>

                  <h3 className="text-xl font-semibold text-black">{s.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f8fc] rounded-4xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Service Area Map
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight text-[#0d1b4c]">
                  Serving Major U.S. Marinas &
                  <br />
                  Coastal Regions
                </h2>

                <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
                  Our network extends across the Atlantic, Gulf and Pacific coasts, ensuring you're
                  never far from a reliable fuel source.
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-8">
                  <button className="bg-[#0d1b4c] hover:bg-[#13276d] text-white px-7 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                    Check Availability
                  </button>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    Expanding to 12 new ports in 2025
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img src={mapImg} alt="Map" className="w-full h-100 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-[#f5f5fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Recent Deliveries
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#0d1b4c]">
              Live Operations Feed
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Real-time snapshots of our professional fueling teams in action.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[220px]">
            <div className="md:col-span-3 overflow-hidden rounded-3xl group">
              <img
                src={gallery[0]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:col-span-1 overflow-hidden rounded-3xl group">
              <img
                src={gallery[1]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:col-span-2 overflow-hidden rounded-3xl group">
              <img
                src={gallery[2]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:col-span-2 overflow-hidden rounded-3xl group">
              <img
                src={gallery[3]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:col-span-4 overflow-hidden rounded-3xl group">
              <img
                src={gallery[4]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="bg-[#f5f5fa] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Banner */}
          <div className="bg-[#001a57] rounded-3xl py-14 px-6 md:px-12 text-center mb-14">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
              Need Fuel Urgently? We’re Ready.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
                Schedule Now
              </button>

              <button className="bg-white hover:bg-gray-100 transition text-[#001a57] font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                Call 1-800-RELIABLE
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Contact Us
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#001a57]">Get in Touch</h2>

              <p className="text-gray-500 mt-4 leading-relaxed max-w-md">
                Our dispatch team is available 24/7 to handle your inquiries and logistical needs.
              </p>

              <div className="space-y-6 mt-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5fa] flex items-center justify-center">
                    <Phone size={18} className="text-[#001a57]" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">24/7 Hotline</p>
                    <h4 className="font-semibold text-[#001a57]">1-800-RELIABLE</h4>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5fa] flex items-center justify-center">
                    <Mail size={18} className="text-[#001a57]" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Email Support</p>
                    <h4 className="font-semibold text-[#001a57]">dispatch@reliablefuel.com</h4>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5fa] flex items-center justify-center">
                    <MapPin size={18} className="text-[#001a57]" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Headquarters</p>
                    <h4 className="font-semibold text-[#001a57]">
                      1200 Maritime Blvd, Miami, FL 33101
                    </h4>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5fa] flex items-center justify-center">
                    <Clock size={18} className="text-[#001a57]" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Hours of Operation</p>
                    <h4 className="font-semibold text-[#001a57]">24/7/365 Marine Support</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#f7f7fb] rounded-3xl p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#001a57]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#001a57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">
                    Vessel Type
                  </label>

                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#001a57]">
                    <option>Private Yacht</option>
                    <option>Commercial Ship</option>
                    <option>Fishing Boat</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">
                    Fuel Requirement (Gallons)
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 500"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#001a57]"
                  />
                </div>

                <button className="w-full bg-[#001a57] hover:bg-[#0b2a78] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              FAQ
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Frequently Asked Questions
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Precision Fuel & Hydration, our products, fueling
              strategies, sweat testing, and shipping.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>

                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-orange-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
