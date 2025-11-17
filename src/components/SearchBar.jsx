import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { sortById } from "../helpers/SortByID";
import "../styles/SearchBar.scss";

function SearchBar({
  placeholder,
  data,
  setFilteredData,
  searchKey = ["name", "id"],
  className = "",
}) {
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    setFilteredData(sortById(data));
  }, [data]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData(sortById(data));
    } else {
      const newFilter = data.filter((item) => {
        return searchKey.some((field) => {
          if (!item[field]) return false;
          return item[field]
            .toString()
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        });
      });
      setFilteredData(sortById(newFilter));
    }
  };

  const clearInput = () => {
    setWordEntered("");
    setFilteredData(sortById(data));
  };

  return (
    <div className={`searchBar ${className}`}>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered === "" ? (
            <SearchRoundedIcon />
          ) : (
            <CloseRoundedIcon id="clearButton" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
