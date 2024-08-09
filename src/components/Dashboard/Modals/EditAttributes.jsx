import { Modal } from "flowbite-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../Services/dashboard/actions/CategoryActions";
import { Form, Formik, Field } from "formik";
import { ClearRounded } from "@mui/icons-material";
import {
  getAttributes,
  updateAttribute,
} from "../../../Services/dashboard/actions/AttributeActions";
import { UPDATE_ATTRIBUTE_RESET } from "../../../Services/dashboard/constants/attributesConstants";

const EditAttributes = ({ openModal, setOpenModal, editAttr }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { error, isUpdated } = useSelector((state) => state.updateAttribute);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const getLevel1Options = (level0Selections) => {
    const uniqueOptions = new Set();

    level0Selections.forEach((level0) => {
      const level1Options =
        categories?.categories.find((category) => category.level0 === level0)
          ?.level1 || [];

      level1Options.forEach((option) => {
        uniqueOptions.add(option.name); // Add only the name to ensure uniqueness
      });
    });

    return [...uniqueOptions].map((name) => ({ name }));
  };

  const getLevel2Options = (level0Selections, level1Selections) => {
    const uniqueOptions = new Set();

    level0Selections.forEach((level0) => {
      const level1Options =
        categories?.categories.find((category) => category.level0 === level0)
          ?.level1 || [];

      level1Selections.forEach((level1) => {
        const level2Options =
          level1Options.find((cate) => cate.name === level1)?.level2 || [];

        level2Options.forEach((option) => {
          uniqueOptions.add(option.name); // Add only the name to ensure uniqueness
        });
      });
    });

    return [...uniqueOptions].map((name) => ({ name }));
  };

  const handleRemoveValue = (values, index, setFieldValue, name) => {
    setFieldValue(
      name,
      values.filter((_, i) => i !== index)
    );
    if (name === "level1") {
      setFieldValue("level2", []);
    }
    console.log(values);
  };

  const handleAddValue = (event, values, setFieldValue) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      setFieldValue("attributeValue", [
        ...values.attributeValue,
        event.target.value.trim(),
      ]);
      event.target.value = "";
      event.preventDefault(); // Prevent form submission
    }
  };

  const handleLevel1Change = (e, setFieldValue, values) => {
    // if values.level1 === e.target.value then don't save
    if (values.level1.includes(e.target.value)) return;
    setFieldValue("level1", [...values.level1, e.target.value]);
    setFieldValue("level2", []);
    console.log(values.level1);
  };

  const handleLevel2Change = (e, setFieldValue, values) => {
    if (values.level2.includes(e.target.value)) return;
    setFieldValue("level2", [...values.level2, e.target.value]);
    console.log(values.level1);
  };

  const handleSubmit = (values) => {
    const id = editAttr._id;
    const val = {
      name: values.attributeName,
      values: values.attributeValue,
      level0: values.level0,
      level1: values.level1,
      level2: values.level2,
      variant: values.variant,
    };
    dispatch(updateAttribute(val, id));
    console.log(val, id);
  };
console.log(editAttr,"editAttr");
  useEffect(() => {
    if (isUpdated) {
      dispatch({ type: UPDATE_ATTRIBUTE_RESET });
      setOpenModal(false);
      dispatch(getAttributes());
    }
  }, [isUpdated]);

  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <Modal.Header className="py-5 px-4 border-b modalHeader">
          <p className="uppercase text-sm font-bold text-gray-600">
            Edit Attribute
          </p>
        </Modal.Header>
        <Modal.Body className="modalBody overflow-visible">
          <div className="px-4 py-6 overflow-x-hidden max-h-[calc(100vh_-_140px)]">
            <Formik
              initialValues={{
                level0: editAttr?.level0 || [],
                level1: editAttr?.level1 || [],
                level2: editAttr?.level2 || [],
                attributeName: editAttr?.name || "",
                attributeValue: editAttr?.values || [],
                variant: editAttr?.variant || "",
              }}
              enableReinitialize
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="attributeName"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Attribute Name
                    </label>
                    <Field
                      type="text"
                      id="attributeName"
                      name="attributeName"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="attributeValue"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Values
                    </label>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="mb-1 py-2 px-2">
                        <p className="flex flex-wrap gap-1.5">
                          {values.attributeValue.map((value, index) => (
                            <span
                              className="bg-gray-500 capitalize font-medium !text-white text-xs flex items-center px-2 pl-1 py-1 rounded-sm"
                              key={index}
                            >
                              <ClearRounded
                                className="!text-lg pr-0.5 cursor-pointer"
                                onClick={() =>
                                  handleRemoveValue(
                                    values.attributeValue,
                                    index,
                                    setFieldValue,
                                    "attributeValue"
                                  )
                                }
                              />
                              {value}
                            </span>
                          ))}
                        </p>
                      </div>
                      <input
                        type="text"
                        id="attributeValue"
                        name="attributeValue"
                        className="w-full p-2 border-none"
                        onKeyDown={(e) =>
                          handleAddValue(e, values, setFieldValue)
                        }
                        placeholder="Add Value"
                      />
                    </div>
                  </div>
                  {/* variant true or false */}
                  <div className={`mb-4 `}>
                    <div className="flex items-center text-sm gap-2">
                      <p className="block font-medium opacity-60">Variant:</p>
                      <div>
                         {" "}
                        <label htmlFor="true">
                          <Field
                            type="radio"
                            id="true"
                            name="variant"
                            className="mr-1 w-3 h-3"
                            value="yes"
                            checked={values.variant === "yes"}
                            onChange={() => setFieldValue("variant", "yes")}
                          />
                          Yes
                        </label>
                      </div>
                      <div>
                         {" "}
                        <label htmlFor="false">
                          <Field
                            type="radio"
                            id="false"
                            name="variant"
                            className="mr-1 w-3 h-3"
                            value="no"
                            checked={values.variant === "no"}
                            onChange={() => setFieldValue("variant", "no")}
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="level0"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Select Pet
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {categories?.categories.map((category) => (
                        <label
                          key={category.level0}
                          className="font-medium text-sm mb-2 capitalize flex items-center gap-2"
                        >
                          <Field
                            type="checkbox"
                            name="level0"
                            value={category.level0}
                            className="p-2 border rounded"
                            checked={values.level0.includes(category.level0)}
                            onChange={() => {
                              const newSelection = values.level0.includes(
                                category.level0
                              )
                                ? values.level0.filter(
                                    (val) => val !== category.level0
                                  )
                                : [...values.level0, category.level0];
                              setFieldValue("level0", newSelection);
                              setFieldValue("level1", []);
                              setFieldValue("level2", []);
                            }}
                          />
                          {category.level0}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className={`mb-4 ${!values.level0 && "opacity-60"}`}>
                    <label
                      htmlFor="level1"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Select Category
                    </label>
                    <div className="border rounded-lg">
                      {values.level1.length > 0 && (
                        <div className="mb-1 py-2 px-2">
                          <p className="flex flex-wrap gap-1.5">
                            {values.level1.map((value, index) => (
                              <span
                                className="bg-gray-500 capitalize font-medium !text-white text-xs flex items-center px-2 pl-1 py-1 rounded-sm"
                                key={index}
                              >
                                <ClearRounded
                                  className="!text-lg pr-0.5 cursor-pointer"
                                  onClick={() =>
                                    handleRemoveValue(
                                      values.level1,
                                      index,
                                      setFieldValue,
                                      "level1"
                                    )
                                  }
                                />
                                {value}
                              </span>
                            ))}
                          </p>
                        </div>
                      )}
                      <Field
                        as="select"
                        id="level1"
                        name="level1"
                        className="w-full p-2 border rounded capitalize"
                        disabled={!values.level0.length}
                        onChange={(e) =>
                          handleLevel1Change(e, setFieldValue, values)
                        }
                      >
                        <option value="">Select Category</option>
                        {getLevel1Options(values.level0).map((cate) => (
                          <option
                            key={cate.id}
                            value={cate.name}
                            disabled={values.level1.includes(cate.name)}
                            className={`capitalize ${
                              values.level1.includes(cate.name) &&
                              "underline text-blue-600"
                            }`}
                          >
                            {cate.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className={`mb-4`}>
                    <label
                      htmlFor="level2"
                      className="block font-medium text-sm opacity-60 mb-2"
                    >
                      Sub Category
                    </label>
                    <div className="border rounded-lg">
                      {values.level2.length > 0 && (
                        <div className="mb-1 py-2 px-2">
                          <p className="flex flex-wrap gap-1.5">
                            {values.level2.map((value, index) => (
                              <span
                                className="bg-gray-500 capitalize font-medium !text-white text-xs flex items-center px-2 pl-1 py-1 rounded-sm"
                                key={index}
                              >
                                <ClearRounded
                                  className="!text-lg pr-0.5 cursor-pointer"
                                  onClick={() =>
                                    handleRemoveValue(
                                      values.level2,
                                      index,
                                      setFieldValue,
                                      "level2"
                                    )
                                  }
                                />
                                {value}
                              </span>
                            ))}
                          </p>
                        </div>
                      )}
                      <Field
                        as="select"
                        id="level2"
                        name="level2"
                        className={`w-full p-2 border rounded capitalize`}
                        // multiple
                        disabled={!values.level1.length}
                        onChange={(e) =>
                          handleLevel2Change(e, setFieldValue, values)
                        }
                      >
                        <option value="">Select Sub-Category</option>
                        {getLevel2Options(values.level0, values.level1).map(
                          (level2) => (
                            <option
                              key={level2.id}
                              value={level2.name}
                              disabled={values.level2.includes(level2.name)}
                              className={`capitalize ${
                                values.level2.includes(level2.name) &&
                                "underline text-blue-600"
                              }`}
                            >
                              {level2.name}
                            </option>
                          )
                        )}
                      </Field>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditAttributes;
