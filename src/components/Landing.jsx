import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const images = [
  "https://themes.pixelwars.org/interique/demo-01/wp-content/uploads/sites/2/2025/04/Modern-Sculptural-Chair-1300x1200.jpeg",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Advanced button variants
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
      background: "rgba(255, 255, 255, 0.1)",
    },
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
      background: "rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <>
      {/* Hero Section - Loads immediately as it's the first thing users see */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/3 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
        />

        {/* Image */}
        <motion.img
          src={images[current]}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            y,
            scale,
            x: mousePosition.x * 0.5,
            rotateX: mousePosition.y * 0.1,
          }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Static Centered Text */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 space-y-6"
          style={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-base md:text-xl uppercase font-semibold"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              textShadow: "0 0 20px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -5, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Futuristic Elegance
          </motion.p>
          <motion.h1
            className="text-5xl md:text-[10rem] brico -tracking-wider"
            variants={itemVariants}
            whileHover={{
              scale: 1.02, 
              textShadow: "0 0 30px rgba(255,255,255,0.6)",
              transition: { duration: 0.4 },
            }}
            animate={{
              scale: [1, 1.01, 1],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              style={{
                display: "inline-block",
                x: mousePosition.x * 0.1,
                y: mousePosition.y * 0.1,
              }}
            >
              Shreen Designs
            </motion.span>
          </motion.h1>
          <motion.a
            href={whatsappURL}
            className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate={{
              boxShadow: [
                "0 4px 15px rgba(255, 255, 255, 0.1)",
                "0 6px 20px rgba(255, 255, 255, 0.15)",
                "0 4px 15px rgba(255, 255, 255, 0.1)",
              ],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              whileHover={{
                x: 5,
                transition: { duration: 0.3 },
              }}
              animate={{
                x: [0, 2, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              Let's Create Together
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              whileHover={{
                x: 8,
                rotate: 15,
                transition: { duration: 0.3 },
              }}
              animate={{
                x: [0, 3, 0],
                rotate: [0, 5, 0],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Product Grid - Triggers when scrolled into view */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 p-4 max-w-7xl mx-auto">
        {[
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
