import React, { useState } from "react";
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">Anime</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300 transition">
              About
            </a>
            <a href="#services" className="hover:text-gray-300 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-300">
            About
          </a>
          <a href="#services" className="block hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="block hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
