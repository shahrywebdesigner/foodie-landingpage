import React, { useEffect, useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandle);

    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);

  return (
    <>
      <div
        className={`bg-white z-40 w-full shadow-2xl transition-all duration-300 ${
          sticky ? "top-0 sticky" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="text-orange-600 text-2xl font-bold cursor-pointer">
            Foodie
          </div>

          <nav>
            <ul className="flex items-center gap-4">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <button
              onClick={() => setShowAuth(true)}
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded"
            >
              Sign In
            </button>

            <button
              onClick={() => setShowAuth(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* AUTH MODAL */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;