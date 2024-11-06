import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOrders } from "../actions/orderAction";
import product1 from "../Assets/Images/Product1.jpg";
import CurrencyFormat, { formatDate } from "../helpers/CurrencyFormatter";
import Loading from "../components/Loading";
import { Star } from "@mui/icons-material";
import ProductReview from "../components/Modals/ProductReview";
import { getUserProductsReview } from "../actions/productAction";

const Orders = () => {
  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState("");
  const { orders, error, isLoading } = useSelector((state) => state.order);
  const { reviews, isLoading: reviewLoading } = useSelector(
    (state) => state.UserProductsReview
  );

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getUserProductsReview());
  }, [dispatch]);

  useEffect(() => {
    if (
      orders &&
      orders.orders &&
      orders.orders[0] &&
      orders.orders[0].orders
    ) {
      setOrderList(orders.orders[0].orders.reverse());
    }
  }, [orders]);

  const findReview = (productId) =>
    reviews?.find((review) => review.productId === productId);

  console.log(reviews, "reviews");

  if (isLoading || reviewLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="py-10 bg-gray-50">
        <p className="text-xl font-semibold text-red-600">
          Error fetching orders. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      {orderList.length > 0 ? (
        <div className="">
          {orderList.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-md border mb-3 border-[#cacaca]"
            >
              <div className="p-4 bg-gray-100 flex justify-between items-center rounded-t-md">
                <div className="flex gap-4">
                  <div className="text-gray-600">
                    <p className="uppercase text-xs">Order placed</p>
                    <p className="text-sm">{formatDate(order.createdAt)}</p>
                  </div>
                  <div className="text-gray-600">
                    <p className="uppercase text-xs">Total</p>
                    <p className="text-sm">
                      {order.orderStatus === "Cancelled"
                        ? CurrencyFormat(0, 0)
                        : CurrencyFormat(order.totalPrice, 0)}
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    className={`text-base font-semibold flex items-center justify-end ${
                      order.orderStatus === "Delivered"
                        ? "text-blue-600"
                        : order.orderStatus === "Shipped"
                        ? "text-green-600"
                        : order.orderStatus === "Cancelled"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    <span
                      className={` w-2 h-2 rounded-full mr-1 inline-block border-2 ${
                        order.orderStatus === "Delivered"
                          ? "bg-blue-600 border-blue-600"
                          : order.orderStatus === "Shipped"
                          ? "bg-green-600 border-green-600"
                          : order.orderStatus === "Cancelled"
                          ? "bg-red-600 border-red-600"
                          : " border-gray-600"
                      }`}
                    ></span>
                    {order.orderStatus}
                  </span>
                </div>
                <div className="flex gap-4 text-right">
                  <div className="text-gray-600">
                    <p className="uppercase text-xs">
                      Order # {order.orderId}{" "}
                    </p>
                    <div className="">
                      {order.orderStatus === "Cancelled" ? (
                        ""
                      ) : (
                        <p className="text-sm">
                          <Link
                            to={`/order_details?orderId=${order.orderId}`}
                            className="hover:underline text-blue-700"
                          >
                            View order details
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {order?.orderItems.map((item, index) => (
                <div
                  key={index}
                  className="px-4 pt-4 pb-2 flex justify-between gap-4"
                >
                  <div className="flex gap-4 ">
                    <div className="w-24">
                      <img src={item.image || product1} alt="" />
                    </div>
                    <div className="">
                      <div className="flex justify-between items-center w-full">
                        <Link
                          to={`/${item.productId}`}
                          className="text-sm text-gray-600 font-medium hover:underline hover:text-blue-700"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mt-1">
                        Quantity: {item.quantity}
                      </p>
                      <div className=" flex gap-3 items-end">
                        <p className="text-sm text-gray-600 font-medium mt-1">
                          {CurrencyFormat(item.discountPrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    {order.orderStatus === "Processing" ? (
                      <button className="border border-gray-600 text-gray-600 rounded-full py-1.5 px-6 text-xs">
                        View or edit order
                      </button>
                    ) : order.orderStatus === "Delivered" ? (
                      <button
                        className="border border-blue-600 rounded-full py-1.5 px-6 text-blue-600 text-xs font-medium flex items-center gap-1 mt-4"
                        onClick={() => {
                          setOpenModal(true);
                          const review = findReview(item.productId);
                          setProduct(review || item);
                        }}
                      >
                        <Star className="!text-base" />
                        {findReview(item.productId)
                          ? "Edit Review"
                          : "Rate & Review Product"}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <ProductReview
            openModal={openModal}
            setOpenModal={setOpenModal}
            product={product}
            setProduct={setProduct}
          />
        </div>
      ) : (
        <div className="py-10">
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
      )}
    </>
  );
};

export default Orders;
