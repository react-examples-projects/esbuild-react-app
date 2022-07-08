import { useParams } from "react-router-dom";
import CharacterError from "../../components/Errors/CharacterError";
import CharacterLoader from "../../components/loaders/CharacterLoader";
import PageInfo from "../../components/PageInfo";
import useCharacter from "../../hooks/useCharacter";
import styles from "./styles.modules.css";

export default function Character() {
  const { id } = useParams();
  const { data, isLoading, error } = useCharacter(id);

  if (error) return <CharacterError />;

  if (isLoading)
    return (
      <>
        <PageInfo title="Cargando" />
        <CharacterLoader />
      </>
    );

  return ( 
    <>
      <PageInfo title={data.name} />
      <div className={styles.container}>
        <img
          src={data.image}
          alt={data.name}
          className="d-block mb-2 img-fluid rounded-circle"
          width={200}
          height={200}
        />
        <h2>{data.name}</h2>
        <p className="text-muted mb-0">Gender: {data.gender}</p>
        <p className="text-muted mb-0">Species: {data.species}</p>
        <p className="text-muted mb-0">Current status: {data.status}</p>
        <p className="text-muted mb-0">Origin: {data.origin.name}</p>
      </div>{" "}
    </>
  );
}
