import React from "react";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployeeButton from "../components/AddNewEmployeeButton";
import EmployeeJSON from "../data/EmployeeData.json";
import useEmployees from "../hooks/useEmployees";
import "../styles/Employees.scss";

function Employees() {
  // attach an internalID to each employee data
  const initialData = EmployeeJSON.map((item, idx) => ({
    ...item,
    _internalId: idx + 1,
  }));

  const { data, filteredData, setFilteredData, addNewRow, ...tableLogic } =
    useEmployees(initialData);

  const statusOptions = [...new Set(data.map((e) => e.status))];

  return (
    <div className="employees">
      <div className="pageHeader">
        <h1>Employee Overview</h1>
        <p className="caption">
          Details about all your employees in one place.
        </p>
      </div>

      <div className="contentContainer">
        <SearchBar
          placeholder="Search by ID, Name, Title or Department"
          data={data}
          setFilteredData={setFilteredData}
        />

        <div className="tableAndButton">
          <div className="tableWrapper">
            <EmployeeTable
              data={filteredData}
              statusOptions={statusOptions}
              {...tableLogic}
            />
          </div>
          <AddNewEmployeeButton onAdd={() => addNewRow(statusOptions)} />
        </div>
      </div>
    </div>
  );
}

export default Employees;
