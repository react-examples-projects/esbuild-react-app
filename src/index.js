import React from "react";
import ReactDOM from "react-dom/client";
import Character from "./components/Character";
import Loader from "./components/Loader";
import useCharacters from "./hooks/useCharacters";
import "./styles/styles.scss";
import "./styles/utils.css";
import "inter-ui/inter.css";

const App = () => {
  const { isLoading, refetch, data } = useCharacters();
  console.log(data);
  return (
    <div className="container">
      <h1 className="text-center mb-2">Ricky and Morty</h1>
      <button onClick={refetch} className="d-block btn mb-4 me-2">
        Actualizar
      </button>

      {isLoading && <Loader />}
      {data?.length ? (
        <div className="characters">
          {data.map((character) => (
            <Character {...character} />
          ))}
        </div>
      ) : (
        <p>No hay personajes para mostrar</p>
      )}
    </div>
  );
};

const root = document.getElementById("root");
const _app = ReactDOM.createRoot(root);
_app.render(<App />);
