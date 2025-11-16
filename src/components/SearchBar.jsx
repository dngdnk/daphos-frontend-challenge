import { React, useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../styles/searchBar.scss";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    setFilteredData(data);
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

      <div className="dataResult">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Title</th>
              <th>Department</th>
              <th>Status</th>
              <th>Email</th>
              <th>Hours</th>
              <th>Overtime</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((value, key) => (
              <tr key={key} className="dataItem">
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.title}</td>
                <td>{value.department}</td>
                <td>{value.status}</td>
                <td>{value.email}</td>
                <td>{value.hours_worked}</td>
                <td>{value.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBar;
