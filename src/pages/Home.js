import CharacterList from "../components/CharacterList";

const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <h1 className="text-center my-5">Ricky and Morty</h1>
      </div>

      <CharacterList />
    </div>
  );
};

export default Home;
