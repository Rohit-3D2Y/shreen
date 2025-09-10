import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AnimatedText,
  AnimatedCard,
  HoverText,
  AnimatedImage,
} from "../utils/animations";

const HeroStats = () => {
  const [counts, setCounts] = useState({ projects: 0, years: 0, customers: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Counter animation effect - only when in view
  useEffect(() => {
    if (isInView) {
      const targets = { projects: 50, years: 14, customers: 150 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          projects: Math.floor(targets.projects * progress),
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
        });

        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const headerVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="px-4 sm:px-6 lg:px-12 py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="-tracking-wider brico text-6xl text-left">
            <h2>
              Designing Spaces, <br />
              Defining Lifestyles
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1 - Projects Completed */}
          <AnimatedCard delay={0.3}>
            <div className="space-y-6 p-4">
              <div className="flex items-start space-x-4">
                <motion.span
                  className="text-4xl sm:text-5xl font-light text-gray-800"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.1,
                    color: "#a57151",
                    textShadow: "0 4px 8px rgba(165, 113, 81, 0.3)",
                  }}
                >
                  {counts.projects}+
                </motion.span>
                <div className="flex-1 pt-2">
                  <HoverText className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4">
                    Projects Completed
                  </HoverText>
                  <motion.p
                    className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    whileHover={{
                      color: "#8b6f4a",
                      transition: { duration: 0.2 },
                    }}
                  >
                    We completed more than 50+ projects with seamless experience
                    and fulfilled needs.
                  </motion.p>
                </div>
              </div>
              <AnimatedImage
                src="https://5.imimg.com/data5/SELLER/Default/2024/1/375795246/KD/JZ/EU/94492609/interior-design-turnkey-projects.jpg"
                alt="Family discussing home plans with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </AnimatedCard>

          {/* Feature 2 - Years Experience */}
          <AnimatedCard delay={0.6}>
            <div className="space-y-6 p-4">
              <div className="flex items-start space-x-4">
                <motion.span
                  className="text-4xl sm:text-5xl font-light text-gray-800"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.1,
                    color: "#a57151",
                    textShadow: "0 4px 8px rgba(165, 113, 81, 0.3)",
                  }}
                >
                  {counts.years}
                </motion.span>
                <div className="flex-1 pt-2">
                  <HoverText className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4">
                    Years experience
                  </HoverText>
                </div>
              </div>
              <AnimatedImage
                src="/stats (1).jpeg"
                alt="Real estate professionals working with documents and house models"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
              <motion.p
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  color: "#8b6f4a",
                  transition: { duration: 0.2 },
                }}
              >
                with more than 14+ years of experience, our team works
                continuously so you get desired results.
              </motion.p>
            </div>
          </AnimatedCard>

          {/* Feature 3 - Happy Customers */}
          <AnimatedCard delay={0.9}>
            <div className="space-y-6 p-4">
              <div className="flex items-start space-x-4">
                <motion.span
                  className="text-4xl sm:text-5xl font-light text-gray-800"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.1,
                    color: "#a57151",
                    textShadow: "0 4px 8px rgba(165, 113, 81, 0.3)",
                  }}
                >
                  {counts.customers}
                </motion.span>
                <div className="flex-1 pt-2">
                  <HoverText className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4">
                    Happy Customers
                  </HoverText>
                  <motion.p
                    className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    whileHover={{
                      color: "#8b6f4a",
                      transition: { duration: 0.2 },
                    }}
                  >
                    Customers are everything for us so we make sure that they
                    get what they want and go back satisfied with our results.
                  </motion.p>
                </div>
              </div>
              <AnimatedImage
                src="/stats (2).jpeg"
                alt="Happy family signing documents with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStats;
