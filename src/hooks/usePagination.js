import { useState } from "react";
import { scrollTop } from "../helpers/utils";

export default function usePagination({ initPage = 0, totalPages }) {
  const [currentPage, setCurrentPage] = useState(initPage);
  const isFirst = currentPage === initPage;
  const isLast = currentPage === totalPages;

  const nextPage = () => {
    if (currentPage === totalPages) return;
    scrollTop();
    setCurrentPage(currentPage + 1);
  };

  const previusPage = () => {
    if (currentPage === initPage) return;
    scrollTop();
    setCurrentPage(currentPage - 1);
  };

  return { currentPage, nextPage, previusPage, isFirst, isLast };
}
