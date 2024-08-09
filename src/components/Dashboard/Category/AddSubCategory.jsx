import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, clearErrors } from "../../../Services/dashboard/actions/CategoryActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddSubCategory = () => {
  const dispatch = useDispatch();
  const { categories, error } = useSelector((state) => state.categories);

  // Find level1 options based on selected level0
  const getLevel1Options = (level0) =>
    categories?.categories.find((category) => category.level0 === level0)?.level1 || [];

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  // Validation schema
  const validationSchema = Yup.object({
    level0: Yup.string().required("Select Pets is required"),
    level1: Yup.object({
      name: Yup.string().required("Sub-Category Name is required"),
      level2: Yup.object({
        name: Yup.string().required("Sub-Category Name is required"),
        slug: Yup.string()
          .matches(
            /^[a-z0-9-]+$/,
            "Slug should only contain lowercase letters, numbers, and hyphens"
          )
          .required("Slug is required"),
        orderNo: Yup.number()
          .required("Order number is required")
          .positive()
          .integer(),
      }),
    }),
  });

  // Generate slug from name
  const generateSlug = (name) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    const setNewCate = true

  return (
    <div>
      <div className="bg-white rounded-lg p-4">
        <div className="mb-5">
          <h6 className="text-lg font-semibold">Add Sub-Category</h6>
        </div>
        <Formik
          initialValues={{
            level0: "",
            level1: {
              name: "",
              level2: {
                name: "",
                slug: "",
                orderNo: "",
              },
            },
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(addCategory(values, setNewCate));
            console.log("Form submitted:", values);
            resetForm();
          }}
        >
          {({ values, errors, touched, setFieldValue, handleBlur }) => (
            <Form>
              <div>
                <label htmlFor="level0" className="font-medium">
                  Select Pets*
                </label>
                <Field
                  as="select"
                  className="w-full p-1 px-2 mt-2 capitalize"
                  name="level0"
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
                </Field>
                {errors.level0 && touched.level0 && (
                  <div className="text-red-500">{errors.level0}</div>
                )}
              </div>

              <div className="mt-4">
                <label className="font-medium">Select Parent category*</label>
                <Field
                  as="select"
                  className="w-full p-1 px-2 mt-2 capitalize"
                  name="level1.name"
                >
                  <option value="">Select Parent Category</option>
                  {getLevel1Options(values.level0).map((level1) => (
                    <option key={level1.id} value={level1.name}>
                      {level1.name}
                    </option>
                  ))}
                </Field>
                {errors.level1?.name && touched.level1?.name && (
                  <div className="text-red-500">{errors.level1.name}</div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="level2Name" className="font-medium">
                  Sub-Category Name*
                </label>
                <Field
                  type="text"
                  className="w-full block p-1 px-2 mt-2 capitalize"
                  id="level2Name"
                  name="level1.level2.name"
                  placeholder="Enter name"
                  onBlur={(e) => {
                    handleBlur(e);
                    const slug = generateSlug(e.target.value);
                    setFieldValue("level1.level2.slug", slug);
                  }}
                />
                {errors.level1?.level2?.name &&
                  touched.level1?.level2?.name && (
                    <div className="text-red-500">
                      {errors.level1.level2.name}
                    </div>
                  )}
              </div>

              <div className="mt-4">
                <label htmlFor="level2Slug" className="font-medium">
                  Slug*
                </label>
                <Field
                  type="text"
                  className="w-full block p-1 px-2 mt-2"
                  id="level2Slug"
                  name="level1.level2.slug"
                  placeholder="Enter slug"
                  pattern="^[a-z0-9-]+$"
                  title="Slug should only contain lowercase letters, numbers, and hyphens"
                />
                {errors.level1?.level2?.slug &&
                  touched.level1?.level2?.slug && (
                    <div className="text-red-500">
                      {errors.level1.level2.slug}
                    </div>
                  )}
                <small className="text-gray-500">
                  The “slug” is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </small>
              </div>

              <div className="mt-4">
                <label htmlFor="level2OrderNo" className="font-medium">
                  Order No.
                </label>
                <Field
                  type="number"
                  className="w-full block p-1 px-2 mt-2"
                  id="level2OrderNo"
                  name="level1.level2.orderNo"
                  placeholder="Enter order number"
                />
                {errors.level1?.level2?.orderNo &&
                  touched.level1?.level2?.orderNo && (
                    <div className="text-red-500">
                      {errors.level1.level2.orderNo}
                    </div>
                  )}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddSubCategory;
