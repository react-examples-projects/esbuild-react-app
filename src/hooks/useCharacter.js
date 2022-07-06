import useFetch from "./useFetch";
import { fetchCharacter } from "../helpers/http";

export default function useCharacter(id) {
  const data = useFetch(id, fetchCharacter);
  return data;
}
