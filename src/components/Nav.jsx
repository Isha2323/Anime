import React, { useState } from "react";

import "../index.css";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-extrabold tracking-wider">
          AnimeWorld
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#InfoCards"
            className="text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Characters
          </a>
          <a
            href="#"
            className="text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Series
          </a>
          <a
            href="#Footer"
            className="text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 px-4 pt-4 pb-6 space-y-3">
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Characters
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Series
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
