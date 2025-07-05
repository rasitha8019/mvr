import React from "react";
import { assests } from "../assets/assests";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  to={
                    "https://www.linkedin.com/in/mvr-soft-solutions-497114373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                  className="hover:text-yellow-400 flex items-center gap-2"
                >
                  <FaLinkedin />
                  Linkedin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={
                    "https://www.instagram.com/mvrsoftsolutions?utm_source=qr&igsh=MXM0dzVhbzkxNXpvbw=="
                  }
                  className="hover:text-yellow-400 flex items-center gap-2"
                >
                  <FaInstagram />
                  Instagram
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:w-1/4">
            <h3 className="text-md font-semibold text-white mb-4 uppercase">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-400">
              📍 MVR Soft Solutions, <br />
              5-21, road no 8, VR Colony, Gokul Plots, 9th phase KPHB,
              Hyderabad, 500085{" "}
            </p>
            <p className="text-sm text-gray-400 mt-2">📞 +91 8179721555</p>
            <p className="text-sm text-gray-400 mt-2">
              ✉️ hrmvrsoftsolutions@gmail.com
            </p>
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
