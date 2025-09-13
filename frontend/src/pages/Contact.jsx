import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="px-6 py-20 md:px-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center bg-white shadow-2xl rounded-2xl p-8 md:p-12"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8">
          <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h2>

        {/* Contact Info */}
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            📍{" "}
            <span className="font-semibold">
              Sakharwahi Phata, Chandrapur
            </span>
          </p>
          <p>
            📞{" "}
            <span className="font-semibold">+91 98765 43210</span>
          </p>
          <p>
            ✉️{" "}
            <span className="font-semibold">info@amitbhau.com</span>
          </p>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Contact;
