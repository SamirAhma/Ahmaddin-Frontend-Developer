import React, { createContext, useState, useEffect } from "react";

// Create a new context
export const CapsulesContext = createContext();

export default function CapsulesProvider({ children }) {
  // State to hold the capsules data
  const [capsules, setCapsules] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [type, setType] = useState("");

  // Function to fetch the capsules data
  async function fetchCapsules(
    searchTerm = "",
    status = "",
    original_launch = "",
    type = ""
  ) {
    const response = await fetch(
      `https://api.spacexdata.com/v3/capsules?limit=6&offset=${
        (page - 1) * 6
      }&status=${status}&original_launch=${original_launch}&type=${type}`
    );
    const data = await response.json();
    // setTotalPages(Math.ceil(data.length / 6));

    const filteredData =
      searchTerm == ""
        ? data
        : data.filter((capsule) => {
            return Object.values(capsule).some((val) => {
              if (typeof val === "string") {
                return val.toLowerCase().includes(searchTerm.toLowerCase());
              } else if (Array.isArray(val)) {
                return val.some((subVal) => {
                  return subVal.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                });
              }
            });
          });
    setCapsules(filteredData.slice(0, 6));
  }

  // Use the Effect Hook to fetch the data when the component is mounted
  useEffect(() => {
    fetchCapsules();
  }, [page]);

  // Provide the capsules data and fetchCapsules function as context value
  return (
    <CapsulesContext.Provider
      value={{
        capsules,
        fetchCapsules,
        page,
        setPage,
        searchTerm,
        setSearchTerm,
        status,
        setStatus,
        originalLaunch,
        setOriginalLaunch,
        type,
        setType,
      }}
    >
      {children}
    </CapsulesContext.Provider>
  );
}
