import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.scss"

function SkeletonCharacter() {
  return (
    <div>
      <Skeleton containerClassName="w-100" height={228} />
      <Skeleton containerClassName="w-100" className="mt-3 mb-1" />
      <Skeleton containerClassName="w-100" width={54} />
      <Skeleton containerClassName="w-100" width={45} />
    </div>
  );
}

export default function CharactersLoader() {
  return (
    <div className={styles.charactersLoader}>
      {Array(10)
        .fill(null)
        .map((_, key) => (
          <SkeletonCharacter />
        ))}
    </div>
  );
}
