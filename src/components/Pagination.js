import React from "react";

const Pagination = () => {
  return (
    <nav className="container mx-auto flex justify-between py-4">
      <a href="#" className="text-blue-500 hover:text-blue-700">
        Previous
      </a>
      <ul className="flex">
        <li>
          <a
            href="#1"
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#2"
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#3"
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#4"
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#5"
            className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700"
          >
            5
          </a>
        </li>
      </ul>
      <a href="#" className="text-blue-500 hover:text-blue-700">
        Next
      </a>
    </nav>
  );
};

export default Pagination;
