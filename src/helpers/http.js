import axios from "axios";

export async function fetchCharacters(page) {
  const data = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  return data.data || [];
}

export async function fetchCharacter(id) {
  const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return data.data;
}