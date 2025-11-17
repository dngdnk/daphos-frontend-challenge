import React from "react";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import "../styles/AddNewEmployeeButton.scss";

export default function AddNewEmployeeButton({ onAdd }) {
  return (
    <button
      className="addEmployeeButton"
      onClick={onAdd}
      title="Add New Employee"
    >
      <PersonAddAltRoundedIcon className="addPersonIcon" />
    </button>
  );
}
