import React from "react";

const About = () => {
  return (
    <div className="pt-28 px-6 md:px-20 lg:px-32">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          About QuickStay
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          QuickStay is a modern hotel booking platform designed to provide
          seamless travel experiences. We connect travelers with the best stays,
          ensuring comfort, convenience, and unforgettable memories.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="hotel"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to simplify hotel bookings by providing a user-friendly
            platform where travelers can discover the perfect accommodations with
            ease.
          </p>
          <p className="text-gray-600">
            We aim to deliver exceptional customer experiences through innovative
            technology and reliable services.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
        <div className="p-6 shadow rounded-xl">
          <h3 className="text-3xl font-bold">10K+</h3>
          <p className="text-gray-500">Happy Users</p>
        </div>
        <div className="p-6 shadow rounded-xl">
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-500">Hotels Listed</p>
        </div>
        <div className="p-6 shadow rounded-xl">
          <h3 className="text-3xl font-bold">120+</h3>
          <p className="text-gray-500">Cities</p>
        </div>
        <div className="p-6 shadow rounded-xl">
          <h3 className="text-3xl font-bold">4.8★</h3>
          <p className="text-gray-500">User Rating</p>
        </div>
      </div>

    </div>
  );
};

export default About;