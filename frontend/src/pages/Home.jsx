// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white p-4 flex justify-between items-center fixed w-full top-0 left-0 shadow-lg z-20">
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-2xl font-extrabold tracking-wide"
      >
        ✨ Amit Salon
      </motion.h1>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`absolute md:static bg-pink-600 md:bg-transparent left-0 top-16 w-full md:w-auto md:flex gap-6 p-4 md:p-0 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <li><Link to="/" className="hover:text-yellow-200 transition">Home</Link></li>
        <li><Link to="/services" className="hover:text-yellow-200 transition">Services</Link></li>
        <li><Link to="/gallery" className="hover:text-yellow-200 transition">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link></li>
      </motion.ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-28 md:px-20 bg-gray-50 min-h-screen">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-lg"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Transform Your <span className="text-pink-600">Style</span> <br />
          at <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">Amit Salon</span>
        </h2>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Experience premium hair care, expert styling, and spa services.
          Look confident, elegant, and glamorous every single day!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
        >
          Book Appointment
        </motion.button>
      </motion.div>

      {/* Right Hero Image */}
      <motion.img
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/salon.jpg"
        alt="Salon"
        className="rounded-2xl shadow-2xl mt-12 md:mt-0 md:ml-10 w-full md:w-1/2 hover:scale-105 transition-transform duration-500"
      />
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
