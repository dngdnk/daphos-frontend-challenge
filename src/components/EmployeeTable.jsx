import React, { useState } from "react";
import EditButton from "./EditButton";
import EditableCell from "./EditableCell";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "../styles/EmployeeTable.scss";

function EmployeeTable({ data, setData, statusOptions }) {
  const [editingRow, setEditingRow] = useState(null);
  const [editedRows, setEditedRows] = useState({});

  const startEditing = (index) => {
    setEditingRow(index);
    setEditedRows({ [index]: { ...data[index] } });
  };

  const saveRow = (index) => {
    const updatedData = data.map((row, i) =>
      i === index ? editedRows[index] : row
    );
    setData(updatedData);
    setEditingRow(null);
  };

  const handleChange = (index, field, value) => {
    setEditedRows((prev) => ({
      ...prev,
      [index]: { ...prev[index], [field]: value },
    }));
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
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
          {data.map((row, index) => {
            const isEditing = editingRow === index;
            const currentData = editedRows[index] ?? row;

            return (
              <tr key={index} className={isEditing ? "editing" : ""}>
                <td className="actions">
                  <EditButton
                    isEditing={isEditing}
                    onEdit={() => startEditing(index)}
                    onSave={() => saveRow(index)}
                  />
                  <DeleteRoundedIcon
                    className="deleteButton actionIcon"
                    onClick={() => handleDelete(index)}
                  />
                </td>

                <EditableCell
                  isEditing={isEditing}
                  value={currentData.id}
                  onChange={(val) => handleChange(index, "id", val)}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.name}
                  onChange={(val) => handleChange(index, "name", val)}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.title}
                  onChange={(val) => handleChange(index, "title", val)}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.department}
                  onChange={(val) => handleChange(index, "department", val)}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  type="select"
                  value={currentData.status} 
                  onChange={(val) => handleChange(index, "status", val)}
                  selectOptions={statusOptions}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.email}
                  onChange={(val) => handleChange(index, "email", val)}
                  onSave={() => saveRow(index)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={currentData.hours_worked}
                  onChange={(val) => handleChange(index, "hours_worked", val)}
                  onSave={() => saveRow(index)}
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
