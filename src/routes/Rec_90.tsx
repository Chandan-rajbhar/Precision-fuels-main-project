import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import our_process_img from "../../public/images/Rec_90_img/Our_process.webp";
import bgc_img from "../../public/images/Rec_90_img/Ship_bg_img.png";
const teamMembers = [
  {
    name: "Monet Goode",
    role: "Founder",
    image: "/images/hero-station.jpg",
    bio: "With a vision for building something meaningful, our founder brings a blend of big-picture thinking and hands-on experience. They set the tone for everything we do.",
  },
  {
    name: "Emmett Marsh",
    role: "Sales Manager",
    image: "/images/fuel_img.png",
    bio: "Focused, approachable, and driven by results, our sales manager is all about building strong relationships. They help connect people to the right solutions—with clarity and care.",
  },
  {
    name: "Eleanor Parks",
    role: "Marketing Director",
    image: "/images/services_image/Ship_img.png",
    bio: "Creative and strategic in equal measure, our marketing director brings fresh ideas to every campaign. They turn insights into action and help our message resonate with the right audience.",
  },
  {
    name: "Karl Hansen",
    role: "Customer Success",
    image: "/images/services_image/Ship_img_2.png",
    bio: "Friendly, attentive, and fully dedicated to your success, our manager ensures flawless implementation and smooth post-delivery communication across every channel.",
  },
];

const testimonials = [
  {
    text: '"THEIR ATTENTION TO DETAIL AND COMMITMENT" TO QUALITY TRULY STOOD OUT. WE\'VE ALREADY RECOMMENDED THEM TO OTHERS.',
    author: "—Former Customer",
  },
  {
    text: '"CREATIVE, RELIABLE, AND GENUINELY PASSIONATE ABOUT WHAT THEY DO."',
    author: "—Former Customer",
  },
  {
    text: '"A PROFESSIONAL TEAM THAT DELIVERS ON THEIR PROMISES."',
    author: "—Former Customer",
  },
  {
    text: '"EVERY DETAIL WAS THOUGHTFULLY EXECUTED. WE\'RE THRILLED WITH THE OUTCOME."',
    author: "—Former Customer",
  },
];
export const Route = createFileRoute("/Rec90")({
  head: () => ({
    meta: [
      { title: "REC-90 — VoltaFuel" },
      {
        name: "description",
        content:
          "25+ years of energy expertise. VoltaFuel powers retail, industry and aviation across 40 countries.",
      },
    ],
  }),
  component: RecPage,
});

function RecPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden flex items-center justify-center">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Replace with your actual hosted image path
            backgroundImage: `url(${bgc_img})`,
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

        {/* Content */}
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white font-sans font-extrabold tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase select-none">
            REC-90 Marine Fuel
          </h1>
        </div>
      </section>
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black uppercase leading-none max-w-md">
              Marine <br />
              Fuel <br />
              Delivered
            </h2>
          </div>

          {/* Right Column: Content & CTA */}
          <div className="flex flex-col space-y-12">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">
              REC90 is ethanol-free recreational fuel designed for maximum engine performance,
              reliability, and long-term protection. At Precision Fuel Group, we supply premium
              REC90 fuel to help keep your vessel running cleaner, smoother, and more efficiently.
              With no ethanol content, REC90 reduces moisture absorption, corrosion, and fuel system
              buildup making it the preferred choice for boats, high-performance engines,
              generators, and marine equipment. When performance and engine longevity matter, we
              deliver the cleanest fuel available directly to your dock.
            </p>

            <div>
              <button className="w-full sm:w-auto px-16 py-4 bg-[#a34343] hover:bg-[#8c3535] text-white font-bold tracking-wider text-sm uppercase transition-colors duration-200 shadow-sm">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-7xl mx-auto flex flex-col space-y-16 md:space-y-24">
          {/* Row 1: Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <div className="w-full flex justify-center md:justify-start">
              <div className="w-full max-w-[450px] aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
                <img
                  src={our_process_img}
                  alt="Muted aesthetic workspace with hands writing in a notebook"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col space-y-4 max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-black uppercase leading-[1.1]">
                Our process is <br />
                simple and <br />
                thoughtful.
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">
                Explore our range of services designed to help you move{" "}
                <br className="hidden lg:inline" />
                forward with confidence, wherever you're headed next.
              </p>
            </div>
          </div>

          {/* Row 2: Location Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">Our Location</span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none text-black uppercase">
                In-Person <br />
                & Remote <br />
                Options
              </h2>

              <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                Our office is conveniently located in Manhattan. A modern space designed to
                collaborate, grow, and reconnect with teams and clients.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-[2px] bg-black" />
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Noida Electronic City
                </p>
              </div>
            </div>

            {/* Right Map */}
            <div className="relative group order-1 lg:order-2">
              <div className="overflow-hidden rounded-1xl shadow-2xl border border-gray-200 h-[350px] sm:h-[450px]">
                <iframe
                  title="Manhattan Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3502.0458959500306!2d77.37223812550063!3d28.628386525667064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snoida%20electronic%20city!5e0!3m2!1sen!2sin!4v1779194809279!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale transition-all duration-700 scale-100 group-hover:scale-110 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#f9f9f9] py-20 px-6 md:px-12 lg:px-24 w-full text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center space-y-10">
          {/* Top Text Content Container */}
          <div className="space-y-4">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-black uppercase select-none">
              Our Services
            </h2>

            {/* Section Subtitle */}
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto break-words balance-text">
              Explore our range of services designed to help you move forward with confidence,{" "}
              <br className="hidden sm:inline" />
              wherever you're headed next.
            </p>
          </div>

          {/* Added Call-to-Action Button */}
          <div>
            <button className="px-16 py-4 bg-[#a34343] hover:bg-[#8c3535] text-white font-bold tracking-wider text-xs sm:text-sm uppercase transition-colors duration-200 shadow-sm">
              Work With Us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-black tracking-widest text-black uppercase text-center mb-16 select-none">
            Meet The Team
          </h2>

          {/* Floating Left Navigation Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-20 w-12 h-12 -translate-y-1/2 rounded-full bg-[#a34343] hover:bg-[#8c3535] text-white flex items-center justify-center transition-colors duration-200 shadow-md focus:outline-none -translate-x-4 md:-translate-x-6"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 4.5l-6 6m0 0l6 6m-6-6h15"
              />
            </svg>
          </button>

          {/* Floating Right Navigation Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-20 w-12 h-12 -translate-y-1/2 rounded-full bg-[#a34343] hover:bg-[#8c3535] text-white flex items-center justify-center transition-colors duration-200 shadow-md focus:outline-none translate-x-4 md:translate-x-6"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
            </svg>
          </button>

          {/* Horizontal Scrollable Slider Row Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[290px] sm:w-[320px] md:w-[360px] snap-start flex flex-col space-y-4"
              >
                {/* Profile Image Frame Block */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
                  />
                </div>

                {/* Identity Headers Meta Metadata Panel */}
                <div className="space-y-1">
                  <h3 className="text-base font-black tracking-wider text-black uppercase">
                    {member.name}
                  </h3>
                  <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                    {member.role}
                  </h4>
                </div>

                {/* Bio Summary Segment Paragraph */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#ede6e2] py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-10 min-h-[260px] md:min-h-[300px]">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#a34343] hover:bg-[#8c3535] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 text-center max-w-4xl mx-auto h-full flex items-center justify-center">
            <div
              key={currentIndex}
              className={`w-full min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}`}
            >
              <p className="text-black text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide leading-[1.4] transition-all duration-300">
                {testimonials[currentIndex].text}
              </p>

              <span className="block mt-8 text-gray-700 text-sm sm:text-base font-medium tracking-wide">
                {testimonials[currentIndex].author}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#a34343] hover:bg-[#8c3535] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
            </svg>
          </button>
        </div>
      </section>
      <section className="bg-[#f9f9f9] py-24 px-6 md:px-12 lg:px-24 w-full text-center flex flex-col items-center justify-center select-none">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center space-y-8">
          {/* Main Heading Text */}
          <h2 className="text-[#a34343] text-2xl sm:text-3xl md:text-4xl font-black tracking-widest uppercase">
            Get Started Today.
          </h2>

          {/* Action Button */}
          <div>
            <button className="px-8 py-3 bg-[#a34343] hover:bg-[#8c3535] text-white font-bold tracking-wider text-[10px] sm:text-xs uppercase transition-colors duration-200 rounded-sm shadow-sm">
              Book A Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecPage;
