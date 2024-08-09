import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditAttributes from "../Modals/EditAttributes";

const AttributesTable = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editAttr, setEditAttr] = useState(null);
  const dataWithIndex = data?.map((row, index) => ({
    ...row,
    index: index + 1,
  }));
  const columns = [
    { field: "index", headerName: "#", width: 50 },
    { field: "name", headerName: "Attribute Name", width: 200 },
    { field: "values", headerName: "Values", width: 300 },
    { field: "level0", headerName: "Main Category", width: 150 },
    { field: "level1", headerName: "categories", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <>
          <button onClick={() => {setEditAttr(params.row); setOpenModal(true)}}>
            Edit
          </button>
          <DeleteOutline
            className="userListDelete"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];
  return (
    <div>
      <DataGrid
        rows={dataWithIndex.reverse()}
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
        disableRowSelectionOnClick
        className="relative !capitalize"
      />
      <EditAttributes openModal={openModal} setOpenModal={setOpenModal} editAttr={editAttr}/>
    </div>
  );
};

export default AttributesTable;
