// src/components/Title.jsx
import React from "react";

const Title = ({ title, subTitle, align = "center", font = "font-playfair" }) => {
  const alignmentClass =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignmentClass}`}>
      <h1 className={`text-4xl md:text-[40px] font-bold ${font}`}>
        {title}
      </h1>

      {subTitle && (
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[500px]">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
