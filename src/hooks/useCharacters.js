import useFetch from "./useFetch";
import { fetchCharacters } from "../helpers/http";

export default function useCharacters() {
  const data = useFetch({ fn: fetchCharacters });
  return data;
}
