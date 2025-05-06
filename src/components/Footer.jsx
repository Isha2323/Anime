import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500   text-white py-8 mt-auto"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          {/* Footer Left */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold mb-2">MyAnimeSite</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MyAnimeSite. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">Contact:+91 11111 11111</p>
            <p className="text-sm text-gray-400">Email:abc@email.com</p>
          </div>

          {/* Footer Right - Social Media Icons */}
          <div className="flex space-x-6 justify-center">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Github */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
