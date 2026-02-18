import React from "react";

const experiences = [
  {
    title: "Luxury Resorts",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    desc: "Experience world-class luxury with premium resorts and top-tier services."
  },
  {
    title: "City Hotels",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    desc: "Stay in the heart of major cities with easy access to attractions."
  },
  {
    title: "Beachside Stays",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
    desc: "Relax with stunning ocean views and peaceful beach environments."
  },
];

const Experience = () => {
  return (
    <div className="pt-28 px-6 md:px-20 lg:px-32">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Explore Experiences
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover unique stays and unforgettable travel experiences tailored to
          your preferences.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;
