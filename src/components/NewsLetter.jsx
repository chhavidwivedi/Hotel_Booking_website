// src/components/NewsLetter.jsx
import React from "react";
import Title from "./Title"; // adjust path if needed
import { assets } from "../assets/assets"; // adjust path if needed

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) return alert("Please enter a valid email!");
    alert(`Subscribed: ${email}`);
    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-20 bg-gray-900 text-white">
      
      <Title
        title="Stay inspired"
        subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
      />

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full"
      >
        <input
          type="email"
          name="email"
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full md:max-w-sm backdrop-blur-sm"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 group bg-black px-6 py-2.5 rounded active:scale-95 transition-all"
        >
          Subscribe
          <img
            src={assets?.arrowIcon}
            alt=""
            className="w-3.5 invert group-hover:translate-x-1 transition-all"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </button>
      </form>

      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default NewsLetter;
