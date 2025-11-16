function EditableCell({ isEditing, value, onChange, type = "text", selectOptions = [] }) {
  if (!isEditing) return <td>{value}</td>;

 

  return (
    <td>
      {type === "select" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} >
          {selectOptions.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </td>
  );
}

export default EditableCell;
