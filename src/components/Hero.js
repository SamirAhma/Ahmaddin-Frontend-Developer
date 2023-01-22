import React from "react";

const Hero = () => {
  return (
    <section className="bg-indigo-600 py-16 h-[700px] flex items-center justify-center ">
      <div className="container mx-auto text-center ">
        <h1 className="text-white text-6xl font-medium mb-4">
          Dedicated to Advancing the Exploration of Space
        </h1>
        <p className="text-white text-xl mb-8">
          Discover the latest advancements in rocket technology and space
          exploration
        </p>
        <a
          href="#about"
          className="bg-white text-rocket-blue py-3 px-8 font-medium rounded-lg hover:bg-rocket-blue hover:text-white"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
