import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    { name: "Haircut", price: "₹100", description: "Trendy haircut styles to suit your personality." },
    { name: "Hair Coloring", price: "₹50", description: "Professional hair coloring with premium products." },
    { name: "Hair Shaving", price: "₹50", description: "Get stylish and professional beard looks." },
  ];

  return (
    <div className="px-6 py-20 md:px-20 bg-gray-50 min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">
          Our Services
        </span>
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
          >
            {/* Decorative Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400"></div>

            <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mt-4">
              {s.name}
            </h3>
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              {s.description}
            </p>
            <p className="mt-6 font-bold text-green-700 text-lg">{s.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
