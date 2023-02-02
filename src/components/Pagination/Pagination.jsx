import React from "react";
import { useContext } from "react";
import { CapsulesContext } from "../../CapsuleContext";
const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage, fetchCapsules } =
    useContext(CapsulesContext);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // fetchCapsules(page);
  };

  return (
    <div className="bg-[#679bee] h-full" data-testid="pagination">
      <nav className="container mx-auto flex justify-between py-4 bg-[#679bee]">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg ${
            currentPage === 1 ? "opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <div className="flex justify-center ">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg mx-2 ${
                currentPage === i + 1 ? "" : "opacity-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
