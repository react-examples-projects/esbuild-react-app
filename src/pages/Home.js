import { useState } from "react";
import Character from "../components/Character";
import Loader from "../components/Loader";
import CharactersLoader from "../components/loaders/CharactersLoader";
import useCharacters from "../hooks/useCharacters";
import usePagination from "../hooks/usePagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [totalPages, setTotalPages] = useState(30);
  const { currentPage, nextPage, previusPage } = usePagination({
    totalPages,
    initPage: 1,
  });
  const { isLoading, refetch, data } = useCharacters({ page: currentPage });

  return (
    <div className="container">
      {/* <CharactersLoader /> */}
      <h1 className="text-center mb-2 text-gradient">Ricky and Morty</h1>
      <div className="d-flex">
        <button onClick={refetch} className="d-block btn mb-4 me-2">
          Actualizar
        </button>
        <button onClick={nextPage} className="d-block btn mb-4 me-2">
          Siguiente
        </button>
        <button onClick={previusPage} className="d-block btn mb-4 me-2">
          Anteriorv
        </button>
      </div>

      {isLoading && <Loader />}
      {data?.length ? (
        <div className="characters">
          {data.map((character) => (
            <Link to={`/${character.id}`} key={character.id}>
              <Character {...character} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No hay personajes para mostrar</p>
      )}
    </div>
  );
};

export default Home;
