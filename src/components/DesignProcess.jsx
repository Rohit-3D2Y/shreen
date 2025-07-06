import React from "react";
import { Pencil, LayoutDashboard, Sofa, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We discuss your needs, preferences, lifestyle, and vision for the space.",
    icon: <Pencil className="w-12 h-12" />,
  },
  {
    id: 2,
    title: "Conceptualization",
    description:
      "We create design ideas, mood boards, and layouts to match your style.",
    icon: <LayoutDashboard className="w-12 h-12" />,
  },
  {
    id: 3,
    title: "Planning",
    description:
      "We finalize materials, finishes, furniture, and develop timelines for your project.",
    icon: <Sofa className="w-12 h-12" />,
  },
  {
    id: 4,
    title: "Execution",
    description:
      "We manage installation and oversee construction to bring your design to life.",
    icon: <Hammer className="w-12 h-12" />,
  },
];

const DesignProcess = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.h2
            className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Design <br /> Process
          </motion.h2>
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <p className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2">
              Process
            </p>
            <p className="text-lg text-gray-700">
              Discover how our thoughtful process transforms ideas into
              personalized, functional, and beautifully styled spaces.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-12">
          {/* Connecting Line - Desktop only */}
          <motion.div
            className="hidden md:block absolute top-20 left-0 right-0 h-[2px] bg-[#a57151] z-0 mx-20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
            style={{ transformOrigin: "left" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8 + index * 0.2,
              }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-[#a57151] text-white rounded-full w-40 h-40 flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "#7f5539",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold"
                  whileHover={{
                    scale: 1.25,
                    backgroundColor: "#7f5539",
                    transition: { duration: 0.3 },
                  }}
                >
                  {step.id}.
                </motion.div>
              </motion.div>
              <motion.h3
                className="mt-6 text-lg font-semibold"
                whileHover={{ color: "#a57151" }}
                transition={{ duration: 0.3 }}
              >
                {step.title}
              </motion.h3>
              <p className="mt-2 text-lg text-gray-600 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
