import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Designing",
    description:
      "Creating functional and aesthetically pleasing indoor spaces.",
    icon: "/flaticons/sofa.png",
  },
  {
    title: "Exterior Designing",
    description:
      "Enhancing curb appeal with elegant and practical outdoor designs.",
    icon: "/flaticons/fence.png",
  },
  {
    title: "Residential Designing",
    description: "Tailored solutions for apartments, villas, and homes.",
    icon: "/flaticons/house.png",
  },
  {
    title: "Commercial Designing",
    description:
      "Functional and attractive spaces for offices, shops, and businesses.",
    icon: "/flaticons/malls.png",
  },
  {
    title: "Civil Work",
    description: "Structural and foundational work for all types of projects.",
    icon: "/flaticons/worker.png",
  },
  {
    title: "Carpentry",
    description: "Custom woodwork solutions for furniture and interiors.",
    icon: "/flaticons/carpentry.png",
  },
  {
    title: "Electrical",
    description: "Safe and efficient electrical installations and systems.",
    icon: "/flaticons/plug.png",
  },
  {
    title: "Automation",
    description: "Smart home and office automation solutions.",
    icon: "/flaticons/settings.png",
  },
  {
    title: "Plumbing",
    description: "Reliable water systems and sanitary fittings.",
    icon: "/flaticons/plumbing.png",
  },
  {
    title: "POP",
    description: "False ceiling and decorative gypsum/plaster works.",
    icon: "/flaticons/plastering.png",
  },
  {
    title: "Painting",
    description: "Professional painting services for every surface.",
    icon: "/flaticons/paint-roller.png",
  },
];

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleToggle = () => {
    if (visibleCount >= services.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => Math.min(prev + 4, services.length));
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 text-black mt-10 relative">
      <div className="max-w-7xl mx-auto sm:pb-0">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.h2
            className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Tailored Interior <br /> Solutions
          </motion.h2>
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <p className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2">
              Our Services
            </p>
            <p className="text-lg text-gray-700">
              Whether you're dreaming of a cozy home retreat or a bold, modern
              workspace, our expert designers bring your vision to life.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {(isMobile ? services.slice(0, visibleCount) : services).map(
            (service, index) => (
              <motion.div
                key={index}
                className="bg-[#e7daca] rounded-xl px-6 py-8 flex flex-col justify-between cursor-pointer h-[380px] group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <div>
                  <motion.img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h3
                    className="text-2xl md:text-3xl text-[#a85f31] mt-8 font-semibold brico tracking-tight"
                    whileHover={{ color: "#7f5539" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-[#b07c5c] text-base mt-2 tracking-tight">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <motion.a
                    href={`https://wa.me/919876543210?text=Hi, I would like to know more about your "${encodeURIComponent(
                      service.title
                    )}" service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#a85f31] text-white brico text-sm md:text-base py-2.5 px-5 rounded-full shadow-md w-fit"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#7f5539",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Floating Toggle Button (Mobile Only) */}
      {isMobile && (
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            onClick={handleToggle}
            className="bg-white border border-[#a85f31] text-[#a85f31] font-semibold px-6 py-2 rounded-full shadow-md"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#a85f31",
              color: "#ffffff",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {visibleCount >= services.length ? "View Less" : "View More"}
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default Services;
