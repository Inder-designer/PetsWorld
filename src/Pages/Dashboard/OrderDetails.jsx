import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  clearErrors,
  getSingleOrder,
} from "../../Services/dashboard/actions/OrderActions";
import CurrencyFormat from "../../helpers/CurrencyFormatter";
import Invoice from "../../helpers/Invoice";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null); // Initialize as null
  const { id } = useParams();
  const { error, order, isLoading } = useSelector((state) => state.singleOrder);

  useEffect(() => {
    dispatch(getSingleOrder(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (order) {
      setData(order.order);
    }
  }, [error, order, dispatch]);

  const formattedDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if dateString is undefined or null

    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  console.log(data);

  return (
    <div>
      <h6 className="text-2xl font-medium text-gray-700">
        Order <span className="text-gray-900">#{data?.orderId}</span>
      </h6>
      <div className="text-sm text-gray-600 border-t border-b py-2 border-gray-300 mt-4 font-medium flex justify-between">
        <div>
          <span className="px-3 border-r border-gray-300 leading-3">
            {data ? formattedDate(data.createdAt) : ""}
          </span>
          <span className="px-3 border-r border-gray-300 leading-3">
            {data ? `${data.orderItems.length} items` : ""}
          </span>
          <span className="px-3 border-r border-gray-300 leading-3">
            {data ? `Total ${CurrencyFormat(data.totalPrice)}` : ""}
          </span>
          <span
            className={`ml-3 leading-3 p-1 px-2 text-xs ${
              data?.isPaid
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {data?.isPaid ? "Paid" : "UnPaid"}
          </span>
        </div>
        <Invoice data={data}/>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-4 ">
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md bg-white">
          <h6 className="text-gray-700 font-medium bg-gray-50 py-2 text-center">
            Customer:
          </h6>
          <div className="py-3 px-4">
            <p className="text-gray-500 capitalize text-base font-medium">
              {data?.shippingInfo?.name}
            </p>
            <p className="text-gray-500 capitalize text-sm">
              {data?.shippingInfo?.email}
            </p>
            <p className="text-gray-500 capitalize text-sm">
              Mobile: {data?.shippingInfo?.mobile}
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md bg-white">
          <h6 className="text-gray-700 font-medium bg-gray-50 py-2 text-center">
            Shipped To:
          </h6>
          <div className="py-3 px-4">
            <p className="text-gray-500 capitalize text-base font-medium mb-1">
              {data?.shippingInfo?.name}{" "}
              <span className="text-green-700 border-green-700 border rounded-full font-medium py-0.5 px-2 text-xs">
                {data?.shippingInfo?.addressType}
              </span>
            </p>
            <p className="text-gray-500 capitalize font-normal mb-0.5 text-sm">
              {data?.shippingInfo?.streetAddress}
            </p>
            <p className="text-gray-500 capitalize font-normal mb-0.5 text-sm">
              {data?.shippingInfo?.city}, {data?.shippingInfo?.state}, (
              {data?.shippingInfo?.pincode})
            </p>
            <p className="text-gray-500 capitalize font-normal mb-0.5 text-sm">
              Mobile: {data?.shippingInfo?.mobile}
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md bg-white">
          <h6 className="text-gray-700 font-medium bg-gray-50 py-2 text-center">
            Payment Method:
          </h6>
          <div className="py-3 px-4">
            <p className="text-gray-500 text-base font-medium capitalize">
              {data?.paymentMethod}
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md bg-white">
          <h6 className="text-gray-700 font-medium bg-gray-50 py-2 text-center">
            Order Status:
          </h6>
          <div className="py-3 px-4">
            <p className="text-gray-500 text-base font-medium capitalize">
              {data?.orderStatus}
            </p>
            {data?.isDelivered && (
              <p className="text-gray-500 text-sm font-medium capitalize">
                Delivered At: {formattedDate(data?.deliveredAt)}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-6 mt-5 border border-gray-300 shadow-md">
        <h6 className="px-6 text-lg font-medium text-gray-700">Items</h6>
        <div className="mt-3 pt-3 border-t px-6">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pr-4 py-2 text-sm text-gray-600 uppercase tracking-wider w-24">
                  Product
                </th>
                <th className="px-4 py-2 text-sm text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-sm text-gray-600 uppercase tracking-wider text-center">
                  Quantity
                </th>
                <th className="px-4 py-2 text-sm text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2 text-sm text-gray-600 uppercase tracking-wider">
                  Discount
                </th>
                <th className="pl-4 py-2 text-sm text-gray-600 uppercase tracking-wider text-end">
                  SubTotal
                </th>
              </tr>
            </thead>
            <tbody className="border-t">
              {data?.orderItems.map((item, index) => (
                <tr key={item.index} className="border-b">
                  <td className="pr-4 py-2.5 text-sm text-gray-800">
                    <Link to={`/${item.productId}`}>
                      <img src={item.image} alt="" width="40px" />
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-sm text-gray-800 capitalize">
                    <Link
                      to={`/${item.productId}`}
                      className="hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-sm text-gray-800 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-2.5 text-sm text-gray-800">
                    {CurrencyFormat(item.price)}
                  </td>
                  <td className="px-4 py-2.5 text-sm text-gray-800">
                    -{CurrencyFormat(item.price - item.discountPrice)}
                  </td>
                  <td className="pl-4 py-2.5 text-sm text-gray-800 text-end">
                    {CurrencyFormat(item.discountPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <p className="pt-2 text-sm flex justify-between font-medium text-gray-700">
              Shipping <span>{CurrencyFormat("40")}</span>
            </p>
            <p className="pt-2 text-sm flex justify-between font-medium text-gray-700">
              Taxes <span>{CurrencyFormat(data?.taxPrice)}</span>
            </p>
            <p className="pt-2 text-sm flex justify-between font-medium text-gray-700">
              Promotion Applied: <span>{CurrencyFormat("-40")}</span>
            </p>
            <p className="pt-2 text-lg flex justify-between font-medium text-gray-700 border-t mt-2">
              Total: <span>{CurrencyFormat(data?.totalPrice)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
