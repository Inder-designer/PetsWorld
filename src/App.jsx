import React, { useEffect, useState } from "react";
import Layout from "./Routes/Layout";
import { loadUser } from "./actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProduct } from "./actions/productAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      <ToastContainer position="bottom-center" newestOnTop theme="dark" />
      <Layout />
    </div>
  );
};

export default App;
