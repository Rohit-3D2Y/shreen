import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const scrollToServices = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior

    // If we're already on the home page, scroll directly
    if (location.pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home with hash
      window.location.href = "/#services";
    }
  };

  return (
    <div className="bg-[#1E1E1E] text-[#7f5539] px-4 md:px-8 lg:px-16 pt-16 pb-8 brico -tracking-wider mt-16">
      <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          {/* <h3 className="text-2xl font-bold text-[#9c6644] mb-4">
            About Shreen Interior
          </h3> */}
          <img src="/logo.gif" alt="GIF" width="80" height="20"></img>
          
          <p className="text-md leading-relaxed mb-6">
            At Shreen Interior, we craft timeless spaces with elegance and
            functionality. Our team of design experts transforms your vision
            into stunning reality.
          </p>
          
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#9c6644] mb-4">Explore</h3>
          <ul className="space-y-3 text-md">
            <li>
              <a href="/" className="hover:text-[#ca6702] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-[#ca6702] transition">
                Features
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-[#ca6702] transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-[#ca6702] transition">
                Product
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ca6702] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-[#9c6644] mb-4">
            Contact
          </h3>
          <p className="text-md">Shreen Designs</p>
          <p className="text-md">Shop - 4B Shree Ambe Society,</p>
          <p className="text-md">Nirala Construction Rai Dongri,</p>
          <p className="text-md">Borivali East, Mumbai 400066</p>
          <p className="text-md mt-2">
            Email:{" "}
            <span className="text-[#7f5539] font-semibold">
              info@shreen.in
            </span>
          </p>
          <p className="text-md">Phone: +91 80824 66624</p>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/Shreen.designs/"
              target="_main"
              className="text-[#9c6644] hover:text-[#ca6702] transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/shreen.designs/"
              target="_main"
              className="text-[#9c6644] hover:text-[#ca6702] transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
         
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-[#9c6644] mb-4">
            Our Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.424805555556!2d72.86095997496998!3d19.226364981999856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEzJzM1LjEiTiA3MsKwNTEnNDYuNyJF!5e0!3m2!1sen!2sin!4v1735380000000!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#b08968] pt-4 text-center text-md text-[#7f5539]">
        © {new Date().getFullYear()} Shreen Interior. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
