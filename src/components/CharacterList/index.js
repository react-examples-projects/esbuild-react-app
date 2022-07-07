import { useEffect, useState } from "react";
import Loader from "../loaders/Loader";
import useCharacters from "../../hooks/useCharacters";
import usePagination from "../../hooks/usePagination";
import CharactersList from "./CharactersList";
import CharacterFilter from "./CharacterFilter";
import CharacterPagination from "./CharacterPagination";

export default function List() {
  const [totalPages, setTotalPages] = useState(0);
  const { currentPage, ...args } = usePagination({ totalPages, initPage: 1 });
  const { isLoading, data, error, filterByName, filterCharacters, characters } =
    useCharacters({ page: currentPage });

  useEffect(() => {
    if (data) setTotalPages(data?.info.pages);
  }, [data]);
  console.log({ isLoading });
  return (
    <>
      {isLoading && (
        <Loader style={{ position: "fixed", top: "1rem", left: "1rem" }} />
      )}

      <div className="character-list mb-3">
        {!error && (
          <CharacterFilter {...{ filterByName, filterCharacters, isLoading }} />
        )}
        <CharactersList
          {...{
            error,
            isLoading,
            characters,
            currentPage,
            totalPages,
          }}
        />
        {!error && (
          <CharacterPagination {...{ ...args, currentPage, totalPages }} />
        )}
      </div>
    </>
  );
}
