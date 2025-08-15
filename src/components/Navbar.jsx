import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  // Your WhatsApp number here in international format (e.g., 91 for India)
  const whatsappURL = `https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20work`;

  return (
    <nav className="w-full bg-[#eae5df] shadow-md z-50 brico -tracking-wider sticky top-0">
      <div
        className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center text-black font-medium
      "
      >
        {/* <video className="w-44 h-10" loop muted autoPlay >
          <source src="/logo.gif" type="video/mp4"/>
        </video> */}
        <a href="/">
          <img src="/logo.gif" alt="GIF" width="80" height="20"></img>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>
          <a href="/features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="/gallery" className="hover:text-yellow-500">
            Gallery
          </a>
          <a href="/contact" className="hover:text-yellow-500">
            Contact Us
          </a>
          <a href="/product" className="hover:text-yellow-500">
            Products
          </a>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition"
          >
            Connect
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="w-full bg-white flex flex-col items-center gap-4 py-6 text-black md:hidden shadow-md"
        >
          <a href="/features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="/gallery" className="hover:text-yellow-500">
            Gallery
          </a>
          <a href="/contact" className="hover:text-yellow-500">
            Contact Us
          </a>
          <Link to="/product" className="hover:text-yellow-500">
            Products
          </Link>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
