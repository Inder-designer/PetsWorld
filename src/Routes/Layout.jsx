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
import Checkout from "../Pages/Checkout";
import PaymentPage from "../Pages/PaymentPage";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL, CONFIG } from "../constants/apiConstants";
import OrderSuccess from "../components/OrderSuccess";
import OrderDetails from "../Pages/OrderDetails";
import Orders from "../Pages/Orders";
import SearchPage from "../Pages/SearchPage.jsx";
import ForgotPassword from "../components/Auth/ForgotPassword.jsx";
import ResetPswd from "../components/Auth/ResetPswd.jsx";

const Layout = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get(`${API_URL}/stripeapikey`, CONFIG);
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Failed to fetch Stripe API key:", error);
    }
  }
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      getStripeApiKey();
    }
  }, [isAuthenticated]);

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
          element: <ProductDetail />,
        },
        {
          path: "/search",
          element: <SearchPage/>,
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
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/checkout/payment",
          element: (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            </Elements>
          ),
        },
        {
          path: "/checkout/confirm",
          element: (
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          ),
        },
        {
          path: "/order_details",
          element: (
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my/orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/sign-in",
      element: <Auth />,
    },
    {
      path: "/password/forgot_password",
      element: <ForgotPassword />,
    },
    {
      path: "/password/reset/:token",
      element: <ResetPswd />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Layout;
