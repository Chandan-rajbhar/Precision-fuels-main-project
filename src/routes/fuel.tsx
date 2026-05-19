import { createFileRoute } from "@tanstack/react-router";
import hero_img from "../../public/images/fuel_page_img/hero_section.webp";

export const Route = createFileRoute("/fuel")({
  head: () => ({
    meta: [
      { title: "fuel — VoltaFuel" },
      {
        name: "description",
        content:
          "25+ years of energy expertise. VoltaFuel powers retail, industry and aviation across 40 countries.",
      },
    ],
  }),
  component: HomePage,
});

const servicesLeft = [
  "REC-90 Marine Fuel",
  "Construction Fuel",
  "Construction Fueling",
  "Generator Diesel Fuel",
  "Fuel Tank Rentals",
  "Fuel Polishing",
];

const servicesRight = [
  "Diesel Fuel",
  "Diesel Delivery",
  "Fleet Fueling",
  "Bulk Storage",
  "Racing Fuel",
  "Fuel Pumpout Services",
];

function HomePage() {
  return (
    <>
      <section className="bg-[#efefef] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-1xl sm:text-4xl md:text-3xl lg:text-3xl font-black uppercase leading-[1.1] tracking-tight text-black max-w-2xl">
                South Florida’s Premier Mobile Dockside Fuel Service
              </h1>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <ul className="space-y-4">
                  {servicesLeft.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base md:text-lg font-semibold text-black leading-relaxed"
                    >
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-4">
                  {servicesRight.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base md:text-lg font-semibold text-black leading-relaxed"
                    >
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-12">
                <button
                  style={{ minWidth: 270 }}
                  className="bg-[#b3534d] cursor-pointer hover:bg-[#9f4741] transition-all duration-300 text-white font-bold uppercase px-8 md:px-10 py-4 md:py-5 rounded-md text-base md:text-lg w-full sm:w-auto"
                >
                  Order Now: 561-205-FUEL (3835)
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-[45vh] sm:h-[55vh] lg:h-[60vh] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={hero_img}
                alt="Dockside Fuel Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
