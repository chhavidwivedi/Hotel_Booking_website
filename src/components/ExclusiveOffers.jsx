// src/components/ExclusiveOffers.jsx
import React from "react";
import Title from "./Title"; // adjust path if different
import { assets } from "../assets/assets"; // adjust path if needed
import { exclusiveOffers } from "../assets/offers"; // your data source

const ExclusiveOffers = () => {
  const offers = Array.isArray(exclusiveOffers) ? exclusiveOffers : [];

  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />

        <button
          type="button"
          className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12"
          aria-label="View all offers"
        >
          View All Offers
          <img
            src={assets?.arrowIcon ?? ""}
            alt=""
            aria-hidden="true"
            className="ml-1 transition-transform group-hover:translate-x-1"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {offers.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No offers available.</p>
        ) : (
          offers.map((item) => {
            const bg = item?.image ? `url(${item.image})` : undefined;
            return (
              <article
                key={item._id ?? item.title}
                className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-6 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center min-h-[220px]"
                style={bg ? { backgroundImage: bg } : { backgroundColor: "#374151" }}
                aria-labelledby={`offer-${item._id ?? item.title}`}
              >
                {typeof item.priceOff === "number" && (
                  <span className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
                    {item.priceOff}% OFF
                  </span>
                )}

                <div id={`offer-${item._id ?? item.title}`} className="z-10">
                  <p className="text-2xl font-medium font-playfair">{item.title}</p>
                  <p className="mt-1">{item.description}</p>
                  {item.expiryDate && (
                    <p className="text-xs text-white/80 mt-3">Expires {item.expiryDate}</p>
                  )}
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 z-10"
                  aria-label={`View offer ${item.title}`}
                >
                  View Offer
                  <img
                    className="ml-1 transition-transform group-hover:translate-x-1 invert"
                    src={assets?.arrowIcon ?? ""}
                    alt=""
                    aria-hidden="true"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </button>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ExclusiveOffers;
