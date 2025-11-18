// src/components/HotelCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room = {}, index = 0 }) => {
  // defensive fallbacks
  const id = room?._id ?? `room-${index}`;
  const imgSrc = Array.isArray(room?.images) && room.images.length > 0 ? room.images[0] : null;
  const hotelName = room?.hotel?.name ?? "Unknown hotel";
  const address = room?.hotel?.address ?? "Unknown location";
  const price = room?.pricePerNight ?? "—";
  const rating = room?.rating ?? room?.hotel?.rating ?? 0;

  const handleClick = () => {
    // ensure page scrolls to top after navigation
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <article
      aria-labelledby={`hotelcard-title-${id}`}
      className="relative max-w-[320px] w-full rounded-xl overflow-hidden bg-white text-gray-700/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <Link to={`/rooms/${id}`} onClick={handleClick} className="block">
        <div className="h-44 w-full bg-gray-200 overflow-hidden">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={`${hotelName} — cover`}
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>

        {index % 2 === 0 && (
          <span className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </span>
        )}

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 id={`hotelcard-title-${id}`} className="font-playfair text-xl font-medium text-gray-800">
              {hotelName}
            </h3>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              {assets?.starIconFilled && (
                <img src={assets.starIconFilled} alt="" aria-hidden="true" className="w-4 h-4" />
              )}
              <span className="ml-1">{Number(rating).toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            {assets?.locationIcon && <img src={assets.locationIcon} alt="" aria-hidden="true" className="w-4 h-4" />}
            <span className="truncate">{address}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p>
              <span className="text-xl text-gray-800 font-semibold">${price}</span>
              <span className="text-sm text-gray-600"> / night</span>
            </p>

            <button
              type="button"
              onClick={(e) => {
                // prevent Link click from double-handling navigation
                e.preventDefault();
                // go to booking/details page — keep behaviour consistent with Link above
                window.location.href = `/rooms/${id}`;
              }}
              className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer"
              aria-label={`Book ${hotelName}`}
            >
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

HotelCard.propTypes = {
  room: PropTypes.object,
  index: PropTypes.number,
};

export default HotelCard;
