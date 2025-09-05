import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const WhatsAppContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "918082466624"; // Replace with your number

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const finalMessage = `New Contact Query:\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center px-4 pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#e5dbd0]"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          {/* Image Side */}
          <motion.div
            className="md:w-1/2 w-full overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Interior Design"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
            />
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="md:w-1/2 w-full p-8 sm:p-10 bg-[#fcf9f5]"
            variants={formVariants}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-[#3b2f2f] brico"
              variants={fieldVariants}
              whileHover={{
                color: "#a57151",
                transition: { duration: 0.3 },
              }}
            >
              Let's Talk Interiors
            </motion.h2>

            <motion.p className="mb-6 text-[#6e5c5c]" variants={fieldVariants}>
              Share your vision with us. Fill out the form and we'll reach out
              to you via WhatsApp.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={formVariants}
            >
              <motion.input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-[#d0c4b7] rounded-lg focus:outline-none focus:border-[#a57151] focus:ring-2 focus:ring-[#a57151]/20 transition-all"
                required
                variants={fieldVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(165, 113, 81, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />

              <motion.input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-[#d0c4b7] rounded-lg focus:outline-none focus:border-[#a57151] focus:ring-2 focus:ring-[#a57151]/20 transition-all"
                required
                variants={fieldVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(165, 113, 81, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />

              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full p-3 border border-[#d0c4b7] rounded-lg h-32 focus:outline-none focus:border-[#a57151] focus:ring-2 focus:ring-[#a57151]/20 transition-all resize-none"
                required
                variants={fieldVariants}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(165, 113, 81, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />

              <motion.button
                type="submit"
                className="w-full bg-[#a57151] text-white font-semibold py-3 rounded-lg transition-all brico"
                variants={fieldVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#7f5539",
                  boxShadow: "0 8px 25px rgba(165, 113, 81, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.span
                  whileHover={{
                    display: "inline-block",
                    x: [0, 5, 0],
                    transition: { duration: 0.6, repeat: Infinity },
                  }}
                >
                  Connect with us Now!
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default WhatsAppContactForm;
