import React from "react";
import { assests } from "../assets/assests";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top: 3-column layout */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-8 border-b border-gray-700">
          {/* Left Column: Logo + Description */}
          <div className="md:w-1/2">
            <div className="flex flex-cols gap-5">
              <img
                src={assests.logo}
                alt=""
                className="w-10 h-8 object-cover "
              />
              <h2 className="text-2xl font-bold text-white mb-4">
                MVR SOFT SOLUTIONS
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              MVR Soft Solutions is your trusted partner in software training,
              career guidance, and placement support. We blend technical
              excellence with mentorship to launch your tech journey.
            </p>
          </div>

          {/* Middle Column: Company Links */}
          <div className="md:w-1/4">
            <h3 className="text-md font-semibold text-white mb-4 uppercase">
              Follow Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-400 flex items-center gap-2"
                >
                  <FaLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-400 flex items-center gap-2"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:text-yellow-400 flex items-center gap-2"
                >
                  <FaFacebook />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:w-1/4">
            <h3 className="text-md font-semibold text-white mb-4 uppercase">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-400">📍 Hitech City, Hyderabad</p>
            <p className="text-sm text-gray-400 mt-2">📞 +91 98765 43210</p>
            <p className="text-sm text-gray-400 mt-2">✉️ contact@mvrsoft.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} MVR Soft Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
