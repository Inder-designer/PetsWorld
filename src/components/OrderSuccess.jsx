import {
  AutoFixHighOutlined,
  KeyboardArrowRight,
  Verified,
  VerifiedOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderAction";
import { Link, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [order, setOrder] = useState(null);
  const orderId = new URLSearchParams(location.search).get("orderId");

  const { orders } = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      const foundOrder = orders[0].orders.find((e) => e.orderId === orderId);
      setOrder(foundOrder);
    }
  }, [orders, orderId]);
  console.log(order);

  if (!order) {
    return null; // Placeholder or loading state while fetching data
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-[900px]">
        <div className="bg-white border rounded py-5 px-36">
          <div className="py-10 px-4 border rounded">
            <div className="text-center">
              <Verified className="text-[#49B899] !text-[40px]" />
              <h6 className="text-3xl text-[#49B899] font-bold mt-5 mb-4">
                Order Confirmed
              </h6>
              <p className="text-base text-[#282c3f]">
                Your order is confirmed. You will receive an order confirmation
                email/SMS shortly with the expected delivery date for your
                items.
              </p>
            </div>
          </div>
          <div className="py-6 px-4 border rounded mt-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-600">Delivering to:</p>
                <p className="text-sm font-semibold text-gray-800 mt-3 mb-1 ">
                  <span className="">{order.shippingInfo.name} </span>
                  <span className="">| {order.shippingInfo.mobile}</span>
                </p>
                <p className="text-sm text-gray-600 text-nowrap max-w-full overflow-hidden eclipse text-ellipsis">
                  <span>{order.shippingInfo.streetAddress}</span>,{" "}
                  <span>{order.shippingInfo.locality}</span>,{" "}
                  <span>{order.shippingInfo.city}</span>,{" "}
                  <span>{order.shippingInfo.state}</span>-{" "}
                  <span>{order.shippingInfo.pincode}</span>
                </p>
              </div>
              <div>
                <img
                  src="	https://constant.myntassets.com/checkout/assets/img/delhiveryPerson_17-03-2021.png"
                  alt=""
                />
              </div>
            </div>
            <Link to={`/order_details?orderId=${orderId}`} className="w-fit uppercase text-xs flex items-center font-bold py-2 px-3 border text-[#ff3e6c] border-[#ff3e6c] rounded mt-4">
              Order Details <KeyboardArrowRight className="!text-lg" />
            </Link>
            <div className="flex gap-3 mt-4 pt-3 border-t">
              <AutoFixHighOutlined className=" !text-gray-500 !text-xl" />
              <p className="text-xs !text-gray-500">
                You can Track/View/Modify order from orders page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
