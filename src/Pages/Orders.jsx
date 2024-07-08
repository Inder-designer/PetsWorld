import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOrders } from "../actions/orderAction";
import product1 from "../Assets/Images/Product1.jpg";
import CurrencyFormat from "../helpers/CurrencyFormatter";
import Loading from "../components/Loading";
import { Star } from "@mui/icons-material";

const Orders = () => {
  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState([]);
  const [allOrderItems, setAllOrderItems] = useState([]);

  const { orders, error, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (
      orders &&
      orders.orders &&
      orders.orders[0] &&
      orders.orders[0].orders
    ) {
      setOrderList(orders.orders[0].orders);
      const allItems = orders.orders[0].orders.flatMap((order) =>
        order.orderItems.map((item) => ({
          ...item,
          orderStatus: order.orderStatus,
          orderId: order.orderId,
        }))
      );
      setAllOrderItems(allItems.reverse());
    }
  }, [orders]);
  console.log(allOrderItems, "allOrderItems");
  console.log(orderList, "orderList");

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto max-w-[900px] text-center">
          <p className="text-xl font-semibold text-red-600">
            Error fetching orders. Please try again later.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      {allOrderItems.length > 0 ? (
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto max-w-[900px]">
            {allOrderItems &&
              allOrderItems?.map((product) => (
                <Link
                  to={`/order_details?orderId=${product.orderId}&item_id=${product.productId}`}
                  className="bg-white p-4 rounded-md flex justify-between gap-4 border mb-3 border-[#cacaca] hover:shadow-[rgba(0,0,0,0.15)_0px_1px_10px_1px]"
                  key={product._id}
                >
                  <div className="flex gap-4 ">
                    <div className="w-24">
                      <img src={product.image || product1} alt="" />
                    </div>
                    <div className="">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-sm text-gray-600 font-medium">
                          {product.name}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mt-1">
                        Quantity: {product.quantity}
                      </p>
                      <div className=" flex gap-3 items-end">
                        <p className="text-sm text-gray-600 font-medium mt-1">
                          {CurrencyFormat(product.discountPrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div>
                      <span
                        className={`text-base font-semibold flex items-center justify-end ${
                          product.orderStatus === "Delivered"
                            ? "text-blue-600"
                            : product.orderStatus === "Shipped"
                            ? "text-green-600"
                            : product.orderStatus === "Cancelled"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        <span
                          className={` w-2 h-2 rounded-full mr-1 inline-block border-2 ${
                            product.orderStatus === "Delivered"
                              ? "bg-blue-600 border-blue-600"
                              : product.orderStatus === "Shipped"
                              ? "bg-green-600 border-green-600"
                              : product.orderStatus === "Cancelled"
                              ? "bg-red-600 border-red-600"
                              : " border-gray-600"
                          }`}
                        ></span>
                        {product.orderStatus}
                      </span>
                    </div>
                    {product.orderStatus === "Delivered" && (
                      <div className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-4" onClick={() => alert('Review Modal Soon')}>
                        <Star className="!text-base" />
                        <span>Rate & Review Product</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className="py-10">
          <div className="container mx-auto max-w-[900px]">
            <div className="flex items-center justify-center flex-col">
              <img
                src="https://rsrc.easyeat.ai/mweb/no-orders2.webp"
                alt=""
                width="300px"
              />
              <p className="text-lg font-bold text-gray-800 mb-3 mt-5">
                Oops! No order place yet
              </p>
              <Link
                to="/"
                className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
