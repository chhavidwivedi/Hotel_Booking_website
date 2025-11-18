// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import heroImage from "../assets/heroImage.png"; // make sure this filename matches
import locationIcon from "../assets/locationIcon.svg";
import calenderIcon from "../assets/calenderIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* dark overlay so text reads well */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* central text */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md">
            The Ultimate Hotel Experience
          </p>

          <h1 className="mt-6 text-3xl md:text-5xl lg:text-[56px] font-playfair font-bold leading-tight text-white">
            Discover Your Perfect Gateway Destination
          </h1>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Unparalleled luxury and comfort await at the world’s most exclusive hotels and resorts.
          </p>
        </div>
      </div>

      {/* floating search card */}
      {isDesktop ? (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 w-[92%] max-w-5xl">
          <div className="bg-white/98 rounded-xl shadow-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="flex-1">
              <label className="sr-only">Destination</label>
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <img src={locationIcon} alt="" className="h-5 mr-2" />
                <input type="text" placeholder="Destination" className="bg-transparent outline-none w-full text-sm" />
              </div>
            </div>

            <div className="flex-1">
              <label className="sr-only">Check in</label>
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <img src={calenderIcon} alt="" className="h-5 mr-2" />
                <input type="date" className="bg-transparent outline-none w-full text-sm" />
              </div>
            </div>

            <div className="flex-1">
              <label className="sr-only">Check out</label>
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <img src={calenderIcon} alt="" className="h-5 mr-2" />
                <input type="date" className="bg-transparent outline-none w-full text-sm" />
              </div>
            </div>

            <div className="w-28">
              <label className="sr-only">Guests</label>
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg justify-center">
                <input type="number" min="1" defaultValue="1" className="bg-transparent outline-none w-12 text-sm text-center" />
              </div>
            </div>

            <div className="w-40">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-black text-white font-semibold">
                <img src={searchIcon} alt="" className="h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* mobile stacked card */
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 w-[92%] max-w-3xl">
          <div className="bg-white/98 rounded-xl shadow-2xl p-4 flex flex-col gap-3">
            <input className="px-3 py-2 rounded-md border" placeholder="Destination" />
            <div className="flex gap-2">
              <input type="date" className="flex-1 px-3 py-2 rounded-md border" />
              <input type="date" className="flex-1 px-3 py-2 rounded-md border" />
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="1" defaultValue="1" className="w-20 px-3 py-2 rounded-md border" />
              <button className="ml-auto bg-black text-white px-4 py-2 rounded-md">Search</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
