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
import ShopPage from "../Pages/ShopPage.jsx";
import ForgotPassword from "../components/Auth/ForgotPassword.jsx";
import ResetPswd from "../components/Auth/ResetPswd.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import DashboardMain from "./DashboardMain.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import Users from "../Pages/Dashboard/Users.jsx";
import Products from "../Pages/Dashboard/Products.jsx";
import AdminOrders from "../Pages/Dashboard/Orders.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Categories from "../Pages/Dashboard/Categories.jsx";
import SubCategories from "../Pages/Dashboard/SubCategories.jsx";
import Attributes from "../Pages/Dashboard/Attributes.jsx";
import Sales from "../Pages/Dashboard/Sales.jsx";
import NewProduct from "../Pages/Dashboard/NewProduct.jsx";
import EditProduct from "../Pages/Dashboard/EditProduct.jsx";
import AdminOrderDetails from "../Pages/Dashboard/OrderDetails.jsx";

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
      errorElement: <ErrorPage />,
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
          path: "/shop/:categoryName",
          element: <ShopPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
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
    {
      path: "/admin",
      element: (
        <PrivateRoute>
          <DashboardMain />
        </PrivateRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "sales",
          element: <Sales />,
        },
        {
          path: "orders",
          element: <AdminOrders />,
        },
        {
          path: "order/:id",
          element: <AdminOrderDetails />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product/create",
          element: <NewProduct />,
        },
        {
          path: "product/:id",
          element: <EditProduct />,
        },
        {
          path: "manage-users",
          element: <Users />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "sub-categories",
          element: <SubCategories />,
        },
        {
          path: "attributes",
          element: <Attributes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Layout;
