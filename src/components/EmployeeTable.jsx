import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "../styles/EmployeeTable.scss";

function EmployeeTable({ data, statusOptions }) {
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
            <th>Overtime</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => (
            <tr key={key} className="dataItem">
              <td className="actions">
                <EditRoundedIcon className="editButton" />
                <DeleteRoundedIcon className="deleteButton" />
              </td>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.title}</td>
              <td>{value.department}</td>
              <td className="statusDropdown">
                <select defaultValue={value.status}>
                  {statusOptions.map((status, i) => (
                    <option key={i} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td>{value.email}</td>
              <td>{value.hours_worked}</td>
              <td>{value.overtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default EmployeeTable;

//   const AddMember = () => {
//     const handleValues = (event) => {
//       event.preventDefault();
//       const id = event.target.elements.id.value;
//       const name = event.target.elements.name.value;
//       const title = event.target.elements.title.value;
//       const department = event.target.elements.department.value;
//       const email = event.target.elements.email.value;
//       const newEmployee = {
//         id,
//         name,
//         title,
//         department,
//         email,
//       };
//     };

//     return (
//       <form className="addForm" onSubmit={handleValues}>
//         <input type="text" name="id" placeholder="Enter ID" />
//         <input type="text" name="name" placeholder="Enter Name" />
//         <input type="text" name="title" placeholder="Enter Title" />

//         <input type="text" name="department" placeholder="Enter Department" />
//         <input type="text" name="email" placeholder="Enter Email" />

//         <input type="text" name="status" placeholder="Enter Status" />
//         <input type="text" name="hours" placeholder="Enter Hours" />
//         <input type="text" name="overtime" placeholder="Enter Overtime" />

//         <button type="submit">ADD NEW EMPLOYEE</button>
//       </form>
//     );
//   };
