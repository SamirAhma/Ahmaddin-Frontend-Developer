import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white py-12">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-medium">
          Rocket Website
        </a>
        <ul className="flex">
          <li>
            <a
              href="#about"
              className="px-4 py-2 font-medium text-white hover:text-indigo-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#rockets"
              className="px-4 py-2 font-medium text-white hover:text-indigo-200"
            >
              Rockets
            </a>
          </li>
          <li>
            <a
              href="#launches"
              className="px-4 py-2 font-medium text-white hover:text-indigo-200"
            >
              Launches
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 font-medium text-white hover:text-indigo-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="container mx-auto text-center text-4xl font-medium my-4">
        Exploring the Final Frontier
      </h1>
    </header>
  );
};

export default Header;
