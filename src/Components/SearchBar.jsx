import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange(search);
      setSearch("");
    }
  };

  return (
    <div className="input-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
