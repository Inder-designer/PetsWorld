import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[200px] h-[calc(100vh_-_65px)] border-r shadow-[2px_6px_10px_1px_rgba(0,0,0,0.0705882353)] ">
      <div>
        <ul className="pt-6 overflow-auto h-[calc(100vh_-_65px)]">
          <li className={`px-8 py-2 inline-block font-semibold`}>Menu</li>
          <li className="px-2">
            <NavLink
              to="dashboard"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="sales"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Sales
            </NavLink>
          </li>
          <li className={`px-8 py-2 inline-block font-semibold`}>Management</li>
          <li className="px-2">
            <NavLink
              to="orders"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Orders
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="products"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="manage-users"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Manage Users
            </NavLink>
          </li>
          <li className={`px-8 py-2 inline-block font-semibold`}>Category</li>
          <li className="px-2">
            <NavLink
              to="categories"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Category
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="attributes"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Attributes
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="coupens"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Coupens
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="settings"
              className={({ isActive, isPending }) =>
                `px-8 py-2 inline-block w-full rounded-lg font-medium text-sm hover:bg-gray-50 hover:opacity-100 ${
                  isActive ? "opacity-100 bg-gray-50 font-medium" : isPending ? "pending" : "opacity-60"
                }`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
