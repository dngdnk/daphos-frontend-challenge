import { useState, useEffect } from "react";
import { PopUp } from "../components/PopUp";

/* custom hook to contain all logic in the employee data table; can be modified fetch data with HTTP calls later */
export default function useEmployees(initialData) {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

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

  const confirmSave = async (id) => {
    const result = await PopUp({
      title: "Do you want to save the changes?",
      confirmText: "Save",
      denyText: "Don't Save",
      cancelText: "Cancel",
      type: "save",
    });

    if (result.isConfirmed) {
      saveRow(id);
      await PopUp({
        title: "Saved!",
        icon: "success",
        confirmText: "OK",
        type: "save",
      });
    }
  };

  const saveRow = (id) => {
    const updated = data.map((row) =>
      row._internalId === id ? editedRows[id] : row
    );
    setData(updated);
    setEditingRow(null);
  };

  const confirmDelete = async (row) => {
    const result = await PopUp({
      title: `Delete ${row.name}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "delete",
    });

    if (result.isConfirmed) {
      handleDelete(row._internalId);
      await PopUp({
        title: "Deleted!",
        icon: "success",
        confirmText: "OK",
        type: "delete",
      });
    }
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((r) => r._internalId !== id));
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
