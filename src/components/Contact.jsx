// Contact.jsx

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 px-6 bg-linear-to-b from-white to-orange-50">

      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="bg-orange-500 p-12 flex flex-col justify-center text-white">

            <span className="bg-white/20 w-fit px-5 py-2 rounded-full text-sm tracking-wider font-medium">
              CONTACT US
            </span>

            <h2 className="text-5xl font-bold leading-tight mt-6">
              Let's Talk About Delicious Food
            </h2>

            <p className="mt-6 text-orange-100 leading-8">
              Have questions, feedback, or want to partner with us?
              Send us a message and our team will get back to you quickly.
            </p>

            <div className="mt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
                alt="delivery"
                className="w-40"
              />
            </div>

          </div>

          {/* Right Side */}
          <div className="p-10 lg:p-12">

            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Send Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none resize-none focus:border-orange-400"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300">

                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;