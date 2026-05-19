
// About.jsx

import React from "react";
import { FaUtensils, FaTruck, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side Images */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
            className="w-full h-125 object-cover rounded-[35px] shadow-xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4">

            <div className="bg-orange-100 p-4 rounded-full text-orange-500 text-2xl">
              <FaStar />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                4.9 Rating
              </h3>

              <p className="text-gray-500 text-sm">
                Trusted by 10k+ Customers
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Content */}
        <div>

          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            ABOUT US
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
            We Deliver Fresh & Tasty Food Straight To Your Door
          </h2>

          <p className="text-gray-500 leading-8 mt-6 text-lg">
            Our mission is to provide high-quality meals with fast delivery
            service and unforgettable taste. We connect food lovers with
            the best restaurants in town.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            <div className="bg-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-orange-500 text-2xl mb-4">
                <FaUtensils />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Food
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                Fresh ingredients and premium recipes prepared daily.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-orange-500 text-2xl mb-4">
                <FaTruck />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fast Delivery
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                Lightning-fast delivery to your home in minutes.
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-orange-200">
            Explore More
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;