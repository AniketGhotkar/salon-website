import React from "react";
import { motion } from "framer-motion";

function Gallery() {
  const images = ["/gallery1.jpg", "/gallery2.jpeg", "/gallery3.jpg"];

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
          Our Gallery
        </span>
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
