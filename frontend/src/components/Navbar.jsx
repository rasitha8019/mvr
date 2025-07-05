import { useState } from "react";
import { assests } from "../assets/assests";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md  w-full left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6  flex items-center justify-between">
        {/* Logo and Title */}
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <img
              src={assests.logo}
              alt="Logo"
              className="w-10 h-10 object-cover "
            />

            <h1 className="text-xl font-bold text-gray-800">
              MVR SOFT SOLUTIONS
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>
          <NavLink to="/courses" className="hover:text-blue-600 transition">
            Courses
          </NavLink>
          <NavLink to="/facilities" className="hover:text-blue-600 transition">
            Facilities
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-600 transition">
            Contact Us
          </NavLink>

          <NavLink to="/aboutus" className="hover:text-blue-600 transition">
            About Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none text-xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow-md">
          <NavLink to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className="block text-gray-700 hover:text-blue-600"
          >
            Courses
          </NavLink>
          <NavLink
            to="/facilities"
            className="block text-gray-700 hover:text-blue-600"
          >
            Facilities
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/aboutus"
            className="block text-gray-700 hover:text-blue-600"
          >
            About Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
