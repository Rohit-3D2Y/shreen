import { useState } from "react";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RippleEffect, HoverText, AnimatedText } from "../utils/animations";

const products = [
  {
    title: "Sofa",
    image:
      "/sofachange.jpeg",
  },
  {
    title: "Chairs",
    image:
      "/chairchange.jpeg",
  },
  {
    title: "Dinning Table",
 image:
      "/diningc.jpeg",  },
  {
    title: "Console Tables",
    image:
      "/consolec.jpeg",
  },
  {
    title: "Wardrobes",
    image:
      "/wardrobec.jpeg",
  },
  {
    title: "Tv Units",
   image:
      "/tvc.jpeg",
  },
  {
    title: "Lights",
    image:
      "/lightc.jpeg",
  },
  {
    title: "Decor Items",
    image:
      "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?cs=srgb&dl=pexels-sammsara-luxury-modern-home-372468-1099816.jpg&fm=jpg",
  },
  {
    title: "Custom Designs",
    image:
      "https://www.meganleedesigns.com/cdn/shop/files/Custom-Design.jpg?v=1704938534",
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const next = () =>
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const getVisibleProducts = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      result.push({ ...products[index], originalIndex: index, position: i });
    }
    return result;
  };

  return (
    <div className=" px-4 md:px-12">
      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center md:space-x-6 mt-10 max-w-6xl">
          {getVisibleProducts().map((product, index) => (
            <RippleEffect
              key={`${product.originalIndex}-${currentIndex}`}
              className="rounded-xl"
              rippleColor="rgba(168, 95, 49, 0.3)"
            >
              <motion.div
                className={`transition-all duration-300 transform relative overflow-hidden rounded-xl shadow-md flex-shrink-0 ${
                  product.position === 0
                    ? "scale-100 opacity-100 z-10"
                    : "scale-95 opacity-50 hidden md:block"
                } w-80 h-96 border-2 border-white`}
                whileHover={{
                  scale: product.position === 0 ? 1.02 : 0.97,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Background Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Overlay Mask */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end px-4 pb-4">
                  <motion.h2
                    className="text-white text-xl font-semibold mb-2 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HoverText className="text-white">
                      {product.title}
                    </HoverText>
                  </motion.h2>
                  <RippleEffect
                    className="inline-block rounded-full"
                    rippleColor="rgba(255, 255, 255, 0.4)"
                  >
                    <Link
                      to={`/${product.title.toLowerCase()}`}
                      className="backdrop-blur-sm bg-white/20 text-white border border-white/40 font-medium px-5 py-2 rounded-full hover:scale-105 transition-all shadow-md flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <AnimatedText>Buy Now</AnimatedText>
                    </Link>
                  </RippleEffect>
                </div>
              </motion.div>
            </RippleEffect>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -top-8 right-4 md:right-10 flex gap-3">
          <RippleEffect
            className="rounded-full"
            rippleColor="rgba(168, 95, 49, 0.3)"
          >
            <motion.button
              onClick={prev}
              className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="text-black" />
            </motion.button>
          </RippleEffect>
          <RippleEffect
            className="rounded-full"
            rippleColor="rgba(168, 95, 49, 0.3)"
          >
            <motion.button
              onClick={next}
              className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="text-black" />
            </motion.button>
          </RippleEffect>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
