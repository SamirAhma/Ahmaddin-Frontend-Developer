import React from "react";
import { useContext } from "react";
import { CapsulesContext } from "../CapsuleContext";
const Pagination = () => {
  const { totalPages, page, setPage } = useContext(CapsulesContext);
  return (
    <nav className="container mx-auto flex justify-between py-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="text-blue-500 hover:text-blue-700"
      >
        Previous
      </button>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === 3}
        className="text-blue-500 hover:text-blue-700"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
