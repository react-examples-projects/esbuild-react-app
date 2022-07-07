import styles from "./styles.modules.css";
import Skeleton from "react-loading-skeleton";

export default function CharacterLoader() {
  return (
    <div className={styles.container}>
      <Skeleton height={200} width={200} circle />
      <Skeleton width={200} height={28} className="mt-4 mb-4" />

      <Skeleton width={130} className="mb-3" />
      <Skeleton width={130} className="mb-3" />
      <Skeleton width={150} className="mb-3" />
      <Skeleton width={180} className="mb-3" />
    </div>
  );
}
