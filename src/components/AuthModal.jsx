import React, { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-100 rounded-2xl p-8 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="border p-3 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded"
          />

          <button className="bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* Switch */}
        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 cursor-pointer font-medium"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default AuthModal;