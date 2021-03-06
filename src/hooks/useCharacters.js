import useFetch from "./useFetch";
import { useEffect, useCallback, useState } from "react";
import { fetchCharacters } from "../helpers/http";
import { normalizeText } from "../helpers/utils";

export default function useCharacters({ page }) {
  const data = useFetch(page, fetchCharacters);
  const results = data?.data?.results;
  const [characters, setCharacters] = useState(results);
  const [currentFilter, setCurrentFilter] = useState({
    species: "",
    gender: "",
  });

  const multipleFilterCharacters = useCallback(() => {
    if (results) {
      const keys = Object.keys(currentFilter);
      const filtered = results.filter((character) => {
        const flags = [];

        for (const key of keys) {
          if (currentFilter[key]) {
            const flag = character[key].toLowerCase() === currentFilter[key];
            flags.push(flag);
          }
        }

        return flags.every(Boolean);
      });
      setCharacters(filtered);
    }
  }, [currentFilter, results]);

  const filterByName = useCallback(
    (e) => {
      const name = normalizeText(e.target.value.toLowerCase().trim());

      if (e.target.value) {
        const filter = characters.filter((character) =>
          character.name.toLowerCase().includes(name)
        );
        if (filter.length) {
          setCharacters(filter);
        } else {
          multipleFilterCharacters();
        }
      } else {
        multipleFilterCharacters();
      }
    },
    [characters, multipleFilterCharacters]
  );

  const filterCharacters = (e) => {
    setCurrentFilter({
      ...currentFilter,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (results) setCharacters(results);
  }, [results]);

  useEffect(() => {
    multipleFilterCharacters();
  }, [multipleFilterCharacters]);

  return {
    ...data,
    characters,
    filterByName,
    filterCharacters,
  };
}
