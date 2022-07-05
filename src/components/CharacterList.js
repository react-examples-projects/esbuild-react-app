import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowLeft,
  FiGrid,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import Character from "./Character";
import Loader from "./Loader";
import CharactersLoader from "./loaders/CharactersLoader";
import useCharacters from "../hooks/useCharacters";
import usePagination from "../hooks/usePagination";
import Input from "./inputs/Input";
import Select from "./inputs/Select";

export default function CharacterList() {
  const [totalPages, setTotalPages] = useState(0);
  const { currentPage, nextPage, previusPage, isFirst, isLast } = usePagination(
    { totalPages, initPage: 1 }
  );
  const { isLoading, data, onFilter, filterCharacters, characters } =useCharacters({ page: currentPage });

  useEffect(() => {
    if (data) {
      setTotalPages(data?.info.pages);
    }
  }, [data]);

  return (
    <>
      {isLoading && characters && (
        <Loader
          style={{ position: "absolute", top: "1.2rem", right: "1.2rem" }}
        />
      )}
      <div className="character-list">
        {isLoading && !characters ? (
          <CharactersLoader />
        ) : characters?.length ? (
          <>
            <div className="filter-bar mb-5">
              <Input
                icon={FiSearch}
                className="me-2 search-bar"
                placeholder="Nombre"
                onChange={onFilter}
              />

              <Select
                icon={FiGrid}
                className="me-2 "
                onChange={filterCharacters}
                name="species"
              >
                <Select.Item value="">Especie</Select.Item>
                <Select.Item value="human">Humano</Select.Item>
                <Select.Item value="alien">Alien</Select.Item>
                <Select.Item value="humanoid">Humanoide</Select.Item>
              </Select>

              <Select icon={FiUser} onChange={filterCharacters} name="gender">
                <Select.Item value="">Género</Select.Item>
                <Select.Item value="female">Mujer</Select.Item>
                <Select.Item value="male">Hombre</Select.Item>
                <Select.Item value="unknown">Desconocido</Select.Item>
              </Select>
            </div>

            <p className="mb-1 text-muted" style={{ paddingLeft: "0.5rem" }}>
              Página {currentPage} de {totalPages}
            </p>
            <div className="characters">
              {characters.map((character) => (
                <Link
                  to={`/${character.id}`}
                  key={character.id}
                  className="text-reset text-decoration-none"
                >
                  <Character {...character} />
                </Link>
              ))}
            </div>

            <div className="d-flex justify-content-center mx-auto">
              <button
                onClick={nextPage}
                disabled={isLast}
                className="d-flex align-items-center btn mb-4 me-2"
              >
                Siguiente
                <FiArrowRight className="ms-1" />
              </button>

              <button
                onClick={previusPage}
                disabled={isFirst}
                className="d-flex align-items-center btn mb-4 me-2"
              >
                <FiArrowLeft className="me-1" />
                Anterior
              </button>
            </div>
          </>
        ) : (
          <p>No hay personajes para mostrar</p>
        )}
      </div>
    </>
  );
}
