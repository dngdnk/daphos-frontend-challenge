import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { sortById } from "../helpers/SortByID";
import "../styles/SearchBar.scss";

function SearchBar({ placeholder, data, setFilteredData }) {
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    setFilteredData(sortById(data));
  }, [data]);

  useEffect(() => {
    setFilteredData(sortById(data));
  }, [data]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData(sortById(data));
    } else {
      const newFilter = data.filter((value) => {
        return (
          value.department.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.id.toString().includes(searchWord) ||
          value.title.toLowerCase().includes(searchWord.toLowerCase())
        );
      });
      setFilteredData(sortById(newFilter));
    }
  };

  const clearInput = () => {
    setWordEntered("");
    setFilteredData(data);
  };

  return (
    <div className="searchBar">
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
