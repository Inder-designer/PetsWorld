import {
  KeyboardArrowLeft,
  LockOutlined,
  MailOutline,
} from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../actions/userAction";
import { Link } from "react-router-dom";
import ResetEmailSend from "../Modals/ResetEmailSend";
import Loading from "../Loading";

const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const { error, message, isLoading } = useSelector(
    (state) => state.forgotPswd
  );

  const forgotPswd = (values) => {
    console.log(values);
    setEmail(values.email);
    dispatch(forgotPassword(values, setOpenModal));
  };

  useEffect(() => {
    if (message) {
      // setOpenModal(true)
    }
  }, [dispatch, message]);

  return (
    <div className="">
      {isLoading && <Loading />}
      <div className="container mx-auto">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="border px-16 pt-10 pb-14 w-[450px] mx-auto ">
            <div className="text-center mb-12">
              <LockOutlined className="!text-[70px] text-red-600 mb-3" />
              <h6 className="text-3xl text-center font-bold  text-gray-600">
                Forgot Password
              </h6>
              <p className="text-sm mt-3">
                Enter your email and we'll send you a link to reset your
                password.
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
              }}
              enableReinitialize
              onSubmit={(values) => forgotPswd(values)}
            >
              {({ values, errors, touched, setFieldValue }) => (
                <Form className="space-y-6">
                  <div>
                    <div className="relative">
                      <MailOutline className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                      <Field
                        autoComplete="false"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="pl-10 block w-full rounded-md py-2 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="uppercase flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send Link
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center mt-6 ">
              <Link
                to="/sign-in"
                className="text-xs text-gray-600 hover:text-blue-600 transition-all hover:underline flex items-center text-center justify-center"
              >
                <KeyboardArrowLeft className="!text-lg" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      {email && (
        <ResetEmailSend
          openModal={openModal}
          setOpenModal={setOpenModal}
          email={email}
        />
      )}
    </div>
  );
};

export default ForgotPassword;
