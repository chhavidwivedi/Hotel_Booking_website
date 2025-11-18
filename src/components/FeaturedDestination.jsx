// src/components/FeaturedDestination.jsx
import React, { memo } from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedDestination = ({ count = 4, title = "Featured Destination", subTitle }) => {
  const navigate = useNavigate();
  const rooms = Array.isArray(roomsDummyData) ? roomsDummyData.slice(0, Math.max(0, count)) : [];

  const handleViewAll = () => {
    navigate("/rooms");
    // ensure top of page after navigation
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-labelledby="featured-destinations-heading"
      className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20"
    >
      <Title
        id="featured-destinations-heading"
        title={title}
        subTitle={
          subTitle ??
          "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        }
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 w-full">
        {rooms.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No rooms available.</p>
        ) : (
          rooms.map((room, index) => (
            <HotelCard key={room?._id ?? index} room={room} index={index} />
          ))
        )}
      </div>

      <button
        type="button"
        onClick={handleViewAll}
        aria-label="View all destinations"
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </section>
  );
};

FeaturedDestination.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default memo(FeaturedDestination);
