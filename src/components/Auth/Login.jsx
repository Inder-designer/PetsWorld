import {
  LockOpen,
  MailOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { UserSchemas } from "../../schema/Schema.js";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/userAction.js";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to access location
  const redirect = new URLSearchParams(location.search).get("redirect");
  const redirectPath = location.state?.from || "/";
  console.log(redirectPath,"redirectPath");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, redirectPath])

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(userLogin(email, password));
  };
  if (isAuthenticated) {
    return <Navigate to={redirectPath} />; // Redirect if already authenticated
  }
  return (
    <div className="login">
      <div className="bg-[#f9fafb] flex flex-col">
        <div className="px-8 justify-center flex flex-col flex-1 ">
          <div className="sm:max-w-[380px] sm:w-full sm:mx-auto mt-10">
            <div className="px-8 rounded-lg py-10 bg-white shadow">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                enableReinitialize
                validationSchema={UserSchemas.login}
                onSubmit={(values) => handleLogin(values)}
              >
                {({ values, errors, touched }) => (
                  <Form className="space-y-6">
                    <div>
                      <div className="relative">
                        <MailOutline className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                        <Field
                          autoComplete="false"
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={values.email}
                          className="pl-10 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="text-start text-red-600 text-sm mt-1">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <div className="relative">
                        <LockOpen className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                        <Field
                          autoComplete="false"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Passwrod"
                          value={values.password}
                          className="pl-10 pr-9 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 peer placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <Link
                to="/password/forgot_password"
                className="cursor-pointer text-sm text-blue-600 hover:underline mt-1 inline-block"
              >
                Forgot Password?
              </Link>
              <div className="socialLogin">
                <div className="mt-[40px] relative">
                  <div className="text-center flex absolute inset-0 top-1/2">
                    <div className="border-t-[1px] w-full border-[#e5e7eb]"></div>
                  </div>
                  <div className="justify-center font-medium flex relative text-sm">
                    <span className="text-[#111827] px-6 bg-white">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="gap-4 grid mt-6 grid-cols-2">
                  <a
                    href=""
                    className=" ring-offset-0 shadow-[inset_0_0_0_calc(1px_+_0px_)_#d1d5db] text-[#111827] ring-[#d1d5db] ring-inset font-semibold text-sm py-2 px-3 bg-white rounded-md justify-center gap-3 items-center w-full flex hover:bg-[#f9fafb] transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      ></path>
                    </svg>
                    <span className="font-semibold text-sm">Google</span>
                  </a>
                  <a
                    href=""
                    className=" ring-offset-0 shadow-[inset_0_0_0_calc(1px_+_0px_)_#d1d5db] text-[#111827] ring-[#d1d5db] ring-inset font-semibold text-sm py-2 px-3 bg-white rounded-md justify-center gap-3 items-center w-full flex hover:bg-[#f9fafb] transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-semibold text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;