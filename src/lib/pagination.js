export const paginate = (data, currentPage) => {
  const totalItems = data.length;
  const offset = (currentPage - 1) * 6;
  const totalPages = Math.ceil(totalItems / 6);
  const filteredData = data.slice(offset, offset + 6);
  return { filteredData, totalPages };
};
