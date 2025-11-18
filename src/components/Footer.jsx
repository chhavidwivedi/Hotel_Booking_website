// src/components/Footer.jsx
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const a = assets ?? {};
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements?.email?.value?.trim();
    if (!email) {
      // replace with nicer UI/Toast in your app
      return alert("Please enter a valid email address.");
    }
    // TODO: wire up to your newsletter API
    alert(`Subscribed: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-[#F6F9FC] text-gray-600/90 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-xs">
          {a.logo ? (
            <img
              src={a.logo}
              alt="GreatStack logo"
              className="mb-4 h-8 md:h-9 invert opacity-80"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : (
            <div className="mb-4 text-lg font-semibold">GreatStack</div>
          )}

          <p className="text-sm text-gray-600">
            Handpicked stays and tailored experiences — discover your next getaway.
          </p>

          <div className="flex items-center gap-3 mt-4">
            {a.instagramIcon && <img src={a.instagramIcon} alt="Instagram" className="w-6" />}
            {a.facebookIcon && <img src={a.facebookIcon} alt="Facebook" className="w-6" />}
            {a.twitterIcon && <img src={a.twitterIcon} alt="Twitter" className="w-6" />}
            {a.linkedinIcon && <img src={a.linkedinIcon} alt="LinkedIn" className="w-6" />}
          </div>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
          </ul>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Safety Information</a></li>
            <li><a href="#" className="hover:underline">Cancellation Options</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>

        <div className="max-w-xs">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm text-gray-600">
            Subscribe to our newsletter for inspiration and special offers.
          </p>

          <form onSubmit={handleSubscribe} className="flex items-center mt-4" aria-label="Subscribe to newsletter">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r"
            >
              {a.arrowIcon ? (
                <img src={a.arrowIcon} alt="" className="w-3.5 invert" aria-hidden="true" />
              ) : (
                <span className="text-white text-sm">→</span>
              )}
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm">
        <p>© {year} GreatStack. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Terms</a></li>
          <li><a href="#" className="hover:underline">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
