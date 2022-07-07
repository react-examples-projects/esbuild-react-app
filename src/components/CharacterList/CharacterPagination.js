import Select from "../inputs/Select";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function CharacterPagination({
  totalPages,
  currentPage,
  nextPage,
  previusPage,
  setPage,
  isFirst,
  isLast,
}) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center mx-auto">
      <button
        onClick={previusPage}
        disabled={isFirst}
        className="d-flex align-items-center btn mb-2 me-2"
      >
        <FiArrowLeft className="me-1" />
        Anterior
      </button>
      <Select
        name="page"
        className="mb-2 me-2"
        onChange={(e) => setPage(e.target.value)}
      >
        {Array(totalPages)
          .fill(0)
          .map((_, index) => {
            const page = index + 1;
            return (
              <Select.Item
                value={page}
                key={page}
                selected={currentPage === page}
              >
                {page}
              </Select.Item>
            );
          })}
      </Select>
      <button
        onClick={nextPage}
        disabled={isLast}
        className="d-flex align-items-center btn mb-2 me-2"
      >
        Siguiente
        <FiArrowRight className="ms-1" />
      </button>
    </div>
  );
}
