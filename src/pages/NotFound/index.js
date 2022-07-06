import NotFoundImg from "../../assets/not_found.png";
import styles from "./styles.modules.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img
        src={NotFoundImg}
        alt="Página no encontrada"
        className="d-block mx-auto mb-3"
      />
      <h2 className="text-center mb-5">Página no encontrada</h2>
    </div>
  );
}
