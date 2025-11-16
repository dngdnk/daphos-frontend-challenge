import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";

function EditButton({ isEditing, onEdit, onSave }) {
  const Icon = isEditing ? SaveAsRoundedIcon : EditRoundedIcon;
  const title = isEditing ? "Save" : "Edit";
  const handleClick = (e) => {
    e.stopPropagation();
    isEditing ? onSave() : onEdit();
  };
  const className = isEditing ? "saveButton actionIcon" : "editButton actionIcon";

  return (
    <button className={className} onClick={handleClick} title={title}>
      <Icon />
    </button>
  );
}

export default EditButton;
