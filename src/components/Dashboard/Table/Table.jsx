import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";

const Table = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const data = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Targaryen", firstName: "Daenerys", age: null },
  ];
  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-1 px-2 pl-3">ID</th>
            <th className="py-1 px-2 ">Name</th>
            <th className="py-1 px-2 ">Age</th>
            <th className="py-1 px-2 pr-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id} className="hover:bg-slate-100 px-3">
              <td className="py-1 px-2 pl-3">{user.id}</td>
              <td className="py-1 px-2">{user.firstName}</td>
              <td className="py-1 px-2">{user.lastName}</td>
              <td className="py-1 px-2 pr-3">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
