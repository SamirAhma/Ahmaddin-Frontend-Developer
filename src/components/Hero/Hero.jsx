import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-indigo-600 py-16 h-screen flex items-center justify-center "
      data-testid="hero"
    >
      <div className="container mx-auto text-center ">
        <h1 className="text-white text-5xl md:text-6xl font-medium mb-4 mx-4">
          Dedicated to Advancing the Exploration of Space
        </h1>
        <p className="text-white text-md md:text-xl mb-8 mx-4">
          Discover the latest advancements in rocket technology and space
          exploration
        </p>
        <a
          href="#about"
          className="bg-white text-rocket-blue py-3 px-8 font-medium rounded-lg hover:bg-indigo-300 hover:text-white"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
