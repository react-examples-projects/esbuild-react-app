import { useEffect, useState } from "react";
import { scrollTop } from "../helpers/utils";
import { Pagination } from "../helpers/storage";

export default function usePagination({ initPage = 0, totalPages }) {
  const pagination = Pagination("page", initPage);
  const [currentPage, setCurrentPage] = useState(pagination.get());
  const isFirst = currentPage === initPage;
  const isLast = currentPage === totalPages;

  const setPage = (page) => {
    if (page < initPage || page > totalPages) return;
    setCurrentPage(page);
    pagination.set(page);
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setPage(currentPage + 1);
  };

  const previusPage = () => {
    if (currentPage === initPage) return;
    setPage(currentPage - 1);
  };

  useEffect(() => {
    pagination.set(currentPage);
    scrollTop();
  }, [currentPage, pagination]);

  return { currentPage, nextPage, previusPage, setPage, isFirst, isLast };
}
