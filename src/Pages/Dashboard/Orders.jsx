import React, { useEffect, useState } from "react";
import Table from "../../components/Dashboard/Table/Table";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  clearErrors,
  getAllOrders,
} from "../../Services/dashboard/actions/OrderActions";
import OrderListTable from "../../components/Dashboard/Table/OrderListTable";

const Orders = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, orders, error } = useSelector(
    (state) => state.adminOrders
  );

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getAllOrders());
  }, [dispatch, error]);

  useEffect(() => {
    if (orders) {
      const orderList = orders.orders.reduce((acc, order) => {
        acc.push(...order.orders);
        return acc;
      }, []);
      // Sort the orders by createdAt in ascending order
      const sortedOrderList = orderList.sort((a, b) => new Date(b.createdAt)-new Date(a.createdAt)) ;

      setData(sortedOrderList);
    }
  }, [orders]);

  const isSameDay = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const todayDate = new Date();
  const totalShipped = data.filter((e) => e.orderStatus === "Shipped");
  const totalDelivered = data.filter((e) => e.orderStatus === "Delivered");
  const totalCancelled = data.filter((e) => e.orderStatus === "Cancelled");
  const newOrders = data.filter((e) => isSameDay(e.createdAt, todayDate));
  console.log(data, "data");

  return (
    <div>
      <div className="flex gap-5 mb-5">
        <div className="py-4 px-6  flex flex-col bg-white rounded-2xl">
          <div className="flex justify-between gap-3">
            <span className="font-medium text-lg text-gray-600">Total Orders:</span>
            <span className="font-medium text-lg">{data?.length}{data?.length > 10 &&"+"}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="font-medium text-lg text-gray-600">New Orders:</span>
            <span className="font-medium text-lg">{newOrders?.length}{newOrders?.length > 10 &&"+"}</span>
          </div>
        </div>
        <div className="py-4 px-6  grid grid-cols-2 gap-x-5 bg-white rounded-2xl">
          <div className="flex justify-between gap-3">
            <span className="font-medium text-lg text-gray-600">Total Shipped:</span>
            <span className="font-medium text-lg">{totalShipped?.length}{totalShipped?.length > 10 &&"+"}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="font-medium text-lg text-gray-600">Total Delivered:</span>
            <span className="font-medium text-lg">{totalDelivered?.length}{totalDelivered?.length > 10 &&"+"}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="font-medium text-lg text-gray-600">Total Cancelled:</span>
            <span className="font-medium text-lg">{totalCancelled?.length}{totalCancelled?.length > 10 &&"+"}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center pl-4 mb-5">
          <Link to="/admin/orders" className="text-lg font-semibold">
            All Orders
          </Link>
        </div>
        <OrderListTable data={data} />
      </div>
    </div>
  );
};

export default Orders;
