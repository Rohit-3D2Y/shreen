import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Your WhatsApp number here in international format (e.g., 91 for India)
  const whatsappURL = `https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20work`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Hero Section - Loads immediately as it's the first thing users see */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Image */}
        <motion.img
          src={images[current]}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Static Centered Text */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-base md:text-xl uppercase font-semibold"
            variants={itemVariants}
          >
            Futuristic Elegance
          </motion.p>
          <motion.h1
            className="text-5xl md:text-[10rem] brico -tracking-wider"
            variants={itemVariants}
          >
            Shreen Designs
          </motion.h1>
          <motion.a
            href={whatsappURL}
            className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Create Together
          </motion.a>
        </motion.div>
      </div>

      {/* Product Grid - Triggers when scrolled into view */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 p-4 max-w-7xl mx-auto">
        {
          [
            "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg",
            "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Interior-with-Plush-White-Chair-1300x1200.jpeg",
            "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg",
            "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-boho-vintage-dining-room-interior-with-poster-mock-up-round-table-with-rattan-chair-vase-with-dried-flowers-brown-wall-rattan-lamp-mock-up-poster-template-1300x1300.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={src}
                alt={`Interior Product ${index + 1}`}
                className="w-full h-40 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default Landing;
