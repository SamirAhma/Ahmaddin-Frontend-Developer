import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { filterBySearchTerm } from "./lib/filter";
import { paginate } from "./lib/pagination";
export const CapsulesContext = createContext();

export default function CapsulesProvider({ children }) {
  // State to hold the capsules data
  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [type, setType] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // Function to fetch the capsules data
  const fetchCapsules = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/capsules?status=${status}&original_launch=${originalLaunch}&type=${type}`
      );
      const data = response.data;
      if (data && Array.isArray(data)) {
        // do something with paginatedData
        const { filteredData, totalPages } = paginate(
          filterBySearchTerm(data, searchTerm),
          currentPage
        );

        setTotalPages(totalPages);
        setCapsules(filteredData);
        setIsLoading(false);
      } else {
        console.error("data is not an array or not defined");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Use the Effect Hook to fetch the data when the component is mounted
  useEffect(() => {
    fetchCapsules();
  }, [currentPage, type, originalLaunch, searchTerm, status]);

  // Provide the capsules data and fetchCapsules function as context value
  return (
    <CapsulesContext.Provider
      value={{
        capsules,
        fetchCapsules,
        currentPage,
        setCurrentPage,
        searchTerm,
        setSearchTerm,
        status,
        setStatus,
        originalLaunch,
        setOriginalLaunch,
        type,
        setType,
        totalPages,
        isLoading,
      }}
    >
      {children}
    </CapsulesContext.Provider>
  );
}
