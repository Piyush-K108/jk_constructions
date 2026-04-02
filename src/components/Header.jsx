import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/DarkLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

// Framer Motion Animation Variants
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between py-3 px-5 md:px-8">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="JK Construction" className="w-[160px] h-auto" />
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-yellow-500 font-oswald text-[17px] font-normal"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-yellow-500 font-oswald text-[17px] font-normal"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-yellow-500 font-oswald text-[17px] font-normal"
            >
              Projects
            </Link>
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-[#FFC201] text-white px-6 py-2 rounded-lg transition duration-300 font-oswald text-[17px] font-normal hover:bg-[#1E1E1ECC]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg flex flex-col items-center p-6 z-50"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Mobile Links */}
            <nav className="mt-12 flex flex-col space-y-6 text-lg text-gray-700">
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                About
              </Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                Projects
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
