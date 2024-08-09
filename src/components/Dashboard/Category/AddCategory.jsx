import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCategory,
  clearErrors,
} from "../../../Services/dashboard/actions/CategoryActions";
import { useSelector } from "react-redux";

const AddCategory = () => {
  const [newCate, setNewCate] = useState({
    level0: "",
    level1: {
      name: "",
      slug: "",
      orderNo: "",
    },
  });
  const dispatch = useDispatch();
  const { categories, error } = useSelector((state) => state.categories);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "level0") {
      setNewCate((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewCate((prev) => ({
        ...prev,
        level1: {
          ...prev.level1,
          [name]: value.toLowerCase(),
        },
      }));
    }
  };

  const handleBlur = () => {
    // Update slug only if it is empty
    if (!newCate.level1.slug) {
      setNewCate((prev) => ({
        ...prev,
        level1: {
          ...prev.level1,
          slug: newCate.level1.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(newCate,setNewCate));
    console.log("Form submitted:", newCate);
    // Reset form fields
    
  };

  console.log(newCate.level0);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [error]);

  return (
    <div>
      <div className="bg-white rounded-lg p-4">
        <div className="mb-5">
          <h6 className="text-lg font-semibold">Add Category</h6>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="font-medium">
                Category Name*
              </label>
              <input
                type="text"
                className="w-full block p-1 px-2 mt-2 capitalize"
                id="name"
                name="name"
                required
                placeholder="Enter category name"
                onChange={handleChange}
                onBlur={handleBlur} // Add onBlur event handler
                value={newCate.level1.name}
              />
            </div>
            <div className="mt-4">
              <label className="font-medium">Select Pets*</label>
              <select
                className="w-full p-1 px-2 mt-2 capitalize"
                name="level0"
                required
                value={newCate.level0}
                onChange={handleChange}
              >
                <option value="">Select Pets</option>
                {categories?.categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.level0}
                    className="capitalize"
                  >
                    {category.level0}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="slug" className="font-medium">
                Slug*
              </label>
              <input
                type="text"
                className="w-full block p-1 px-2 mt-2"
                id="slug"
                name="slug"
                required
                placeholder="Enter slug"
                onChange={handleChange}
                value={newCate.level1.slug}
                pattern="^[a-z0-9-]+$" // Regex pattern for slug
                title="Slug should only contain lowercase letters, numbers, and hyphens"
              />
              <small className="text-gray-500">
                The “slug” is the URL-friendly version of the name. It is
                usually all lowercase and contains only letters, numbers, and
                hyphens.
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
                placeholder="Enter order number"
                onChange={handleChange}
                value={newCate.level1.orderNo}
              />
              <small className="text-gray-500">
                Order number determines the display order of categories in the
                frontend.
              </small>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full font-semibold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
