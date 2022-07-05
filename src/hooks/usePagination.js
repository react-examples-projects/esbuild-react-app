import { useEffect, useState } from "react";
import { scrollTop } from "../helpers/utils";
import { Pagination } from "../helpers/storage";

export default function usePagination({ initPage = 0, totalPages }) {
  const pagination = Pagination("page", initPage);
  const [currentPage, setCurrentPage] = useState(pagination.get());
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

  useEffect(() => {
    pagination.set(currentPage);
    console.log(currentPage)
  }, [currentPage]);

  return { currentPage, nextPage, previusPage, isFirst, isLast };
}
