import {
    KeyboardArrowLeft,
  LockOpen,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSchemas } from "../../schema/Schema";
import { reserPassword } from "../../actions/userAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";

const ResetPswd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {token} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error, success, isLoading } = useSelector(
    (state) => state.forgotPswd
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resetPswd = (values) => {
    console.log(values);
    dispatch(reserPassword(token,values))
  };

  useEffect(() => {
    console.log(success);
    if (success) {
        navigate('/sign-in')
    }
  },[success,dispatch])

  return (
    <div className="">
    {isLoading && <Loading />}
      <div className="container mx-auto">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="border px-16 pt-10 pb-14 min-w-[450px] mx-auto ">
            <div className="text-center mb-12">

          <LockOutlined className="!text-[70px] text-red-600 mb-3"/>
            <h6 className="text-3xl text-center font-bold  text-gray-600">Reset Password</h6>
            </div>
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validationSchema={UserSchemas.resetPasswordSchema}
              enableReinitialize
              onSubmit={(values) => resetPswd(values)}
            >
              {({ values, errors, touched, setFieldValue }) => (
                <Form className="space-y-6">
                  <div>
                    <div className="relative">
                      <LockOpen className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                      <Field
                        autoComplete="false"
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10 block w-full rounded-md py-2 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 peer placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                      {showPassword ? (
                        <VisibilityOffOutlined
                          className="absolute -translate-y-2/4 top-1/2 right-4 peer-hover:opacity-70 peer-focus:opacity-70 opacity-0 !w-4 cursor-pointer hover:opacity-70 "
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <VisibilityOutlined
                          className="absolute -translate-y-2/4 top-1/2 right-4 peer-hover:opacity-70 peer-focus:opacity-70 opacity-0 !w-4 cursor-pointer hover:opacity-70 "
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </div>

                    {errors.password && touched.password ? (
                      <p className="text-start text-red-600 text-sm mt-1">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <div className="relative">
                      <LockOutlined className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                      <Field
                        autoComplete="false"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="pl-10 block w-full rounded-md py-2 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 peer placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                      {showConfirmPassword ? (
                        <VisibilityOffOutlined
                          className="absolute -translate-y-2/4 top-1/2 right-4 peer-hover:opacity-70 peer-focus:opacity-70 opacity-0 !w-4 cursor-pointer hover:opacity-70 "
                          onClick={toggleConfirmPasswordVisibility}
                        />
                      ) : (
                        <VisibilityOutlined
                          className="absolute -translate-y-2/4 top-1/2 right-4 peer-hover:opacity-70 peer-focus:opacity-70 opacity-0 !w-4 cursor-pointer hover:opacity-70 "
                          onClick={toggleConfirmPasswordVisibility}
                        />
                      )}
                    </div>

                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p className="text-start text-red-600 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="uppercase flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                    >
                      Send Link
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center mt-6 ">
              <Link to="/sign-in" className="text-xs text-gray-600 hover:text-blue-600 transition-all hover:underline flex items-center text-center justify-center">
                <KeyboardArrowLeft className="!text-lg" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPswd;
