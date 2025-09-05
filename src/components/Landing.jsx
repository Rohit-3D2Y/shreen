import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // Your WhatsApp number here in international format (e.g., 91 for India)
  const whatsappURL = `https://wa.me/918082466624?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20work`;

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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 p-4 max-w-7xl mx-auto">
        {[
          "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg",
          "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Interior-with-Plush-White-Chair-1300x1200.jpeg",
          "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg",
          "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-boho-vintage-dining-room-interior-with-poster-mock-up-round-table-with-rattan-chair-vase-with-dried-flowers-brown-wall-rattan-lamp-mock-up-poster-template-1300x1300.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={src}
              alt={`Interior Product ${index + 1}`}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Landing;
