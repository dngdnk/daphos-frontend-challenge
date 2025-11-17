import React from "react";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployeeButton from "../components/AddNewEmployeeButton";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
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
  const departmentOptions = [...new Set(data.map((e) => e.department))];

  return (
    <div className="employeesPage">
      <div className="pageHeader">
        <h1>Employee Overview</h1>
        <p className="caption">
          Details about all your employees in one place.
        </p>
      </div>

      <div className="contentContainer">
        <div className="topControls">
          <SearchBar
            placeholder="Search employees..."
            data={data}
            setFilteredData={setFilteredData}
            searchKey={["name", "id", "department", "title"]}
            className="employeeSearchBar"
          />

          <div className="employeeButtons">
            <AddNewEmployeeButton
              onAdd={() => addNewRow(statusOptions, departmentOptions)}
            />
            <button className="downloadButton" title="Download">
              <DownloadRoundedIcon className="downloadIcon" />
            </button>
          </div>
        </div>

        <div className="tableWrapper">
          <EmployeeTable
            data={filteredData}
            statusOptions={statusOptions}
            departmentOptions={departmentOptions}
            {...tableLogic}
          />
        </div>
      </div>
    </div>
  );
}

export default Employees;
