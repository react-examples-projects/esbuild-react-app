import useFetch from "./useFetch";
import { fetchCharacters } from "../helpers/http";

export default function useCharacters({ page }) {
  const data = useFetch({ fn: fetchCharacters, keys: [page] });
  return data;
}
