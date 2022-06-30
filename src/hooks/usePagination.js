import { useState } from "react";

export default function usePagination({ initPage = 0, totalPages }) {
  const [currentPage, setCurrentPage] = useState(initPage);

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const previusPage = () => {
    if (currentPage === initPage) return;
    setCurrentPage(currentPage - 1);
  };

  return { currentPage, nextPage, previusPage };
}
