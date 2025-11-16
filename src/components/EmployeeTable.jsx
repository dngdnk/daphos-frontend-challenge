import React, { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditButton from "./EditButton"; 
import "../styles/EmployeeTable.scss";

function EmployeeTable({ data, statusOptions }) {
  const [editingRow, setEditingRow] = useState(null);

  /* allows table to know which row is in edit mode */
  const handleEditClick = (index) => {
    setEditingRow(index);
  };

  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Department</th>
            <th>Status</th>
            <th>Email</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            const isEditing = editingRow === key;

            return (
              <tr key={key} className="dataItem">
                <td className="actions">
                  <EditButton onClick={() => handleEditClick(key)} />
                  <DeleteRoundedIcon className="deleteButton" />
                </td>

                <td>{isEditing ? <input type="text" defaultValue={value.id} /> : value.id}</td>
                <td>{isEditing ? <input type="text" defaultValue={value.name} /> : value.name}</td>
                <td>{isEditing ? <input type="text" defaultValue={value.title} /> : value.title}</td>
                <td>{isEditing ? <input type="text" defaultValue={value.department} /> : value.department}</td>
                <td>
                  <select disabled={!isEditing} defaultValue={value.status}>
                    {statusOptions.map((status, i) => (
                      <option key={i} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td>{isEditing ? <input type="text" defaultValue={value.email} /> : value.email}</td>
                <td>{isEditing ? <input type="text" defaultValue={value.hours_worked} /> : value.hours_worked}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
