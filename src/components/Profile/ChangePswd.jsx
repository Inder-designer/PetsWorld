import { Field, Form, Formik } from "formik";
import React from "react";
import { UserSchemas } from "../../schema/Schema";
import { useDispatch } from "react-redux";
import { changePassword } from "../../actions/userAction";

const ChangePswd = () => {
    const dispatch = useDispatch()

    const changePswd = (values, { resetForm }) => {
        dispatch(changePassword(values, { resetForm }))
    }

  return (
    <div className=" bg-[#f6f6f6] rounded-lg">
      <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
        <h6 className="text-lg font-semibold">Change Password</h6>
      </div>
      <div className="px-5 pb-5 pt-2">
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          enableReinitialize
          validationSchema={UserSchemas.changePswdSchema}
          onSubmit={(values, { resetForm }) => changePswd(values, { resetForm })}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div>
                <label className="block mb-2 text-xs font-medium text-gray-900">
                  Old Password
                </label>
                <Field
                  type="password"
                  name="oldPassword"
                  value={values.oldPassword}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Current Password"
                />
                {touched.oldPassword && errors.oldPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.oldPassword}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="block mb-2 text-xs font-medium text-gray-900">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  value={values.newPassword}
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="New Password"
                />
                {touched.newPassword && errors.newPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.newPassword}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="block mb-2 text-xs font-medium text-gray-900">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Confirm Password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="text-white bgGradient focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5"
                >
                  Update Password
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePswd;
