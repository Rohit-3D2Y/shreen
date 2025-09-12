import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const images = [
  "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  

  // Your WhatsApp number here in international format (e.g., 91 for India)
  const whatsappURL = `https://wa.me/918082466624?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20Interior%20Design%20work`;

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Image with Parallax Effect */}
        <motion.img
          src={images[current]}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            y,
            scale,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Static Centered Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
          <p className="text-base md:text-xl uppercase font-semibold">
            Futuristic Elegance
          </p>
          <h1 className="text-5xl md:text-[10rem] brico -tracking-wider">
            Shreen Designs
          </h1>
          <a
            href={whatsappURL}
            className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200"
          >
            Let's Create Together →
          </a>
        </div>
      </div>
          <div className="text-center mt-10">
              <motion.h2
                      className="text-5xl lg:text-7xl font-bold text-[#a85f31] mb-6 brico -tracking-wider"
                      whileHover={{
                        scale: 1.02,
                        textShadow: "0px 8px 16px rgba(168, 95, 49,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Our Gallery 
                    </motion.h2>
          </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  p-4 max-w-7xl mx-auto">
        {[
          "/gal1 (1).jpeg",
          "/gal1 (2).jpeg",
          "/gal1 (3).jpeg",
         "/gal1 (4).jpeg",
        ].map((src, index) => (
          <a
            key={index}
            className="rounded-xl overflow-hidden group cursor-pointer"
            href='/gallery'
          >
            <img
              src={src}
              alt={`Interior Product ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        ))}
      </div>
  <div className="fixed bottom-16 md:bottom-5 right-10  md:right-5 z-50">
      <a
        href="https://wa.me/918082466624?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20Interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-amber-800 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span>Connect Now</span>
      </a>
    </div>

    </>
  );
};

export default Landing;
