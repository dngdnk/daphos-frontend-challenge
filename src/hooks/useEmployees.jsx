import { useState, useEffect } from "react";
import { PopUp } from "../components/PopUp";
import { sortById } from "../helpers/SortByID";

/**
 * Custom hook to manage employee table data and editing state.
 */
export default function useEmployees(initialData) {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [editedRows, setEditedRows] = useState({});

  useEffect(() => {
    setFilteredData(sortById(data));
  }, [data]);

  /** Start editing a row */
  const startEditing = (id) => {
    setEditingRow(id);
    setEditedRows({ [id]: { ...data.find((row) => row._internalId === id) } });
  };

  /** Handle field changes in a row */
  const handleChange = (id, field, value) => {
    setEditedRows((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  /** Confirm saving changes to a row */
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
      exitEditing(id);
    }
  };

  /** Save changes to a row */
  const saveRow = (id) => {
    setData((prev) =>
      sortById(
        prev.map((row) => (row._internalId === id ? editedRows[id] : row))
      )
    );

    setEditingRow(null);
  };

  /** Confirm deletion of a row */
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
      exitEditing(row._internalId);
    }
  };

  /** Delete a row */
  const handleDelete = (id) => {
    setData((prev) => sortById(prev.filter((row) => row._internalId !== id)));
    setEditingRow(null);
  };

  /** Add a new row to input a new employee*/
  const addNewRow = (statusOptions = [], departmentOptions = []) => {
    if (editingRow !== null) return;

    const newRow = {
      _internalId: Date.now(),
      id: "",
      name: "",
      title: "",
      department: "",
      status: "",
      email: "",
      hours_worked: "",
    };

    setData((prev) => sortById([newRow, ...prev]));
    setEditingRow(newRow._internalId);
    setEditedRows((prev) => ({ ...prev, [newRow._internalId]: newRow }));
  };

  /** Exit edit mode without saving changes */
  const exitEditing = (id) => {
    setEditingRow(null);

    setEditedRows((prev) => {
      const updated = { ...prev };
      const row = updated[id];

      delete updated[id];

      if (row) {
        const isEmpty = Object.entries(row)
          .filter(([key]) => key !== "_internalId")
          .every(([_, value]) => value === "");

        if (isEmpty) {
          setData((prevData) =>
            prevData.filter((item) => item._internalId !== id)
          );
        }
      }

      return updated;
    });
  };

  return {
    data,
    filteredData,
    setFilteredData,
    editingRow,
    editedRows,
    startEditing,
    handleChange,
    confirmSave,
    confirmDelete,
    addNewRow,
    exitEditing,
  };
}
