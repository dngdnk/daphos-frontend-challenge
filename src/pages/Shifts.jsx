import React from "react";
import SearchBar from "../components/SearchBar";
import EmployeeJSON from "../data/EmployeeData.json";
import CalendarComponent from "../components/CalendarComponent";
import useEmployees from "../hooks/useEmployees";
import "../styles/Shifts.scss";

function Shifts() {
  const initialData = EmployeeJSON.map((item, idx) => ({
    ...item,
    _internalId: idx + 1,
  }));

  const { data, filteredData, setFilteredData } = useEmployees(initialData);

  return (
    <div className="shiftsPage">
      <div className="shiftsHeader">
        <h1>Shift Overview</h1>
        <p className="caption">Track and assign shifts here. </p>
        <p className="note">
          (Overview of weekly or monthly shifts with options to view specific
          employees' scheduled shifts)
        </p>
      </div>

      <div className="shiftsContent">
        {/* Left pane */}
        <div className="leftPane">
          <div className="leftPaneHeader"></div>

          <div className="employeeSearchContainer">
            <SearchBar
              placeholder="Search by ID or Name"
              data={data}
              setFilteredData={setFilteredData}
              searchKey={["name", "id"]}
              className="shiftsSearchBar"
            />

            <div className="employeeList">
              {filteredData.length > 0 ? (
                filteredData.map((emp) => (
                  <div className="employeeListItem" key={emp._internalId}>
                    <p className="empName">{emp.name}</p>
                    <p className="empID">{emp.id}</p>
                  </div>
                ))
              ) : (
                <p style={{ padding: "0.5rem", color: "#999" }}>
                  No employees found
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right pane */}
        <div className="rightPane">
          <div className="calendarContainer">
            <CalendarComponent events={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shifts;
