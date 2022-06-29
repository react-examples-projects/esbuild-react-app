import axios from "axios";

export async function fetchCharacters(){
  const data = await axios.get("https://rickandmortyapi.com/api/character");
  return data.data?.results || []
}
