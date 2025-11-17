import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function EditButton({
  isEditing,
  onEdit,
  onSaveClick,
  onDeleteClick,
  onExitEdit,
}) {
  return (
    <div className="editButtonsContainer">
      {!isEditing ? (
        <div style={{ gap: "0.5rem" }}>
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

          <button
            className="profileButton actionIcon"
            title="View Profile"
            onClick={(e) => e.stopPropagation()}
          >
            <AssignmentIndOutlinedIcon />
          </button>

          <button
            className="shiftButton actionIcon"
            title="Schedule"
            onClick={(e) => e.stopPropagation()}
          >
            <CalendarMonthOutlinedIcon />
          </button>
        </div>
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
            className="exitButton actionIcon"
            onClick={(e) => {
              e.stopPropagation();
              onExitEdit();
            }}
            title="Exit"
          >
            <CancelOutlinedIcon />
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
