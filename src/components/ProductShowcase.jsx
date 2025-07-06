import React from "react";
import ProductSlider from "./ProductSlider";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 text-black relative">
      <div className="max-w-7xl mx-auto sm:pb-0">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.h2
            className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Interior <br /> Products
          </motion.h2>
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <p className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2">
              Our Products
            </p>
            <p className="text-lg text-gray-700">
              Whether you're dreaming of a cozy home retreat or a bold, modern
              workspace, our expert designers bring your vision to life.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <ProductSlider />
      </motion.div>
    </div>
  );
};

export default ProductShowcase;
