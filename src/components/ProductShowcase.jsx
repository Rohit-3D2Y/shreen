import ProductSlider from "./ProductSlider";
import { motion } from "framer-motion";
import { AnimatedText, HoverText } from "../utils/animations";

const ProductShowcase = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 text-black relative lg:pt-20">
      <div className="max-w-7xl mx-auto sm:pb-0">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <AnimatedText
            variant="slideLeft"
            className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0"
          >
            <HoverText>
              Our Interior <br /> Products
            </HoverText>
          </AnimatedText>

          <AnimatedText variant="slideRight" delay={0.3} className="max-w-md">
            <motion.p
              className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2"
              whileHover={{
                scale: 1.05,
                color: "#a85f31",
                transition: { duration: 0.2 },
              }}
            >
              Our Products
            </motion.p>
            <motion.p
              className="text-lg text-gray-700"
              whileHover={{
                scale: 1.02,
                color: "#8b6f4a",
                transition: { duration: 0.2 },
              }}
            >
              Whether you're dreaming of a cozy home retreat or a bold, modern
              workspace, our expert designers bring your vision to life.
            </motion.p>
          </AnimatedText>
        </div>
      </div>
      <AnimatedText variant="fadeIn" delay={0.5}>
        <ProductSlider />
      </AnimatedText>
    </div>
  );
};

export default ProductShowcase;
