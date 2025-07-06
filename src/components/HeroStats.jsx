import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const HeroStats = () => {
  const [counts, setCounts] = useState({ projects: 0, years: 0, customers: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Counter animation effect - only when in view
  useEffect(() => {
    if (isInView) {
      const targets = { projects: 50, years: 8, customers: 150 };
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
          <motion.h2
            className="-tracking-wider brico text-6xl text-left"
            variants={headerVariants}
          >
            Designing Spaces, <br />
            Defining Styles
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1 - Projects Completed */}
          <motion.div
            className="space-y-6"
            custom={0}
            variants={featureVariants}
          >
            <div className="flex items-start space-x-4">
              <motion.span
                className="text-4xl sm:text-5xl font-light text-gray-800"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                {counts.projects}+
              </motion.span>
              <div className="flex-1 pt-2">
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4"
                  whileHover={{ color: "#7f5539" }}
                  transition={{ duration: 0.3 }}
                >
                  Projects Completed
                </motion.h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  We completed more than 40+ projects with seamless experience
                  and fulfilled needs.
                </p>
              </div>
            </div>
            <motion.div
              className="mt-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src="https://5.imimg.com/data5/SELLER/Default/2024/1/375795246/KD/JZ/EU/94492609/interior-design-turnkey-projects.jpg"
                alt="Family discussing home plans with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Feature 2 - Years Experience */}
          <motion.div
            className="space-y-6"
            custom={1}
            variants={featureVariants}
          >
            <div className="flex items-start space-x-4">
              <motion.span
                className="text-4xl sm:text-5xl font-light text-gray-800"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                {counts.years}
              </motion.span>
              <div className="flex-1 pt-2">
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4"
                  whileHover={{ color: "#7f5539" }}
                  transition={{ duration: 0.3 }}
                >
                  Years experience
                </motion.h3>
              </div>
            </div>
            <motion.div
              className="mb-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src="https://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2021/03/Surprising-Mumbai-Interior-Design-Projects-VRATIKA.jpg"
                alt="Real estate professionals working with documents and house models"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
            <motion.p
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              with more than 14+ years of experience, our team works
              continuously so you get desired results.
            </motion.p>
          </motion.div>

          {/* Feature 3 - Happy Customers */}
          <motion.div
            className="space-y-6"
            custom={2}
            variants={featureVariants}
          >
            <div className="flex items-start space-x-4">
              <motion.span
                className="text-4xl sm:text-5xl font-light text-gray-800"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              >
                {counts.customers}
              </motion.span>
              <div className="flex-1 pt-2">
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4"
                  whileHover={{ color: "#7f5539" }}
                  transition={{ duration: 0.3 }}
                >
                  Happy Customers
                </motion.h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Customers are everything for us so we make sure that they get
                  what they want and go back satisfied with our results.
                </p>
              </div>
            </div>
            <motion.div
              className="mt-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src="https://images.adsttc.com/media/images/634e/5c9b/eb99/d038/7eb2/b3a7/newsletter/interior-focus-curves_8.jpg?1666079905"
                alt="Happy family signing documents with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStats;
