import React, { useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Auth from "../components/Auth/Auth";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../Pages/Profile";
import ProductDetail from "../Pages/ProductDetail";
import CartPage from "../Pages/CartPage";

const Layout = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:productId",
          element: <ProductDetail/>,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/sign-in",
      element: isAuthenticated ? <Navigate to="/" /> : <Auth />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Layout;
