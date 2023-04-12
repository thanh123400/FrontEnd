import React, { useState } from "react";
import "./search.css";
function Search({ options, onSearch }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(selectedOption, searchTerm);
  };

  return (
    <div class="search-container">
      <div class="search-bar-j">
        <select value={selectedOption} onChange={handleSelect}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
