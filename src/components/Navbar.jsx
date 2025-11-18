// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

/* Small inline icon */
const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  // make nav paths unique to avoid duplicate-key warnings
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Call hooks normally
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // update isScrolled when location changes and on scroll
  useEffect(() => {
    setIsScrolled(location?.pathname && location.pathname !== "/");

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location?.pathname]);

  const logoClass = `h-9 ${isScrolled ? "invert opacity-80" : ""}`;
  const iconInvertClass = isScrolled ? "invert" : "";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link to="/" aria-label="Homepage" className="flex items-center">
        {assets?.logo ? (
          <img
            src={assets.logo}
            alt="logo"
            className={logoClass}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <span className={`font-semibold text-lg ${isScrolled ? "text-gray-800" : "text-white"}`}>GreatStack</span>
        )}
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={`${link.path}-${i}`} // stable unique key
            to={link.path}
            className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            <span>{link.name}</span>
            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
          </Link>
        ))}

        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => navigate("/owner")}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop right */}
      <div className="hidden md:flex items-center gap-4">
        {assets?.searchIcon ? (
          <img
            src={assets.searchIcon}
            alt=""
            className={`${iconInvertClass} h-7 transition-all duration-500`}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : null}

        {user ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => (typeof openSignIn === "function" ? openSignIn() : navigate("/sign-in"))}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile menu toggle */}
      <div className="flex items-center gap-3 md:hidden">
        {user ? (
          <div>
            <UserButton />
          </div>
        ) : null}

        <button onClick={() => setIsMenuOpen((s) => !s)} aria-label="Open mobile menu" className="p-1">
          {assets?.menuIcon ? (
            <img src={assets.menuIcon} alt="" className={`${iconInvertClass} h-4`} onError={(e) => (e.currentTarget.style.display = "none")} />
          ) : (
            <svg className={`${iconInvertClass} h-4 w-4`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal={isMenuOpen}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
          {assets?.closeIcon ? (
            <img src={assets.closeIcon} alt="" className="h-6" onError={(e) => (e.currentTarget.style.display = "none")} />
          ) : (
            <span className="text-2xl">×</span>
          )}
        </button>

        {navLinks.map((link, i) => (
          <Link key={`mobile-${link.path}-${i}`} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg">
            {link.name}
          </Link>
        ))}

        <div className="flex flex-col items-center gap-4">
          {user ? (
            <button
              className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/owner");
              }}
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                typeof openSignIn === "function" ? openSignIn() : navigate("/sign-in");
              }}
              className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
