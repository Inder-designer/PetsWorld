import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import { useNavigate } from "react-router-dom";
import userImg from "../../../Assets/Images/userLogo.png"

const UserListTable = ({ data, handleDelProduct }) => {
    const naviagte = useNavigate()

  const columns = [
    {
      field: "avatar",
      headerName: "Profile",
      width: 90,
      //   show only 1 images array[0].url
      renderCell: (params) => (
        <span className="flex h-full items-center"
        >
          <img
            src={params.row.avatar?.url || userImg}
            alt={params.row.name}
            style={{ height: "40px", width: "40px" }}
          />
        </span>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "role",
      headerName: "Role",
      width: 220,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      //   info,edit,delete button
      renderCell: (params) => (
        <div className="flex gap-2 items-center h-full">
          <button
            // onClick={() => naviagte(`/admin/product/${params.row._id}`)}
            className="inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Edit
          </button>
          <button
            onClick={() => naviagte(`/admin/product/${params.row._id}`)}
            className="inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Info
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserListTable;