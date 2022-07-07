import CharacterList from "../components/CharacterList";
import Toggle from "../components/inputs/Toggle";
import useTheme from "../hooks/useTheme";

const Home = () => {
  const { toggle, isDak } = useTheme();

  return (
    <div className="container">
      <Toggle checked={isDak} onChange={toggle} />
      <div className="banner">
        <h1 className="text-center my-5">Ricky and Morty</h1>
      </div>

      <CharacterList />
    </div>
  );
};

export default Home;
