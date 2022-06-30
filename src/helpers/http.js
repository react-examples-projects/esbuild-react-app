import axios from "axios";

export async function fetchCharacters(page) {
  const data = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  return data.data?.results || [];
}
