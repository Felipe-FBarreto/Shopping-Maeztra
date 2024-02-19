import { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      id="search-bar__form"
      className="search-bar__form"
      onSubmit={(event) => {
        event.preventDefault();
        window.alert(`Buscado: ${searchInput}`);
      }}
    >
      <input
        type="search"
        placeholder="O que você busca?"
        required
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
