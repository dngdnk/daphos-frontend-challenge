import { useState, useEffect } from "react";
import { PopUp } from "../components/PopUp";

/* custom hook to contain all logic in the employee data table */
export default function useEmployees(initialData) {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const [editingRow, setEditingRow] = useState(null);
  const [editedRows, setEditedRows] = useState({});

  // Start editing a row
  const startEditing = (id) => {
    setEditingRow(id);
    setEditedRows({ [id]: { ...data.find((r) => r._internalId === id) } });
  };

  // Handle field changes
  const handleChange = (id, field, value) => {
    setEditedRows((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  // Confirm save
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
    } else if (result.isDenied) {
      setEditingRow(null);
      setEditedRows((prev) => {
        const newEdited = { ...prev };
        delete newEdited[id];
        return newEdited;
      });
    }
  };

  // Save row
  const saveRow = (id) => {
    const updated = data.map((row) =>
      row._internalId === id ? editedRows[id] : row
    );
    setData(updated);
    setEditingRow(null);
  };

  // Confirm delete
  const confirmDelete = async (row) => {
    const result = await PopUp({
      title: `Delete ${row.name}?`,
      text: "Please double check carefully before deleting.",
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
    } else {
      setEditingRow(null);
      setEditedRows((prev) => {
        const newEdited = { ...prev };
        delete newEdited[row._internalId];
        return newEdited;
      });
    }
  };

  // Delete row
  const handleDelete = (id) => {
    setData((prev) => prev.filter((r) => r._internalId !== id));
    setEditingRow(null);
  };

 const addNewRow = (statusOptions = []) => {
  if (editingRow !== null) return;

  const newRow = {
    _internalId: Date.now(), 
    id: "",
    name: "",
    title: "",
    department: "",
    status: statusOptions[0] || "", 
    email: "",
    hours_worked: "",
  };

  setData((prev) => [newRow, ...prev]); 
  setEditingRow(newRow._internalId); 
  setEditedRows((prev) => ({
    ...prev,
    [newRow._internalId]: newRow,
  }));
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
    addNewRow, 
  };
}
