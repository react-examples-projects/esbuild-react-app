import CharacterList from "../components/CharacterList";
import Toggle from "../components/inputs/Toggle";
import useTheme from "../hooks/useTheme";
import PageInfo from "../components/PageInfo";
import Footer from "../components/Footer";

const Home = () => {
  const { toggle, isDak } = useTheme();

  return (
    <>
      <PageInfo title="Inicio" />

      <div className="container">
        <Toggle checked={isDak} onChange={toggle} />
        <div className="banner">
          <h1 className="text-center my-5">Ricky and Morty</h1>
        </div>
        
        <CharacterList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
