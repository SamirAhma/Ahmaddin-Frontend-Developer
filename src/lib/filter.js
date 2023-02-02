export const filterBySearchTerm = (data, searchTerm) => {
  if (searchTerm === "") return data;
  return data.filter((capsule) => {
    return Object.values(capsule).some((val) => {
      if (typeof val === "string") {
        return val.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (Array.isArray(val)) {
        return val.some((subVal) => {
          return subVal.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
    });
  });
};
