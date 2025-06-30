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

  return (
    <nav className="w-full bg-[#eae5df] shadow-md z-50 brico -tracking-wider">
      <div className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center text-black font-medium">
        <a href="/" className="text-3xl font-bold">Shreen Interiors</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="/features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="#about-us" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="#services" className="hover:text-yellow-500">
            Services
          </a>
          <a href="/product" className="hover:text-yellow-500">
            Products
          </a>
          <button className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
            Connect
          </button>
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
          <a href="#features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="#about-us" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="#services" className="hover:text-yellow-500">
            Services
          </a>
          <Link to="/product" className="hover:text-yellow-500">
            Products
          </Link>
          <button className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
            Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
