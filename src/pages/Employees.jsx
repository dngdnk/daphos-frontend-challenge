import React, { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeData from "../data/EmployeeData.json";
import "../styles/Employees.scss";

function Employees() {
  const [data, setData] = useState(EmployeeData); // main data
  const [filteredData, setFilteredData] = useState(EmployeeData); // search results

  const statusOptions = Array.from(
    new Set(EmployeeData.map((item) => item.status))
  );

  return (
    <div className="employees">
      <h1> Employee Overview </h1>
      <p className="caption"> Details about all your employees in one place.</p>

      <SearchBar
        placeholder="Search employees by ID, Name, Title or Department"
        data={data}
        setFilteredData={setFilteredData}
      />

      <EmployeeTable
        data={filteredData}
        setData={setData}
        statusOptions={statusOptions}
      />
    </div>
  );
}

export default Employees;
