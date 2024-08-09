import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import { useNavigate } from "react-router-dom";

const ProductListTable = ({ data, handleDelProduct }) => {
    const naviagte = useNavigate()

  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    {
      field: "images",
      headerName: "Product",
      width: 90,
      //   show only 1 images array[0].url
      renderCell: (params) => (
        <span className="flex h-full items-center"
        >
          <img
            src={params.row.images[0]?.url}
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
      field: "categories",
      headerName: "Category",
      width: 110,
      renderCell: (params) => {
        return <span>{params.row.categories?.level0?.name}</span>;
      }
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
    },
    {
      field: "discount",
      headerName: "Discount",
      type: "number",
      width: 110,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      //   info,edit,delete button
      renderCell: (params) => (
        <div>
          <button
            onClick={() => naviagte(`/admin/product/${params.row._id}`)}
            className="inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelProduct(params.row._id)}
            className="ml-2 inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Delete
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

export default ProductListTable;
