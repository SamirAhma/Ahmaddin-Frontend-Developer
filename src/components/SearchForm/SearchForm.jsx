import React, { useContext } from "react";
import { CapsulesContext } from "../../CapsuleContext";
import { useState, useEffect } from "react";
import axios from "axios";
const SearchForm = () => {
  const {
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    originalLaunch,
    setCurrentPage,
    setOriginalLaunch,
    type,
    setType,
    fetchCapsules,
  } = useContext(CapsulesContext);
  const [launchDates, setLaunchDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/capsules?filter=original_launch"
        );

        setLaunchDates(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const filteredDates = launchDates.filter(
    (date) => date.original_launch !== null
  );
  return (
    <section
      className=" flex items-center justify-between bg-indigo-500 h-full"
      data-testid="search-form"
    >
      <form className="container mx-auto block md:flex p-4 rounded-lg  flex-col md:flex-row justify-between w-full items-center ">
        <h2 className="text-2xl font-medium mb-4 text-white hidden flex-1">
          Search Our Rockets
        </h2>
        <div className="mb-4 ">
          <label className="block text-gray-700 font-medium mb-2">
            Search Term
          </label>
          <input
            type="text"
            className="border border-gray-400 p-2 w-full "
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <select
            className="border border-gray-400 p-2 w-full"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setCurrentPage(1);
            }}
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
          <select
            className="border border-gray-400 p-2 w-full"
            onChange={(e) => {
              setOriginalLaunch(e.target.value);
              setCurrentPage(1);
            }}
          >
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
            onChange={(e) => {
              setType(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
