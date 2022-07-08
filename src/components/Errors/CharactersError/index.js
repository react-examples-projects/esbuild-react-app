import styles from "./styles.modules.css";
import CharacterErrorImg from "../../../assets/characters_error.jpg";
import PageInfo from "../../PageInfo";

export default function CharactersError() {
  return (
    <>
      <PageInfo title="Error al descargar" />
      <div className={styles.container}>
        <img
          src={CharacterErrorImg}
          alt="Error al descargar"
          className="d-block mx-auto mb-3 rounded-circle"
        />
        <h2 className="text-center mb-5">
          Ocurrió un error al descagar los personajes
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="d-flex align-items-center btn mx-auto"
        >
          Recargar
        </button>
      </div>
    </>
  );
}
