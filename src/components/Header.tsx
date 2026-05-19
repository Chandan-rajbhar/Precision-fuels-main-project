import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const links = [
  { to: "/", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/fueldelivery", label: "Fuel Delivery" },
  { to: "/products", label: "Gallery" },
  { to: "/about", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [fuelOpen, setFuelOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:h-10">
            
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <img
                  src="/images/phone_number.png"
                  alt="Phone"
                  className="w-4 h-4 object-contain"
                />
                <span>+1 123 456 7899</span>
              </span>

              <span className="flex items-center gap-2">
                <img
                  src="/images/mail.png"
                  alt="Mail"
                  className="w-4 h-4 object-contain"
                />
                <span className="break-all sm:break-normal">
                  info@precisionfuel.com
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/Precision_Logo.png"
                alt="Precision Fuel"
                className="w-[90px] sm:w-[110px] md:w-[120px] h-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {links.map((l) =>
                l.label === "Fuel Delivery" ? (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => setFuelOpen(true)}
                    onMouseLeave={() => setFuelOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition">
                      {l.label}
                      <FiChevronDown size={16} />
                    </button>

                    <AnimatePresence>
                      {fuelOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 w-48 rounded-lg bg-white text-gray-700 font-bold shadow-xl overflow-hidden"
                        >
                          <a
                            href="/Rec90"
                            className="block px-4 py-3 text-sm hover:bg-white/10 transition"
                          >
                            REC-90
                          </a>

                          {/* <a
                            href="/rec90-1"
                            className="block px-4 py-3 text-sm hover:bg-white/10 transition"
                          >
                            Diesel Fuel
                          </a> */}

                          <a
                            href="/fuel"
                            className="block px-4 py-3 text-sm hover:bg-white/10 transition"
                          >
                            Fuel
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-sm font-medium text-gray-700 hover:text-red-600 transition"
                    activeProps={{
                      className: "text-red-600 font-semibold",
                    }}
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:flex items-center">
              <button className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition">
                ORDER NOW
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2 text-black"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-b bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              
              {links.map((l) =>
                l.label === "Fuel Delivery" ? (
                  <div key={l.to}>
                    <button
                      onClick={() => setFuelOpen(!fuelOpen)}
                      className="w-full flex items-center justify-between py-3 text-gray-700 font-medium border-b"
                    >
                      {l.label}
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          fuelOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {fuelOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 flex flex-col"
                        >
                          <a
                            href="/Rec90"
                            className="py-2 text-sm text-gray-600"
                            onClick={() => setOpen(false)}
                          >
                            REC-90
                          </a>

                          {/* <a
                            href="/rec90-1"
                            className="py-2 text-sm text-gray-600"
                            onClick={() => setOpen(false)}
                          >
                            Diesel Fuel
                          </a> */}

                          <a
                            href="/fuel"
                            className="py-2 text-sm text-gray-600"
                            onClick={() => setOpen(false)}
                          >
                            Fuel
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="py-3 text-gray-700 font-medium border-b"
                  >
                    {l.label}
                  </Link>
                )
              )}

              {/* MOBILE BUTTON */}
              <button className="mt-4 w-full rounded-md bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 transition">
                ORDER NOW: 561-205-FUEL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}