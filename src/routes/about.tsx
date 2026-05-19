import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Users,
  Globe,
  Target,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import refineryImg from "../../public/images/Blogs_image/refineryImg.png";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VoltaFuel" },
      {
        name: "description",
        content:
          "25+ years of energy expertise. VoltaFuel powers retail, industry and aviation across 40 countries.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  {
    y: "1998",
    t: "Founded",
    d: "VoltaFuel begins as a regional diesel distributor in Houston, Texas.",
  },
  {
    y: "2007",
    t: "First 100 stations",
    d: "Expanded retail network across the southern United States.",
  },
  {
    y: "2015",
    t: "Global expansion",
    d: "Operations launched in Europe, the Middle East and Latin America.",
  },
  {
    y: "2021",
    t: "Renewables division",
    d: "Launched VoltaBio and SAF programs for low-carbon transition.",
  },
  {
    y: "2026",
    t: "1,200+ stations",
    d: "Serving 12,000+ business customers across 40 countries.",
  },
];

const values = [
  {
    icon: Target,
    t: "Reliability",
    d: "98% on-time delivery — every load, every customer.",
  },
  {
    icon: Award,
    t: "Quality",
    d: "Top Tier certified across our entire fuel portfolio.",
  },
  {
    icon: Users,
    t: "Partnership",
    d: "Long-term contracts with transparent, fair pricing.",
  },
  {
    icon: Globe,
    t: "Sustainability",
    d: "Net-zero by 2040 with renewable fuel investments today.",
  },
];


const blogPosts = [
  {
    title: "How Precision Fuels Is Transforming Modern Fuel Logistics",
    date: "January 12, 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    large: true,
    desc: "Discover how Precision Fuels is revolutionizing commercial fuel delivery through advanced logistics, real-time monitoring and sustainable energy innovation.",
  },
  {
    title: "Delivering Reliable Marine Fuel Across Coastal Regions",
    date: "January 8, 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "Precision Fuels ensures fast, safe and dependable marine fueling solutions for ports, marinas and commercial vessels nationwide.",
  },
  {
    title: "The Future of Renewable Diesel & Clean Energy Solutions",
    date: "January 5, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "Explore how renewable diesel and low-emission energy technologies are shaping the next generation of fuel infrastructure.",
  },
  {
    title: "Behind the Operations of a 24/7 Fuel Supply Network",
    date: "December 28, 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    desc: "Take a closer look at the logistics, dispatch systems and expert teams powering Precision Fuels around the clock.",
  },
];

const articles = [
  {
    title: "Optimizing Fleet Fuel Management for Maximum Efficiency",
    date: "January 14, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Why Businesses Are Switching to Renewable Fuel Sources",
    date: "January 11, 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Advanced Fuel Monitoring Systems for Modern Industries",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How Precision Fuels Supports Emergency Fuel Deliveries",
    date: "January 6, 2026",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Role of AI in Fuel Distribution & Logistics",
    date: "January 2, 2026",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Building Sustainable Fuel Infrastructure for the Future",
    date: "December 30, 2025",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="About Us"
        title="Powering motion since 1998."
        subtitle="A quarter century of refining, distributing and reimagining what energy can do for people, fleets and industry."
        image={refineryImg}
      />

      {/* Story */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Our Story
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black leading-tight">
                  Fueling industries with trust & innovation.
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-gray-600 leading-relaxed text-lg">
                  What started as a single Houston tanker rolling diesel to
                  construction sites in 1998 has grown into one of the most
                  trusted independent energy companies in the world.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Today, VoltaFuel operates 1,200+ retail stations, 14
                  distribution terminals and partners with leading fleets,
                  airlines and shipping operators worldwide.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 md:py-20 bg-[#f8f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Latest Insights
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-black">
              Our Insightful Blog
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Explore innovation, sustainability and the future of modern
              energy solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">

            {/* Main Blog */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden group min-h-130">

                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold leading-snug">
                    {blogPosts[0].title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-200">
                    <CalendarDays size={16} />
                    {blogPosts[0].date}
                  </div>

                  <p className="mt-5 text-gray-300 leading-relaxed max-w-xl">
                    Discover how renewable innovation is transforming global
                    industries and shaping the future of sustainable energy.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Blogs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {blogPosts.slice(1).map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <div className="sm:w-[42%] h-55 sm:h-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-[#111827] leading-snug">
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                      <CalendarDays size={15} />
                      {post.date}
                    </div>

                    <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-primary transition">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">

            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                Articles
              </span>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111827]">
                Explore Our Latest Articles
              </h2>
            </div>

            <p className="max-w-xl text-gray-500 leading-relaxed">
              Stay updated with trends, startup innovation, AI transformation
              and sustainability insights from our experts.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-[#f8f8fc] rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111827] leading-snug">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                    <CalendarDays size={15} />
                    {article.date}
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-primary transition">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}

          </div>

          <div className="flex justify-center mt-14">
            <button className="bg-[#111827] hover:bg-black text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[#f8f8fc] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              What We Stand For
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-black">
              Values that define us.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">

                  <div className="w-14 h-14 rounded-2xl bg-[#f5f5fa] flex items-center justify-center text-black mb-6">
                    <v.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-semibold text-black">
                    {v.t}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-relaxed">
                    {v.d}
                  </p>

                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14 text-center">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Milestones
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-black">
              Our Journey
            </h2>
          </div>

          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

            {milestones.map((m, i) => (
              <FadeIn key={m.y} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >

                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md" />

                  <div className="hidden md:block flex-1" />

                  <div className="ml-12 md:ml-0 flex-1">
                    <div className="bg-[#f8f8fc] rounded-3xl p-6 border border-gray-100 shadow-sm">

                      <span className="text-3xl font-bold text-primary">
                        {m.y}
                      </span>

                      <h3 className="mt-2 text-2xl font-semibold text-black">
                        {m.t}
                      </h3>

                      <p className="mt-3 text-gray-500 leading-relaxed">
                        {m.d}
                      </p>

                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;