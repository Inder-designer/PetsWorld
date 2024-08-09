import { LocalPhoneOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOrders } from "../actions/orderAction";
import CurrencyFormat, {
  Progress,
  ProgressBar,
  dateConverter,
  formatDate,
} from "../helpers/CurrencyFormatter";
import product1 from "../Assets/Images/Product1.jpg";
import Loading from "../components/Loading";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [orderItems, setOrderItems] = useState(null);
  const orderId = new URLSearchParams(location.search).get("orderId");
  const { error, loading } = useSelector((state) => state.order);
  const { orders } = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      const foundOrder = orders[0].orders.find((e) => e.orderId === orderId);
      setOrderItems(foundOrder);
    }
  }, [orders, orderId]);
  console.log(orderItems);

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-[900px]">
        {loading ? (
          <Loading />
        ) : orderItems ? (
          <div className="bg-white border rounded py-5 px-10">
            <div className="border-b pb-3">
              <p className="text-sm text-gray-400">
                Placed On:{" "}
                <span className="text-gray-600 font-medium">
                  {formatDate(orderItems.createdAt)}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Order No:{" "}
                <span className="text-gray-800 font-medium ">
                  {orderItems.orderId}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Price Details:{" "}
                <span className="font-medium text-gray-600">Total: </span>{" "}
                <span className="font-medium text-gray-600">
                  {orderItems.totalPrice}
                </span>
              </p>
            </div>
            <div className="border-b py-3">
              <p className="text-sm text-gray-400">Updates sent to:</p>
              <p className=" font-medium text-sm text-gray-600 mt-3">
                <LocalPhoneOutlined className="!text-lg" />{" "}
                {orderItems.shippingInfo.mobile}
              </p>
            </div>
            <div className="border-b py-3">
              <p className="text-sm text-gray-400">Shiping Address:</p>
              <p className="font-bold text-gray-800 mt-3 text-sm">inder</p>
              <p className="text-sm text-gray-600 mt-1">
                <span>{orderItems.shippingInfo.streetAddress}</span>,{" "}
                <span>{orderItems.shippingInfo.locality}</span>
              </p>
              <p className="text-sm text-gray-600">
                <span>{orderItems.shippingInfo.city}</span>,{" "}
                <span>{orderItems.shippingInfo.state}</span>-{" "}
                <span>{orderItems.shippingInfo.pincode}</span>
              </p>
            </div>
            <div className="py-3">
              <p className="text-sm text-gray-400">Payment Mode:</p>
              <p className="text-sm text-gray-00 mt-3">
                {orderItems.paymentMethod === "cash" && "Cash/Pay On Delivery"}
              </p>
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-end">
                <p className="text-base text-gray-800 font-bold">
                  Items in this order
                </p>
                <div>
                  <Progress progress={orderItems.orderStatus} size="sm" />
                  <div className="mt-2 relative pb-5">
                    <span className="text-xs absolute bottom-0 left-[-28px]">
                      {formatDate(orderItems.createdAt)}
                    </span>
                    <span className="text-xs absolute bottom-0 right-[28px]">
                      {orderItems.deliveredAt &&
                        formatDate(orderItems.deliveredAt)}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" mt-4">
                {orderItems?.orderItems?.map((product) => (
                  <div
                    className="bg-white p-4 rounded-md flex gap-4 border mb-4"
                    key={product._id}
                  >
                    <Link
                      to={`/${product.productId}+${encodeURIComponent(
                        product.name
                      )}`}
                      className="w-24"
                    >
                      <img src={product.image || product1} alt="" />
                    </Link>
                    <div>
                      <div className="flex justify-between items-center">
                        <Link
                          to={`/${product.productId}+${encodeURIComponent(
                            product.name
                          )}`}
                          className="text-sm hover:text-blue-600 text-gray-600 font-medium"
                        >
                          {product.name}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 font-normal mt-1">
                        Quantity: {product.quantity}
                      </p>
                      <div className=" flex gap-3 items-end">
                        <p className="text-sm text-gray-600 font-medium mt-1">
                          {CurrencyFormat(product.discountPrice)}
                        </p>
                        <del className="text-xs  text-gray-600 font-normal mt-1">
                          {CurrencyFormat(product.price)}
                        </del>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-sm font-medium mb-0.5 text-gray-600 text-600 flex justify-between">
                  Item(s) Subtotal:{" "}
                  <span>{CurrencyFormat(orderItems.subTotal)}</span>
                </p>
                {orderItems.totalDiscount > 0 && (
                  <p className="text-sm font-medium mb-0.5 text-gray-600 text-600 flex justify-between">
                    Item(s) Discount{" "}
                    <span>{CurrencyFormat(orderItems.totalDiscount)}</span>
                  </p>
                )}
                {orderItems.shippingPrice > 0 && (
                  <p className="text-sm font-medium mb-0.5 text-gray-600 text-600 flex justify-between">
                    Delivery Charges{" "}
                    <span>{CurrencyFormat(orderItems.shippingPrice)}</span>
                  </p>
                )}
                <p className="text-lg pt-2 border-t font-semibold mt-2.5 text-600 flex justify-between">
                  Total Order Price{" "}
                  <span>{CurrencyFormat(orderItems.totalPrice)}</span>
                </p>
                {orderItems.totalDiscount > 0 && (
                  <p className="text-sm text-gray-400">
                    You saved{" "}
                    <span className="text-[#318c72] font-medium">
                      {CurrencyFormat(orderItems.totalDiscount)}
                    </span>{" "}
                    on this order
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-500_cb8336.png"
              alt=""
              width="300px"
            />
            <p className="text-lg font-bold text-gray-800 mb-3 mt-5">
              Oops! Something went wrong. Please try again later
            </p>
            <Link
              to="/my/orders"
              className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded"
            >
              Go to My Orders
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
