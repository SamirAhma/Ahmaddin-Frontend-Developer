import React, { useContext } from "react";
import { CapsulesContext } from "../CapsuleContext";
import { useState, useEffect } from "react";
const SearchForm = () => {
  const {
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    originalLaunch,
    setOriginalLaunch,
    type,
    setType,
    fetchCapsules,
  } = useContext(CapsulesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCapsules(searchTerm, status, originalLaunch, type);
    // Perform search action with searchTerm, status, originalLaunch and type as parameters
  };

  const [launchDates, setLaunchDates] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules?filter=original_launch")
      .then((response) => response.json())
      .then((data) => setLaunchDates(data));
  }, []);
  const filteredDates = launchDates.filter(
    (date) => date.original_launch !== null
  );
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
          <select onChange={(e) => setOriginalLaunch(e.target.value)}>
            <option value="">Select a date</option>
            {filteredDates.map((date) => (
              <option key={date.original_launch} value={date.original_launch}>
                {new Date(date.original_launch).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Type</label>
          <select
            className="border border-gray-400 p-2 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
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
