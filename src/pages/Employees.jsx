import React from "react";
import SearchBar from "../components/SearchBar";
import "../styles/Employees.scss";

function Employees() {
  return (
    <div className="employees">
      <h1> Employee Overview </h1>
      <p className="caption"> Details about all your employees in one place.</p>
      <SearchBar />
    </div>
  );
}

export default Employees;
