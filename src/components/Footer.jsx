import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] text-[#7f5539] px-4 md:px-8 lg:px-16 pt-16 pb-8 brico -tracking-wider mt-16">
      <footer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#9c6644] mb-4">About Shreen Interior</h3>
          <p className="text-md leading-relaxed mb-6">
            At Shreen Interior, we craft timeless spaces with elegance and functionality. Our team of design experts transforms your vision into stunning reality.
          </p>
          <form className="flex items-center border border-[#b08968] rounded-lg overflow-hidden w-full max-w-sm bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-[#b08968] text-white px-3 hover:bg-[#9c6644] transition rounded-lg mr-2"
            >
              Subscribe
            </button>
          </form>
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
              <a href="#about" className="hover:text-[#ca6702] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#ca6702] transition">
                Services
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-[#ca6702] transition">
                Product
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ca6702] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-[#9c6644] mb-4">Contact</h3>
          <p className="text-md">Shreen Interior Studio</p>
          <p className="text-md">123 Design Lane, Elegant City, India</p>
          <p className="text-md mt-2">Email: <span className="text-[#7f5539] font-semibold">info@shreeninterior.com</span></p>
          <p className="text-md">Phone: +91 98765 43210</p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-[#9c6644] hover:text-[#ca6702] transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#9c6644] hover:text-[#ca6702] transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#9c6644] hover:text-[#ca6702] transition">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
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
