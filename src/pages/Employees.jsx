import React from "react";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeJSON from "../data/EmployeeData.json";
import useEmployees from "../hooks/useEmployees";
import "../styles/Employees.scss";

function Employees() {
  // attach an internalID to each employee data
  const initialData = EmployeeJSON.map((item, idx) => ({
    ...item,
    _internalId: idx + 1,
  }));

  const {
    data,
    filteredData,
    setFilteredData,
    ...tableLogic
  } = useEmployees(initialData);

  const statusOptions = [...new Set(data.map((e) => e.status))];

  return (
    <div className="employees">
      <h1>Employee Overview</h1>
      <p className="caption">Details about all your employees in one place.</p>

      <SearchBar
        placeholder="Search by ID, Name, Title or Department"
        data={data}
        setFilteredData={setFilteredData}
      />

      <EmployeeTable
        data={filteredData}
        statusOptions={statusOptions}
        {...tableLogic}
      />
    </div>
  );
}

export default Employees;
