import NotFoundImg from "../../assets/not_found.png";
import styles from "./styles.modules.css";
export default function NotFoundCharacter() {
  return (
    <div className={styles.container}>
      <img
        src={NotFoundImg}
        alt="Personajes no encontrados"
        className="d-block mx-auto mb-3"
      />
      <h2 className="text-center mb-5">
        No se encontraron personajes
      </h2>
    </div>
  );
}
