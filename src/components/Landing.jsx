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
      <div className="fixed bottom-16 md:bottom-5 md:right-5 right-10 z-50">
  <a
    href="https://wa.me/918082466624?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20travel%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 bg-[#8e4f27] rounded-full shadow-lg hover:scale-105 transition-transform"
  >
    {/* WhatsApp Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-7 h-7 text-white"
      fill="currentColor"
    >
      <path d="M19.11 17.14c-.29-.14-1.69-.83-1.95-.93c-.26-.1-.45-.14-.64.14c-.19.29-.74.93-.91 1.12c-.17.19-.34.21-.62.07c-.29-.14-1.2-.44-2.29-1.4c-.85-.76-1.43-1.7-1.6-1.99c-.17-.29-.02-.45.12-.59c.12-.12.29-.31.43-.48c.14-.17.19-.29.29-.48c.1-.19.05-.36-.02-.5c-.07-.14-.64-1.54-.88-2.11c-.23-.56-.47-.49-.64-.5c-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 1-1 2.43c0 1.43 1.02 2.81 1.16 3c.14.19 2.01 3.07 4.86 4.31c.68.29 1.21.46 1.62.59c.68.22 1.31.19 1.8.12c.55-.08 1.69-.69 1.93-1.36c.24-.67.24-1.24.17-1.36c-.07-.12-.26-.19-.55-.33m-3.1 5.43h-.01c-1.62 0-3.23-.44-4.63-1.27l-.33-.2l-3.44.9l.92-3.35l-.21-.35a8.57 8.57 0 0 1-1.31-4.6c0-4.76 3.88-8.63 8.65-8.63c2.31 0 4.49.9 6.12 2.53c1.63 1.62 2.53 3.79 2.53 6.09c0 4.76-3.88 8.63-8.65 8.63M26.7 5.3A13.44 13.44 0 0 0 16 1.02C8.28 1.02 2.02 7.28 2.02 15c0 2.46.64 4.86 1.86 6.99L2 31l9.2-1.82A13.95 13.95 0 0 0 16 28c7.72 0 13.98-6.26 13.98-13.98c0-3.74-1.45-7.26-4.02-9.94" />  
    </svg>
  </a>
</div>

    </>
  );
};

export default Landing;
