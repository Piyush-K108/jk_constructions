import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-gray-900 text-white py-8 w-full mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold">JK Construction</h2>
            <p className="text-sm mt-2">
              Providing reliable and strategic construction solutions.
            </p>
            <div className="flex space-x-3 mt-4">
              <FaFacebook className="text-yellow-500 cursor-pointer text-xl" />
              <FaTwitter className="text-yellow-500 cursor-pointer text-xl" />
              <FaInstagram className="text-yellow-500 cursor-pointer text-xl" />
              <FaLinkedin className="text-yellow-500 cursor-pointer text-xl" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-yellow-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>Indore, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-yellow-500" />
                <span>+91 6265667476</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-500" />
                <span>info@jk.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>
            Copyright 2024{" "}
            <span className="text-yellow-500">JK Construction</span>. All Rights
            Reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-500">
              Terms & Conditions
            </a>{" "}
            |
            <a href="#" className="hover:text-yellow-500">
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
