import Skeleton from "react-loading-skeleton";
import styles from "./styles.modules.css";

function SkeletonCharacter() {
  return (
    <div>
      <Skeleton containerClassName="w-100" height={228} />
      <Skeleton containerClassName="w-100" width={100} className="mt-3 mb-1" />
      <Skeleton containerClassName="w-100" width={64} />
      <Skeleton containerClassName="w-100" width={55} />
    </div>
  );
}

export default function CharactersLoader() {
  return (
    <>
      <Skeleton containerClassName="w-100" className="mb-2" width={120} />
      <div className={styles.charactersLoader}>
        {Array(10)
          .fill(null)
          .map((_, key) => (
            <SkeletonCharacter key={key} className={styles.characterLoader} />
          ))}
      </div>
    </>
  );
}
