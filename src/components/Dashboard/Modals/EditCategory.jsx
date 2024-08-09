import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearErrors,
  getCategories,
  updateCategory,
} from "../../../Services/dashboard/actions/CategoryActions";
import { useSelector } from "react-redux";
import { UPDATE_CATEGORY_RESET } from "../../../Services/dashboard/constants/categoryConstants";
import Loading from "../../Loading";

const EditCategory = ({ openModal, setOpenModal, editCate, categories }) => {
  const [editValues, setEditValues] = useState({
    name: "",
    slug: "",
    order: "",
    level0: "",
    newLevel0: "",
    level1: "",
    newLevel1: "",
    id: "",
    orderNo: "",
  });
  const dispatch = useDispatch();
  const { isUpdated, error, isLoading } = useSelector(
    (state) => state.updateCategory
  );

  useEffect(() => {
    if (editCate) {
      setEditValues({
        name: editCate.level2 ? editCate.level2.name : editCate.level1.name,
        slug: editCate.level2 ? editCate.level2.slug : editCate.level1.slug,
        orderNo: editCate.level2
          ? editCate.level2.orderNo
          : editCate.level1.orderNo,
        id: editCate.level2 ? editCate.level2._id : editCate.level1._id,
        level0: editCate.level0 || "",
        level1: editCate.level2 ? editCate.level1 : "",
      });
    }
  }, [editCate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleNewLevel0Change = (e) => {
    const { value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      newLevel0: value === prevValues.level0 ? "" : value,
      newLevel1: "", // Reset newLevel1 when newLevel0 changes
    }));
  };
  const handleNewLevel1Change = (e) => {
    const { value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      newLevel1: value === prevValues.level1 ? "" : value,
    }));
  };

  // Update level1 options when level0 changes
  const level1Options =
    categories.find(
      (category) =>
        category.level0 ===
        (editValues.newLevel0 ? editValues.newLevel0 : editValues.level0)
    )?.level1 || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory(editValues));
    console.log(editValues, "editValues");
  };
  console.log(editValues);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (isUpdated) {
      setOpenModal(false);
      setEditValues({});
      dispatch({ type: UPDATE_CATEGORY_RESET });
      dispatch(getCategories());
    }
  }, [error, isUpdated]);
  return (
    <div>
      {isLoading && <Loading />}
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => {
          setOpenModal(false);
          setEditValues({});
        }}
      >
        <Modal.Header className="py-5 px-4 border-b modalHeader">
          <h5 className="uppercase text-sm font-bold text-gray-600">
            {!editCate?.level2 ? "Edit Category" : "Edit Sub-Category"}
          </h5>
        </Modal.Header>
        <Modal.Body className="modalBody overflow-visible">
          <div className="px-4 py-6 overflow-x-hidden max-h-[calc(100vh_-_140px)]">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="name" className="font-medium">
                    {!editCate?.level2 ? "Category Name" : "Sub-Category Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full block p-1 px-2 mt-2"
                    id="name"
                    name="name"
                    required
                    value={editValues.name}
                    onChange={handleChange}
                  />
                </div>
                {editCate?.level2 && (
                  <div className="mt-4">
                    <label className="font-medium">Select Category</label>
                    <select
                      className="w-full p-1 px-2 mt-2"
                      name="newLevel1"
                      value={editValues.newLevel1 || editValues.level1}
                      onChange={handleNewLevel1Change}
                    >
                      <option value="">Select Category</option>
                      {level1Options.map((level1) => (
                        <option key={level1.id} value={level1.name}>
                          {level1.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
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
                    value={editValues.slug}
                    onChange={handleChange}
                  />
                  <small className="text-gray-500">
                    The “slug” is the URL-friendly version of the name. It is
                    usually all lowercase and contains only letters, numbers,
                    and hyphens.
                  </small>
                </div>
                {/* order */}
                <div className="mt-4">
                  <label htmlFor="orderNo" className="font-medium">
                    Order No.
                  </label>
                  <input
                    type="number"
                    className="w-full block p-1 px-2 mt-2"
                    id="orderNo"
                    name="orderNo"
                    required
                    value={editValues.orderNo}
                    onChange={handleChange}
                  />
                  <small className="text-gray-500">
                    Order number determines the display order of categories in
                    the frontend.
                  </small>
                </div>
                <div className="mt-6 flex gap-10">
                  <button
                    type="submit"
                    className="bg-indigo-600 w-full text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 w-full text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700"
                    onClick={() => {
                      setOpenModal(false);
                      setEditValues({});
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditCategory;
