import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
const links = [
  { to: "/home", label: "Home" },
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
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-red-600 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-8 py-1 sm:py-0">
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="flex items-center gap-2">
              <img src="/images/phone_number.png" alt="" className="w-3 sm:w-4" />
              <span className="text-xs sm:text-sm">+1 123 456 7899</span>
            </span>

            <span className="flex items-center gap-2">
              <img src="/images/mail.png" alt="" className="w-3 sm:w-4" />
              <span className="text-xs sm:text-sm break-all sm:break-normal">
                info@precisionfuel.com
              </span>
            </span>
          </div>

          {/* RIGHT */}
          {/* <div className="mt-1 sm:mt-0">
            <span className="cursor-pointer">
              <img src="/images/Instagram.png" alt="" className="w-5 sm:w-6" />
            </span>
          </div> */}
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight">
              <img src="/images/Precision_Logo.png" alt="" width={100} height={60} />
            </span>
          </Link>
          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) =>
              l.label === "Fuel Delivery" ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setFuelOpen(true)}
                  onMouseLeave={() => setFuelOpen(false)}
                >
                  <button
                    onClick={() => setFuelOpen((s) => !s)}
                    onFocus={() => setFuelOpen(true)}
                    onBlur={() => setFuelOpen(false)}
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    {l.label}
                  </button>

                  <AnimatePresence>
                    {fuelOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute right-0 mt-2 bg-black  text-white rounded-md w-30 shadow-lg z-50"
                      >
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm font-semibold border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          REC-90
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          Diesel Fuel
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setFuelOpen(false)}
                  className="text-sm text-gray-600 hover:text-black transition"
                  activeProps={{ className: "text-black font-semibold" }}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          {/* BUTTONS */}
          <div className="hidden md:flex items-center gap-3">

            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
              ORDER NOW: 561-205-FUEL (3835)
            </button>
          </div>

          <button
            className="md:hidden p-2 text-black hover:text-gray-600 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) =>
                l.label === "Fuel Delivery" ? (
                  <div key={l.to}>
                    <button
                      onClick={() => setFuelOpen((s) => !s)}
                      className="w-full text-left py-2 text-gray-700 font-semibold"
                    >
                      {l.label}
                    </button>

                    {fuelOpen && (
                      <div className="pl-4">
                        <a
                          href="#"
                          onClick={() => {
                            setOpen(false);
                            setFuelOpen(false);
                          }}
                          className="block py-2 text-gray-700"
                        >
                          REC-90
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setOpen(false);
                            setFuelOpen(false);
                          }}
                          className="block py-2 text-gray-700"
                        >
                          Diesel Fuel
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => {
                      setOpen(false);
                      setFuelOpen(false);
                    }}
                    className="py-2 text-gray-700"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
