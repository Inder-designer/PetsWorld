import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CustomTextEditor from "../../helpers/TextEditor";
import {
  DeleteOutlineOutlined,
  KeyboardBackspaceOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  clearErrors,
  createProduct,
} from "../../Services/dashboard/actions/AdminProductAction";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../Services/dashboard/actions/CategoryActions";
import { getAttributes } from "../../Services/dashboard/actions/AttributeActions";

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    // 3 level category
    level0: "",
    level1: "",
    level2: "",
    Stock: "",
    orderLimit: "",
    images: [], // Initialize images array
    slug: "",
    tags: [],
    brand: "",
    attributes: [],
  });
  const [attributesData, setAttributesData] = useState([]);
  const { isLoading, product, error } = useSelector(
    (state) => state.adminProducts
  );
  const { categories, error: cateError } = useSelector(
    (state) => state.categories
  );
  const { attributes } = useSelector((state) => state.attributes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    const tagsArray = value.split(",").map((tag) => tag.trim());
    setNewProduct({
      ...newProduct,
      tags: tagsArray,
    });
  };

  const handleDescriptionChange = (value) => {
    setNewProduct({
      ...newProduct,
      description: value,
    });
  };

  const handleProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...newProduct.images];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        updatedImages.push(reader.result);
        if (updatedImages.length === newProduct.images.length + files.length) {
          setNewProduct({
            ...newProduct,
            images: updatedImages,
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveProductImage = (index) => {
    setNewProduct({
      ...newProduct,
      images: newProduct.images.filter((_, i) => i !== index), // Remove image at index
    });
  };

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    // Check if there's no destination or the source and destination are the same
    if (!destination || source.index === destination.index) return;

    // Make a copy of the images array
    const updatedImages = Array.from(newProduct.images);

    // Remove the image from the source index
    const [movedImage] = updatedImages.splice(source.index, 1);

    // Insert the image into the destination index
    updatedImages.splice(destination.index, 0, movedImage);

    // Update the product state with the new image order
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      images: updatedImages,
    }));
  };

  //  Create Product
  const handleCreateProduct = (e) => {
    e.preventDefault();
    dispatch(createProduct(newProduct, navigate));
    console.log(newProduct);
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAttributes());
  }, [dispatch]);

  const getLevel1Options = (level0) =>
    categories?.categories.find((category) => category.level0 === level0)
      ?.level1 || [];

  const getLevel2Options = () =>
    categories?.categories
      .find((category) => category.level0 === newProduct?.level0)
      ?.level1.find((cate) => cate.name === newProduct?.level1)?.level2 || [];

  useEffect(() => {
    if (attributes) {
      setAttributesData(attributes.attributes);
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [error, attributes]);

  const filterAttr = attributesData.filter((attr) =>
    attr.level0.includes(newProduct.level0)
  );
  console.log(attributesData);
  console.log(filterAttr, "filterAttr");

  // handleAttributeChange
  const handleAttributeChange = (e) => {
    const { name, value } = e.target;

    setNewProduct((prevProduct) => {
      const existingAttributeIndex = prevProduct.attributes.findIndex(
        (attr) => attr.name === name
      );

      // If the attribute already exists, update its value
      if (existingAttributeIndex !== -1) {
        const updatedAttributes = [...prevProduct.attributes];
        const existingValues = updatedAttributes[existingAttributeIndex].values;

        // Check if the value is already present in the array
        if (existingValues.includes(value)) {
          // If present, remove it (unchecking)
          updatedAttributes[existingAttributeIndex].values =
            existingValues.filter((val) => val !== value);
        } else {
          // If not present, add it (checking)
          updatedAttributes[existingAttributeIndex].values = [
            ...existingValues,
            value,
          ];
        }

        // If the updated attribute's value array is empty, remove the attribute
        if (updatedAttributes[existingAttributeIndex].values.length === 0) {
          updatedAttributes.splice(existingAttributeIndex, 1);
        }

        return {
          ...prevProduct,
          attributes: updatedAttributes,
        };
      } else {
        // If the attribute does not exist, add it
        return {
          ...prevProduct,
          attributes: [
            ...prevProduct.attributes,
            {
              name,
              values: [value],
            },
          ],
        };
      }
    });
  };

  console.log(newProduct.attributes, "NewProduct");
  return (
    <div>
      {isLoading && <Loading />}
      <div className="flex items-center gap-3 mb-4">
        <Link
          to="/admin/products"
          className="font-semibold bg-slate-300 hover:bg-gray-400 text-white px-3 py-1 text-sm rounded-lg inline-block"
        >
          <KeyboardBackspaceOutlined />
        </Link>
        <h1 className="text-2xl font-semibold ">Add New Product</h1>
      </div>
      <form onSubmit={handleCreateProduct}>
        <div className="flex gap-5">
          <div className="w-[60%]">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div>
                <h6 className="font-medium mb-2">General Information</h6>
                <div className="p-4 border rounded-lg">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newProduct.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={newProduct.description}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="description"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Details
                    </label>
                    <CustomTextEditor
                      value={newProduct.description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="font-medium mb-2">Category & Brand</h6>
                <div className="p-4 border rounded-lg">
                  {/* select pet  */}
                  <div className="mb-4">
                    <label
                      htmlFor="level0"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Select Pet
                    </label>
                    <select
                      id="level0"
                      name="level0"
                      value={newProduct.level0}
                      onChange={handleChange}
                      className="w-full p-2 border rounded capitalize"
                      required
                    >
                      <option value="">Select Pet</option>
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

                  <div className={`mb-4 ${!newProduct.level0 && "opacity-60"}`}>
                    <label
                      htmlFor="level1"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Main Category
                    </label>
                    <select
                      id="level1"
                      name="level1"
                      value={newProduct.level1}
                      onChange={handleChange}
                      className="w-full p-2 border rounded capitalize"
                      required
                      disabled={!newProduct.level0}
                    >
                      <option value="">Select category</option>
                      {getLevel1Options(newProduct.level0).map((level1) => (
                        <option
                          key={level1.id}
                          value={level1.name}
                          className="capitalize"
                        >
                          {level1.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={`mb-4 ${!newProduct.level1 && "opacity-60"}`}>
                    <label
                      htmlFor="level2"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Sub Category
                    </label>
                    <select
                      id="level2"
                      name="level2"
                      value={newProduct.level2}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded capitalize`}
                      disabled={!newProduct.level1}
                      required
                    >
                      <option value="">Select Sub-Category</option>
                      {getLevel2Options().map((level2) => (
                        <option
                          key={level2.id}
                          value={level2.name}
                          className="capitalize"
                        >
                          {level2.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    {/* brand select */}
                    <label
                      htmlFor="brand"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Brand
                    </label>
                    <select
                      id="brand"
                      name="brand"
                      value={newProduct.brand}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select a brand</option>
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Google">Google</option>
                      <option value="Huawei">Huawei</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="OnePlus">OnePlus</option>
                      <option value="Oppo">Oppo</option>
                      <option value="Vivo">Vivo</option>
                      <option value="Asus">Asus</option>
                      <option value="Nokia">Nokia</option>
                      <option value="Sony">Sony</option>
                      <option value="LG">LG</option>
                      <option value="HTC">HTC</option>
                      <option value="Motorola">Motorola</option>
                      <option value="Nintendo">Nintendo</option>
                      <option value="Samsung Galaxy">Samsung Galaxy</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="font-medium mb-2">Pricing & Stock</h6>
                <div className="p-4 border rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block font-medium opacity-60 mb-1"
                      >
                        Base Price
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="discount"
                        className="block font-medium opacity-60 mb-1"
                      >
                        Discount %
                      </label>
                      <input
                        type="text"
                        id="discount"
                        name="discount"
                        value={newProduct.discount}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="Stock"
                        className="block font-medium opacity-60 mb-1"
                      >
                        Stock
                      </label>
                      <input
                        type="text"
                        id="Stock"
                        name="Stock"
                        value={newProduct.Stock}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="orderLimit"
                        className="block font-medium opacity-60 mb-1"
                      >
                        Order Limit
                      </label>
                      <input
                        type="text"
                        id="orderLimit"
                        name="orderLimit"
                        value={newProduct.orderLimit}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {newProduct.level0 && (
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <h6 className="font-medium mb-2">Attributes</h6>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="">
                      {filterAttr.map((attribute) => (
                        <div key={attribute.id} className="mb-4">
                          <p className="block font-medium mb-1 capitalize">
                            {attribute.name}
                          </p>
                          <div className="flex gap-4 capitalize opacity-60 text-sm font-medium flex-wrap">
                            {attribute.values.map((e, index) => (
                              <label
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="checkbox"
                                  id={attribute.name}
                                  name={attribute.name}
                                  value={e}
                                  checked={
                                    newProduct.attributes
                                      .find(
                                        (attr) => attr.name === attribute.name
                                      )
                                      ?.values.includes(e) || false
                                  }
                                  onChange={handleAttributeChange}
                                />
                                {e}
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-[40%]">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h6 className="font-medium mb-2">Product Images</h6>
              <div className="p-4 mb-4 border rounded-lg">
                <div className="gap-2">
                  <div className="relative">
                    <input
                      type="file"
                      id="productImages"
                      name="productImages"
                      accept="image/png, image/jpeg, image/jpg"
                      // multiple
                      onChange={handleProductImagesChange}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <div className="flex">
                      <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable
                          droppableId="droppable"
                          direction="horizontal"
                        >
                          {(provided) => (
                            <div
                              className="flex flex-wrap gap-4"
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {newProduct?.images.map((image, index) => (
                                <Draggable
                                  key={image}
                                  draggableId={image}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className="relative"
                                    >
                                      <img
                                        src={image}
                                        alt={`Product ${index}`}
                                        className="w-20 h-20 object-cover rounded"
                                      />
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleRemoveProductImage(index)
                                        }
                                        className="absolute w-6 h-6 flex items-center justify-center top-0 right-0 p-1 bg-red-500 rounded-full text-white"
                                      >
                                        <DeleteOutlineOutlined className="!text-sm" />
                                      </button>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}

                              <button
                                type="button"
                                className={`w-20 h-20 p-2 flex items-center justify-center !text-gray-600 border border-dashed border-blue-500 rounded-lg text-xs ${
                                  newProduct?.images?.length > 10
                                    ? "opacity-40 cursor-not-allowed "
                                    : "hover:border-blue-600 hover:border-solid"
                                }`}
                                onClick={() => {
                                  if (newProduct?.images?.length <= 10) {
                                    document
                                      .getElementById("productImages")
                                      .click();
                                  }
                                }}
                                disabled={newProduct?.images?.length > 10}
                              >
                                Upload Images
                              </button>
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h6 className="font-medium mb-2">Slug and Tags</h6>
                <div className="p-4 border rounded-lg">
                  <div className="mb-4">
                    <label
                      htmlFor="slug"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={newProduct.slug}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                    <small className="text-gray-600 text-xs">
                      Unique alphanumeric string that can be used in URLs.
                    </small>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="tags"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={newProduct.tags}
                      onChange={handleTagsChange}
                      className="w-full p-2 border rounded"
                    />
                    <small className="text-gray-600 text-xs">
                      Comma-separated list of keywords for SEO purposes.
                    </small>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={handleCreateProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
