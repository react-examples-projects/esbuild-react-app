import useFetch from "./useFetch";
import { useEffect, useCallback, useState } from "react";
import { fetchCharacters } from "../helpers/http";
import { normalizeText } from "../helpers/utils";

export default function useCharacters({ page }) {
  const data = useFetch(page, fetchCharacters);
  const results = data?.data?.results;
  const [characters, setCharacters] = useState(results);
  const onFilter = useCallback(
    (e) => {
      const name = normalizeText(e.target.value.toLowerCase().trim());

      if (e.target.value) {
        const filter = results.filter((character) =>
          character.name.toLowerCase().includes(name)
        );
        if (filter.length) {
          setCharacters(filter);
        } else {
          setCharacters(results);
        }

        console.log({ filter, name });
      } else {
        setCharacters(results);
      }
    },
    [results]
  );

  const filterByType = useCallback(
    (type) => {
      type = type.toLowerCase();
      if (!["human", "alien", "humanoid"].includes(type))
        return setCharacters(results);

      const filter = results.filter(
        (character) => character.species.toLowerCase() === type
      );
      setCharacters(filter);
    },
    [results]
  );

  const filterByGender = useCallback(
    (gender) => {
      gender = gender.toLowerCase();
      if (!["female", "male", "unknow"].includes(gender))
        return setCharacters(results);

      const filter = results.filter(
        (character) => character.gender.toLowerCase() === gender
      );
      setCharacters(filter);
    },
    [results]
  );

  useEffect(() => {
    if (data.data?.results) {
      setCharacters(data.data?.results);
    }
  }, [data.data?.results]);

  return { ...data, characters, onFilter, filterByType,filterByGender };
}
