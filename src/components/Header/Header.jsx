import React from "react";

const Header = () => {
  return (
    <header
      className="bg-indigo-700 text-white py-4 sticky top-0"
      data-testid="header"
    >
      <nav className="container mx-auto flex items-center justify-between ">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
