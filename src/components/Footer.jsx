// Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer  className="w-full bg-gray-950 text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>

          <h2 className="text-4xl font-bold text-orange-500 mb-5">
            Foodie
          </h2>

          <p className="text-gray-400 leading-7">
            Delicious meals delivered fast to your doorstep.
            Fresh ingredients, premium taste, and quick delivery service.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">

            <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <FaYoutube />
            </div>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              <a href="#home">Home</a>
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              <a href="#menu">Menu</a>
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
             <a href="#about">About</a>
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Services
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              Fast Delivery
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              Online Order
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              24/7 Service
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-all">
              Fresh Food
            </li>

          </ul>

        </div>

        {/* Newsletter */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Newsletter
          </h3>

          <p className="text-gray-400 leading-7 mb-6">
            Subscribe to get latest offers and food updates.
          </p>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <button className="bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold transition-all duration-300">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">

        <p>
          © 2026 Foodie. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;