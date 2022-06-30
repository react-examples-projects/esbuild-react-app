import useFetch from "./useFetch";
import { fetchCharacters } from "../helpers/http";

export default function useCharacters({ page }) {
  const data = useFetch(page, fetchCharacters);
  return data;
}
