import styles from "./styles.modules.css";
import CharacterErrorImg from "../../../assets/characters_error.jpg";

export default function CharacterError() {
  return (
    <div className={styles.container}>
      <img
        src={CharacterErrorImg}   
        alt="Error al descargar"
        className="d-block mx-auto mb-3 rounded-circle"
      />
      <h2 className="text-center mb-5">
        Ocurrió un error al descagar el personaje
      </h2>
    </div> 
  );
}
