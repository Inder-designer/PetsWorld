import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Orders from "../Orders";
import OrderDetails from "../OrderDetails";

const MyAccount = () => {
  const location = useLocation();
  const [active, setActive] = useState();

  useEffect(() => {
    if (location.pathname.includes("/my/orders")) {
      setActive("My Orders");
    } else if (location.pathname.includes("/order_details")) {
      setActive("Order Detail");
    } else {
      setActive("Subscriptions");
    }
  }, [location.pathname]);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className="w-3/12">
            <ul className="bg-gray-50 py-4 flex flex-col gap-2 sticky top-6">
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `${
                      isActive && "!text-[#ff3e6c] !border-[#ff3e6c]"
                    } text-gray-500 border-l-[3px] border-transparent px-3 py-1 block hover:bg-gray-100`
                  }
                >
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my/orders"
                  className={({ isActive }) =>
                    `${
                      (active === "My Orders" || active === "Order Detail") &&
                      "!text-[#ff3e6c] !border-[#ff3e6c]"
                    } text-gray-500 border-l-[3px] border-transparent px-3 py-1 block hover:bg-gray-100`
                  }
                >
                  My Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` text-gray-500 border-l-[3px] border-transparent px-3 py-1 block hover:bg-gray-100`
                  }
                >
                  My Wishlist
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-3/4">
            {active === "My Orders" ? (
              <Orders />
            ) : active === "Order Detail" ? (
              <OrderDetails />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
