import React from "react";
import EditButton from "./EditButton";
import EditableCell from "./EditableCell";
import "../styles/EmployeeTable.scss";

function EmployeeTable({
  data,
  statusOptions,
  startEditing,
  confirmSave,
  confirmDelete,
  handleChange,
  editingRow,
  editedRows,
}) {
  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Department</th>
            <th>Status</th>
            <th>Email</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => {
            const isEditing = editingRow === row._internalId;
            const current = editedRows[row._internalId] ?? row;

            return (
              <tr key={row._internalId} className={isEditing ? "editing" : ""}>
                <EditableCell
                  isEditing={isEditing}
                  value={current.id}
                  onChange={(v) => handleChange(row._internalId, "id", v)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={current.name}
                  onChange={(v) => handleChange(row._internalId, "name", v)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={current.title}
                  onChange={(v) => handleChange(row._internalId, "title", v)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={current.department}
                  onChange={(v) =>
                    handleChange(row._internalId, "department", v)
                  }
                />
                <EditableCell
                  isEditing={isEditing}
                  type="select"
                  value={current.status}
                  selectOptions={statusOptions}
                  onChange={(v) => handleChange(row._internalId, "status", v)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={current.email}
                  onChange={(v) => handleChange(row._internalId, "email", v)}
                />
                <EditableCell
                  isEditing={isEditing}
                  value={current.hours_worked}
                  onChange={(v) =>
                    handleChange(row._internalId, "hours_worked", v)
                  }
                />
                <td className="actions">
                  <EditButton
                    isEditing={isEditing}
                    onEdit={() => startEditing(row._internalId)}
                    onSaveClick={() => confirmSave(row._internalId)}
                    onDeleteClick={() => confirmDelete(row)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
