import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import { useNavigate } from "react-router-dom";

const OrderListTable = ({ data, handleDelProduct }) => {
  const naviagte = useNavigate();

  const columns = [
    {
      field: "images",
      headerName: "Item",
      width: 90,
      renderCell: (params) => (
        <span className="flex h-full items-center">
          <img
            src={params.row.orderItems[0].image}
            alt={params.row.orderItems[0].name || "Item"}
            style={{ height: "40px", width: "40px", marginRight: "5px" }}
          />
        </span>
      ),
    },
    {
      field: "name",
      headerName: "Product Name",
      width: 160,
      renderCell: (params) => {
        const names = params.row.orderItems.map((item) => item.name);
        const maxWidth = 150;
        const totalNames = names.length;
        const joinedNames = names.join(", ");

        // Function to truncate string and add ellipsis if it exceeds maxWidth
        const truncateString = (str, maxLength) => {
          if (str.length <= maxLength) return str;
          return str.substring(0, maxLength) + "...";
        };

        const truncatedNames = truncateString(joinedNames, maxWidth / 10); // Adjusted for approximate character width

        return (
          <span className="flex h-full items-center capitalize">
            {truncatedNames}
            {truncatedNames.endsWith("...") && totalNames > 1 && (
              <span>+{totalNames}</span>
            )}
          </span>
        );
      },
    },
    {
      field: "Customer",
      headerName: "Customer",
      width: 150,
      renderCell: (params) => (
        <span className="flex h-full items-center">
          {params.row.shippingInfo.name}
        </span>
      ),
    },
    {
      field: "items",
      headerName: "Items",
      //   type: "number",
      width: 110,
      renderCell: (params) => (
        <span className="flex h-full items-center">
          {params.row.orderItems.length}
        </span>
      ),
    },
    {
      field: "totalPrice",
      headerName: "Price",
      //   type: "number",
      width: 110,
    },
    {
      field: "paymentMethod",
      headerName: "PaymentMode",
      width: 180,
      renderCell: (params) => (
        <span className="flex h-full items-center">
          {params.row.paymentMethod === "cash"
            ? "COD"
            : params.row.paymentMethod}
        </span>
      ),
    },
    {
      field: "isPaid",
      headerName: "Payment Status",
      width: 180,
      renderCell: (params) => (
        <span className="flex h-full items-center ">
          <span
            className={` h-7 px-3 font-semibold ${
              params.row.isPaid
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            } flex items-center justify-center`}
          >
            {params.row.isPaid ? "Yes" : "No"}
          </span>
        </span>
      ),
    },
    {
      field: "orderStatus",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <span className="flex h-full items-center ">
          <span
            className={` h-7 px-3 font-semibold ${
              params.row.orderStatus === "Processing"
                ? "text-yellow-600 bg-yellow-100"
                : params.row.orderStatus === "Shipped"
                ? "text-green-600 bg-green-100"
                : params.row.orderStatus === "Delivered"
                ? "text-blue-600 bg-blue-100"
                : "text-gray-600 bg-gray-100"
            } flex items-center justify-center`}
          >
            {params.row.orderStatus}
          </span>
        </span>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      //   info,edit,delete button
      renderCell: (params) => (
        <div>
          <button
            onClick={() => naviagte(`/admin/order/${params.row.orderId}`)}
            className="inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Info
          </button>
          <button
            onClick={() => naviagte(`/admin/order/${params.row.orderId}`)}
            className="ml-2 inline-block text-sm px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-gray-800"
          >
            Track
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
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default OrderListTable;
