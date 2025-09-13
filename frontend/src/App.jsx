// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Import pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-pink-600 tracking-wide">
          Amit Salon
        </h1>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static bg-white md:bg-transparent left-0 top-16 w-full md:w-auto flex-col md:flex-row shadow-md md:shadow-none transition-all duration-300 ${
            open ? "flex" : "hidden"
          }`}
        >
          <li className="px-6 md:px-0 py-3 md:py-0">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="px-6 md:px-0 py-3 md:py-0">
            <Link
              to="/services"
              className="text-gray-700 hover:text-pink-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="px-6 md:px-0 py-3 md:py-0">
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-pink-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="px-6 md:px-0 py-3 md:py-0">
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="px-6 md:px-0 py-3 md:py-0">
            <Link
              to="/appointment"
              className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition font-semibold"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// ✅ Main App
export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* To prevent content being hidden behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
