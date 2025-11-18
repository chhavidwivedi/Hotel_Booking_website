// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";

const Safe = ({ children, name }) => {
  // simple safety wrapper so a broken child doesn't unmount the whole page
  try {
    if (!children) return null;
    return children;
  } catch (e) {
    // show a small fallback instead of crashing the whole app
    // eslint-disable-next-line no-console
    console.error(`Error rendering ${name}:`, e);
    return (
      <div role="alert" className="p-6 bg-red-50 text-red-700 rounded">
        Something went wrong loading {name}.
      </div>
    );
  }
};

const Home = () => {
  // ensure we're at top when landing on home
  React.useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Safe name="Hero">
        <Hero />
      </Safe>

      <Safe name="FeaturedDestination">
        <FeaturedDestination />
      </Safe>

      <Safe name="ExclusiveOffers">
        <ExclusiveOffers />
      </Safe>

      <Safe name="Testimonial">
        <Testimonial />
      </Safe>

      <Safe name="NewsLetter">
        <NewsLetter />
      </Safe>
    </main>
  );
};

export default Home;
