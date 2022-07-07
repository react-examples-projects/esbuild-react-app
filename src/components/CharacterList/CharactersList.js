import CharactersListLoader from "../loaders/CharactersListLoader";
import NotFoundCharacter from "../NotFoundCharacter";
import CharactersError from "../Errors/CharactersError";
import Character from "./Character";
import { Link } from "react-router-dom";

export default function CharactersList({
  error,
  isLoading,
  characters,
  currentPage,
  totalPages,
}) {
  
  if (error) return <CharactersError />;

  if (isLoading || !characters) return <CharactersListLoader />;

  if (characters?.length) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <NotFoundCharacter />
    </>
  );
}
