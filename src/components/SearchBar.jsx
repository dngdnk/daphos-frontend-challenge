import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EmployeeTable from "./EmployeeTable";
import "../styles/searchBar.scss";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [statusOptions, setStatusOptions] = useState([]);

  useEffect(() => {
    setFilteredData(data);

    const uniqueStatus = [...new Set(data.map((item) => item.status))];
    setStatusOptions(uniqueStatus);
  }, [data]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData(data);
    } else {
      const newFilter = data.filter((value) => {
        return (
          value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.id.toString().includes(searchWord)
        );
      });
      setFilteredData(newFilter);
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

      <EmployeeTable data={filteredData} statusOptions={statusOptions} />
    </div>
  );
}

export default SearchBar;
