import React from "react";
import SearchBar from "../components/SearchBar";
import EmployeeData from '../data/EmployeeData.json';
import "../styles/Employees.scss";

function Employees() {
  return (
    <div className="employees">
      <h1> Employee Overview </h1>
      <p className="caption"> Details about all your employees in one place.</p>
      <SearchBar placeholder="Search employees by ID, Name or Department" data={EmployeeData} />
    </div>
  );
}

export default Employees;
