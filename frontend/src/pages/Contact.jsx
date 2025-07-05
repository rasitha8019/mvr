import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { assests } from "../assets/assests";

const Contact = () => {
  return (
    <section className="pt-20 min-h-screen px-4 bg-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 text-base md:text-lg">
          We'd love to hear from you. Reach out through any of the methods
          below.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600 text-sm">
                MVR Soft Solutions, <br />
                Hitech City, Hyderabad, Telangana, India - 500081
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-yellow-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 text-sm">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 text-sm">contact@mvrsoft.com</p>
            </div>
          </div>
        </div>

        {/* Right: Image or Map */}
        <div>
          <img
            src={assests.contact}
            alt="Map Illustration"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
