import { React, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../styles/searchBar.scss";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  }

  return (
    <div className="searchBar">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value= {wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchRoundedIcon />
          ) : (
            <CloseRoundedIcon id="clearButton" onClick = {clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => (
            <a key={key} className="dataItem">
              <p>{value.title}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
