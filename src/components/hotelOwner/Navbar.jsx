import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  // defensive fallback if assets.logo is missing
  const logoSrc = assets?.logo ?? "";

  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300"
    >
      <Link to="/" aria-label="Homepage" className="flex items-center">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="Site logo"
            className="h-9 invert opacity-80"
            onError={(e) => {
              // if image fails to load, hide it so alt text is visible for screen readers
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          // text fallback (visible) when no logo provided
          <span className="text-lg font-semibold">MyHotel</span>
        )}
      </Link>

      {/* UserButton must be used inside a ClerkProvider (see notes below) */}
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
