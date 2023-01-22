import React from "react";
import rocket from "../assets/rocket.jpg";
const Grids = () => {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-medium mb-4">
          Our Fleet of Rockets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card flex flex-col">
            <img src={rocket} alt="Rocket 1" className="w-full" />
            <h3 className="text-white text-xl font-medium mt-4">Rocket 1</h3>
          </div>
          <div className="card flex flex-col">
            <img src={rocket} alt="Rocket 2" className="w-full" />
            <h3 className="text-white text-xl font-medium mt-4">Rocket 2</h3>
          </div>
          <div className="card flex flex-col">
            <img src={rocket} alt="Rocket 3" className="w-full" />
            <h3 className="text-white text-xl font-medium mt-4">Rocket 3</h3>
          </div>
          <div className="card flex flex-col">
            <img src={rocket} alt="Rocket 4" className="w-full" />
            <h3 className="text-white text-xl font-medium mt-4">Rocket 4</h3>
          </div>
          <div className="card flex flex-col">
            <img src={rocket} alt="Rocket 5" className="w-full" />
            <h3 className="text-white text-xl font-medium mt-4">Rocket 5</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grids;
