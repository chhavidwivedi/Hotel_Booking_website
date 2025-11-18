import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  const filled = assets?.starIconFilled;
  const outlined = assets?.starIconOutlined;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = rating > index;

        return (
          <img
            key={index}
            src={isFilled ? filled : outlined}
            alt={isFilled ? "filled star" : "empty star"}
            className="w-4 h-4"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
