function EditableCell({ isEditing, value, onChange, onSave, type = "text", selectOptions = [] }) {
  if (!isEditing) return <td>{value}</td>;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSave) onSave();
  };

  return (
    <td>
      {type === "select" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={handleKeyDown}>
          {selectOptions.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={handleKeyDown} />
      )}
    </td>
  );
}

export default EditableCell;
