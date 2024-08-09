import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Dashboard/Header/Header";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import 'react-quill/dist/quill.snow.css';

const Dashboard = () => {
  return (
    <div >
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-[calc(100%_-_200px)] py-6 px-9 bg-[#f4f2ff] overflow-x-hidden h-[calc(100vh_-_65px)]">
          <Outlet />
          {/* <Navigate to="/admin/dashboard" /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
