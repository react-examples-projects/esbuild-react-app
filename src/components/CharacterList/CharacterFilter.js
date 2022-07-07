import Input from "../inputs/Input";
import Select from "../inputs/Select";
import { FiGrid, FiSearch, FiUser } from "react-icons/fi";

export default function CharacterFilter({
  filterByName,
  filterCharacters,
  isLoading,
}) {
  return (
    <div className="filter-bar mb-5">
      <Input
        icon={FiSearch}
        className="me-2 search-bar"
        placeholder="Nombre"
        onChange={filterByName}
        disabled={isLoading}
      />

      <Select
        icon={FiGrid}
        className="me-2 "
        onChange={filterCharacters}
        name="species"
        disabled={isLoading}
      >
        <Select.Item value="">Especie</Select.Item>
        <Select.Item value="human">Humano</Select.Item>
        <Select.Item value="alien">Alien</Select.Item>
        <Select.Item value="humanoid">Humanoide</Select.Item>
      </Select>

      <Select
        icon={FiUser}
        onChange={filterCharacters}
        name="gender"
        disabled={isLoading}
      >
        <Select.Item value="">Género</Select.Item>
        <Select.Item value="female">Mujer</Select.Item>
        <Select.Item value="male">Hombre</Select.Item>
        <Select.Item value="unknown">Desconocido</Select.Item>
      </Select>
    </div>
  );
}
