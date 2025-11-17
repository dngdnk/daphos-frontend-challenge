import React from "react";
import DropdownMenu from "./DropdownMenu";

function EditableCell({ isEditing, value, onChange, type = "text", selectOptions = [] }) {
  if (!isEditing) return <td>{value}</td>;

  return (
    <td>
      {type === "select" ? (
        <DropdownMenu value={value} options={selectOptions} onChange={onChange} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </td>
  );
}

export default EditableCell;
