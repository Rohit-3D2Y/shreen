import React, { useState } from "react";
import Footer from "./Footer";

const WhatsAppContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "919999999999"; // Replace with your number

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
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 pt-16">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#e5dbd0]">
          {/* Image Side */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" // use your own design image here
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 w-full p-8 sm:p-10 bg-[#fcf9f5]">
            <h2 className="text-3xl font-bold mb-6 text-[#3b2f2f] brico">
              Let's Talk Interiors
            </h2>
            <p className="mb-6 text-[#6e5c5c]">
              Share your vision with us. Fill out the form and we’ll reach out
              to you via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-[#d0c4b7] rounded-lg focus:outline-none"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-[#d0c4b7] rounded-lg focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full p-3 border border-[#d0c4b7] rounded-lg h-32 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#a57151] text-white font-semibold py-3 rounded-lg transition duration- brico"
              >
                Connect with us Now!
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhatsAppContactForm;
