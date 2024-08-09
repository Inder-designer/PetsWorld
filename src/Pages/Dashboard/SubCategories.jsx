import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";

const SubCategories = () => {
  const handleDelete = (id) => {
    // Logic to handle the delete action
    console.log(`Deleting category with id: ${id}`);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Category",
      width: 180,
    },
    { field: "parentCate", headerName: "Parent Category", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/edit-category/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const data = [
    { id: 1, name: "dry", parentCate: "dog" },
    { id: 2, name: "wet", parentCate: "cat" },
    { id: 3, name: "Snow", parentCate: "dog" },
    { id: 4, name: "Steel Bowls", parentCate: "Bowls" },
    { id: 5, name: "service", parentCate: "cat" },
    { id: 6, name: "Snow", parentCate: "dog" },
    { id: 7, name: "bowls", parentCate: "dog" },
    { id: 8, name: "service", parentCate: "cat" },
    { id: 9, name: "Snow", parentCate: "dog" },
    { id: 10, name: "bowls", parentCate: "dog" },
    { id: 11, name: "service", parentCate: "cat" },
  ];
  return (
    <div className="flex gap-6">
      <div className="w-[60%]">
        <div className="bg-white rounded-lg">
          <div className="mb-5 px-4 pt-4">
            <h6 className="text-lg font-semibold">Sub-Categories</h6>
          </div>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            checkboxSelection
            disableRowSelectionOnClick
            className="relative"
          />
        </div>
      </div>
      <div className="w-[40%]">
        <div className="bg-white rounded-lg p-4">
          <div className="mb-5">
            <h6 className="text-lg font-semibold">Add Sub-Category</h6>
          </div>
          <div>
            <form>
              <div>
                <label htmlFor="name" className="font-medium">
                  Sub-Category Name
                </label>
                <input
                  type="text"
                  className="w-full block p-1 px-2 mt-2"
                  id="name"
                  name="name"
                  required
                />
              </div>
              {/* select multiple parent category with select tag */}
              <div className="mt-4">
                <label className="font-medium">Select Main Category</label>
                <select
                  className="w-full block p-1 px-2 mt-2"
                  name="parentCate"
                >
                  <option value="">Select Parent Category</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="font-medium">Select Parent Category</label>
                <select
                  className="w-full block p-1 px-2 mt-2"
                  name="parentCate"
                >
                  <option value="">Select Parent Category</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* slug */}
              <div className="mt-4">
                <label htmlFor="slug" className="font-medium">
                  Slug
                </label>
                <input
                  type="text"
                  className="w-full block p-1 px-2 mt-2"
                  id="slug"
                  name="slug"
                  required
                />
                <small className="text-gray-500">
                  The “slug” is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </small>
              </div>
              {/* order */}
              <div className="mt-4">
                <label htmlFor="order" className="font-medium">
                  Order No.
                </label>
                <input
                  type="number"
                  className="w-full block p-1 px-2 mt-2"
                  id="order"
                  name="order"
                  required
                />
                <small className="text-gray-500">
                  The order of the sub-categories. Lower number means higher
                  order.
                </small>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full font-semibold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Add Sub-Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
