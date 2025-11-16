import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function EditButton({ isEditing, onEdit, onSaveClick, onDeleteClick }) {
  return (
    <div className="editButtonsContainer">
      {!isEditing ? (
        <button
          className="editButton actionIcon"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          title="Edit"
        >
          <EditRoundedIcon />
        </button>
      ) : (
        <>
          <button
            className="saveButton actionIcon"
            onClick={(e) => {
              e.stopPropagation();
              onSaveClick(); 
            }}
            title="Save"
          >
            <SaveAsRoundedIcon />
          </button>
          <button
            className="deleteButton actionIcon"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteClick(); 
            }}
            title="Delete"
          >
            <DeleteRoundedIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default EditButton;
