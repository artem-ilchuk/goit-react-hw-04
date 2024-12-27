import { useState } from "react";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => e.preventDeafault();
  onSearchChanged(value);
  return (
    <header>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;

<form>
  <input type="text" />
</form>;
