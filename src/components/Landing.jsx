import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg'
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden ">
        {/* Image */}
        <img
          src={images[current]}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
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
         <button className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200">
  Let's Create Together
</button>

        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full"
        >
          <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full"
        >
          <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 p-4 max-w-7xl mx-auto">
  <div className="rounded-xl overflow-hidden">
    <img src="https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg" alt="Interior Product 1" className="w-full h-40 object-cover" />
  </div>
  <div className="rounded-xl overflow-hidden ">
    <img src="https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Interior-with-Plush-White-Chair-1300x1200.jpeg" alt="Interior Product 2" className="w-full h-40 object-cover" />
  </div>
  <div className="rounded-xl overflow-hidden">
    <img src="https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-dining-room-with-round-table-rattan-chair-wooden-commode-poster-kitchen-accessories-beige-wall-with-mock-up-poster-home-decor-template-1300x1280.jpg" alt="Interior Product 3" className="w-full h-40 object-cover" />
  </div>
  <div className="rounded-xl overflow-hidden">
    <img src="https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/stylish-boho-vintage-dining-room-interior-with-poster-mock-up-round-table-with-rattan-chair-vase-with-dried-flowers-brown-wall-rattan-lamp-mock-up-poster-template-1300x1300.jpg" alt="Interior Product 4" className="w-full h-40 object-cover" />
  </div>
</div>

      
    </>
  );
};

export default Landing;
