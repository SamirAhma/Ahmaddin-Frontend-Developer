import React, { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search action with searchTerm, status, originalLaunch and type as parameters
  };

  return (
    <section className=" flex items-center justify-between bg-indigo-500">
      <form
        className="container mx-auto p-4 rounded-lg flex justify-between w-full items-center "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-medium mb-4">Search Our Rockets</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Search Term
          </label>
          <input
            type="text"
            className="border border-gray-400 p-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <select
            className="border border-gray-400 p-2 w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Original Launch
          </label>
          <input
            type="date"
            className="border border-gray-400 p-2 w-full"
            value={originalLaunch}
            onChange={(e) => setOriginalLaunch(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Type</label>
          <select
            className="border border-gray-400 p-2 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="cargo">Cargo</option>
            <option value="crew">Crew</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
