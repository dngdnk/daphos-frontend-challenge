// /hooks/useEmployees.js
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function useEmployees(initialData) {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  // always sync filtered data with base data
  useEffect(() => {
    setFilteredData(data);
  }, [data]);


  // ----- Editing state -----
  const [editingRow, setEditingRow] = useState(null);
  const [editedRows, setEditedRows] = useState({});

  const startEditing = (id) => {
    setEditingRow(id);
    setEditedRows({ [id]: { ...data.find((r) => r._internalId === id) } });
  };

  const handleChange = (id, field, value) => {
    setEditedRows((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };


  // ----- Save -----
  const confirmSave = async (id) => {
    const result = await Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't Save",
    });

    if (result.isConfirmed) {
      saveRow(id);
      Swal.fire("Saved!", "", "success");
    }
  };

  const saveRow = (id) => {
    const updated = data.map((row) =>
      row._internalId === id ? editedRows[id] : row
    );

    setData(updated);
    setEditingRow(null);
  };


  // ----- Delete -----
  const confirmDelete = async (row) => {
    const result = await Swal.fire({
      title: `Delete ${row.name}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      handleDelete(row._internalId);
      Swal.fire("Deleted!", "", "success");
    }
  };

  const handleDelete = (id) => {
    const updated = data.filter((r) => r._internalId !== id);
    setData(updated);
    setEditingRow(null);
  };

  return {
    data,
    filteredData,
    setFilteredData,
    startEditing,
    confirmSave,
    confirmDelete,
    handleChange,
    editingRow,
    editedRows,
  };
}
