// src/components/HotelReg.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/assets"; // adjust path if needed
import { cities as citiesList } from "../assets/assets"; // optional export from your assets (array of city names)

const HotelReg = ({ onClose, onSubmit }) => {
  // local visibility fallback if parent doesn't control modal
  const [visible, setVisible] = useState(true);

  const a = assets ?? {};
  const cities = Array.isArray(citiesList) ? citiesList : ["Delhi", "Mumbai", "Bengaluru", "Chennai"];

  if (!visible) return null;

  const handleClose = () => {
    if (typeof onClose === "function") onClose();
    else setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: form.name?.value?.trim(),
      phone: form.contact?.value?.trim(),
      address: form.address?.value?.trim(),
      city: form.city?.value,
    };

    // basic validation
    if (!payload.name || !payload.phone || !payload.address || !payload.city) {
      return alert("Please fill all required fields.");
    }

    if (typeof onSubmit === "function") {
      onSubmit(payload);
    } else {
      // fallback behavior: log + close modal
      console.log("Hotel registration:", payload);
      alert("Hotel registered (demo). Check console for payload.");
      setVisible(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="hotel-reg-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden"
      >
        {/* Left image — hidden on small screens */}
        {a?.regImage ? (
          <img
            src={a.regImage}
            alt=""
            aria-hidden="true"
            className="hidden md:block w-1/2 object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <div className="hidden md:block w-1/2 bg-gray-100" />
        )}

        {/* Form area */}
        <div className="relative flex flex-col w-full md:w-1/2 p-6 md:p-10">
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close registration form"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          >
            {a?.closeIcon ? (
              <img src={a.closeIcon} alt="" className="h-4 w-4" onError={(e) => (e.currentTarget.style.display = "none")} />
            ) : (
              <span className="text-xl leading-none">✕</span>
            )}
          </button>

          <h2 id="hotel-reg-title" className="text-2xl font-semibold mt-6">
            Register Your Hotel
          </h2>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-600 text-sm">
              Hotel Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2 mt-1 outline-indigo-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-600 text-sm">
              Phone
            </label>
            <input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2 mt-1 outline-indigo-500"
              required
            />
          </div>

          {/* Address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-600 text-sm">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2 mt-1 outline-indigo-500"
              required
            />
          </div>

          {/* City select */}
          <div className="w-full mt-4 max-w-xs">
            <label htmlFor="city" className="font-medium text-gray-600 text-sm">
              City
            </label>
            <select
              id="city"
              name="city"
              className="border border-gray-200 rounded w-full px-3 py-2 mt-1 outline-indigo-500"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-6 py-2 rounded"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

HotelReg.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default HotelReg;
