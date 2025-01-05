import s from "./SearchBar.module.css";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Plese fill in the search images and photoes field.");
      return;
    }
    onSearchChanged(value);
  };

  return (
    <header>
      <div className={s.bar}>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.inputWrapper}>
            <input
              className={s.input}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <FcSearch className={s.search} size={32} onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
