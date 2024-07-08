import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { userLogout } from "../actions/userAction";
import { Button } from "flowbite-react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Main = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
