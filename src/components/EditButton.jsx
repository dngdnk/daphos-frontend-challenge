import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

function EditButton({ onClick }) {
  return <EditRoundedIcon className="editButton" onClick={onClick} />;
}

export default EditButton;
