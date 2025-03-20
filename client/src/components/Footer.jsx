import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-semibold">TravelFauget</h2>
          <p className="mt-3 text-sm">
            Your perfect travel companion for exploring the world hassle-free.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-xl">Quick Links</h3>
          <Link to="/" className="hover:text-white transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          <Link to="/travel" className="hover:text-white transition duration-300">Travel Stories</Link>
          <Link to="/exchange" className="hover:text-white transition duration-300">Currency Converter</Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} TravelFauget. All rights reserved.
      </div>
    </footer>
  );
}
