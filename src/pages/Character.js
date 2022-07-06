import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

export default function Character() {
  const { id } = useParams();
  const { data, isLoading, error } = useCharacter(id);

  if (error) {
    return <h2>An error ocurred while fetching data</h2>;
  }
  if (isLoading) {
    return <h2>Loading data...</h2>;
  }
  return <div>{data.name}</div>;
}
