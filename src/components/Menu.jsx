// Menu.jsx

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import menuData from "./menuData";

const Menu = () => {
  return (
    <section id="menu" className="w-full bg-linear-to-b from-white to-orange-50 py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
          Special Menu
        </span>

        <h2 className="text-5xl font-bold text-gray-900 mt-5">
          Delicious Food Collection
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
          Discover premium quality meals prepared with fresh ingredients and
          delivered hot & fast to your doorstep.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Category */}
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold text-orange-500 hover:bg-orange-500 hover:text-white">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Rating & Time */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-yellow-500">
                  <FaStar />
                  <span className="text-gray-700 font-medium">
                    {item.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock />
                  <span>{item.deliveryTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-7 text-sm mb-6">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-orange-500">
                  {item.price}
                </span>

                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition-all duration-300">
                  <BsCartPlus />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
