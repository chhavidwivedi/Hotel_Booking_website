// src/components/Testimonial.jsx
import React from "react";
import Title from "./Title";
import StarRating from "./StarRating";
import { testimonials as testimonialsData } from "../assets/assets";

const Testimonial = () => {
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-12">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />

      <div className="flex flex-wrap items-center gap-6 mt-20 justify-center w-full">
        {testimonials.length === 0 ? (
          <p className="text-gray-500">No testimonials available right now.</p>
        ) : (
          testimonials.map((t) => (
            <article
              key={t.id ?? t.name}
              className="bg-white p-6 rounded-xl shadow max-w-sm"
              aria-labelledby={`testimonial-${t.id ?? t.name}`}
            >
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={t.image}
                    alt={t.name ?? "Guest"}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    {t.name ? t.name.charAt(0) : "G"}
                  </div>
                )}

                <div>
                  <p id={`testimonial-${t.id ?? t.name}`} className="font-playfair text-lg">
                    {t.name}
                  </p>
                  {t.address && <p className="text-gray-500 text-sm">{t.address}</p>}
                </div>
              </div>

              <div className="flex items-center gap-1 mt-4">
                <StarRating rating={Number(t.rating ?? 4)} />
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">"{t.review}"</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Testimonial;
