import React, { useState } from "react";
import EditButton from "./EditButton";
import EditableCell from "./EditableCell";
import "../styles/EmployeeTable.scss";

function EmployeeTable({ data, setData, statusOptions }) {
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedRows, setEditedRows] = useState({});

  const startEditing = (row) => {
    setEditingRowId(row.id);
    setEditedRows({ [row.id]: { ...row } });
  };

  const saveRow = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? editedRows[id] : row
    );
    setData(updatedData);
    setEditingRowId(null);
  };

  const handleChange = (id, field, value) => {
    setEditedRows((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    if (editingRowId === id) setEditingRowId(null);
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
          {data.map((row) => {
            const isEditing = editingRowId === row.id;
            const currentData = editedRows[row.id] ?? row;

            return (
              <tr key={row.id} className={isEditing ? "editing" : ""}>
                <td className="actions">
                  <EditButton
                    isEditing={isEditing}
                    onEdit={() => startEditing(row)}
                    onSave={() => saveRow(row.id)}
                    onDelete={() => handleDelete(row.id)}
                  />
                </td>

                <EditableCell
                  isEditing={isEditing}
                  value={currentData.id}
                  onChange={(val) => handleChange(row.id, "id", val)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.name}
                  onChange={(val) => handleChange(row.id, "name", val)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.title}
                  onChange={(val) => handleChange(row.id, "title", val)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.department}
                  onChange={(val) => handleChange(row.id, "department", val)}
                />
                <EditableCell
                  isEditing={isEditing}
                  type="select"
                  value={currentData.status}
                  onChange={(val) => handleChange(row.id, "status", val)}
                  selectOptions={statusOptions}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.email}
                  onChange={(val) => handleChange(row.id, "email", val)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.hours_worked}
                  onChange={(val) => handleChange(row.id, "hours_worked", val)}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
