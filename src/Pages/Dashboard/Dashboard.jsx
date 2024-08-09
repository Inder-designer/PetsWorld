import React, { useEffect, useState } from "react";
import SCards from "../../components/Dashboard/Cards/SCards";
import LineCharts from "../../components/Dashboard/Charts/LineCharts/LineCharts";
import BarCharts from "../../components/Dashboard/Charts/BarChart/BarCharts";
import Table from "../../components/Dashboard/Table/Table";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Services/dashboard/actions/UserActions";
import { getAllProducts } from "../../Services/dashboard/actions/AdminProductAction";
import { getAllOrders } from "../../Services/dashboard/actions/OrderActions";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import moment from "moment";

const Dashboard = () => {
  const [userData, setUserData] = useState();
  const [productData, setProductData] = useState();
  const [ordersData, setOrdersData] = useState();
  const {
    isLoading: usersLoading,
    users,
    error: usersError,
  } = useSelector((state) => state.adminUsers);
  const {
    isLoading: productsLoading,
    product,
    error: productsError,
  } = useSelector((state) => state.adminProducts);
  const {
    isLoading: ordersLoading,
    orders,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setUserData(users);
    }
    if (orders) {
      setOrdersData(orders);
    }
    if (product) {
      setProductData(product);
    }
  }, [users, orders, product]);

  const orderList = ordersData?.orders.reduce((acc, order) => {
    acc.push(...order.orders);
    return acc;
  }, []);

  const calculateWeeklyOrders = (orderList) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const thisWeekStart = moment().startOf("week");
    const lastWeekStart = moment().subtract(1, "week").startOf("week");
    const thisWeekEnd = moment().endOf("week");
    const lastWeekEnd = moment().subtract(1, "week").endOf("week");

    const initialData = daysOfWeek.map((day) => ({
      name: day,
      thisWeekOrders: 0,
      lastWeekOrders: 0,
    }));

    orderList?.forEach((order) => {
      const orderDate = moment(order.createdAt);
      const day = orderDate.format("ddd"); // Get day of the week (e.g., "Sun")

      if (orderDate.isBetween(thisWeekStart, thisWeekEnd, "day", "[]")) {
        const index = daysOfWeek.indexOf(day);
        initialData[index].thisWeekOrders += 1;
      } else if (orderDate.isBetween(lastWeekStart, lastWeekEnd, "day", "[]")) {
        const index = daysOfWeek.indexOf(day);
        initialData[index].lastWeekOrders += 1;
      }
    });

    return initialData;
  };

  const data = [
    { name: "Jan", currentYear: 30000, lastYear: 1000 },
    { name: "Feb", currentYear: 20000, lastYear: 1500 },
    { name: "Mar", currentYear: 27000, lastYear: 60000 },
    { name: "Apr", currentYear: 18000, lastYear: 22000 },
    { name: "May", currentYear: 23000, lastYear: 25000 },
    { name: "Jun", currentYear: 34000, lastYear: 28000 },
    { name: "Jul", lastYear: 35000 },
    { name: "Aug", lastYear: 28000 },
    { name: "Sep", lastYear: 20000 },
    { name: "Oct", lastYear: 22000 },
    { name: "Nov", lastYear: 24000 },
    { name: "Dec", lastYear: 28000 },
  ];

  if (usersLoading || productsLoading || ordersLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <SCards
          data={userData?.users?.length}
          title="Total Customers"
          color="purple-100"
        />
        <SCards
          data={productData?.productsCount}
          title="Total Products"
          color="yellow-100"
        />
        <SCards data={orderList?.length} title="Total Orders" color="red-100" />
        <SCards
          data={ordersData?.totalAmount}
          title="Total Sales"
          color="green-100"
        />
      </div>
      <div className="mt-6 flex gap-6">
        <div className="bg-white rounded-2xl p-6 pl-0 w-[70%]">
          <div className="flex justify-between items-center pl-16 pr-4 mb-5">
            <h6 className="text-lg font-semibold">Sales Trend</h6>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#8884d8] inline-block"></span>
                <span className="text-xs font-semibold">Current year</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff0000] inline-block"></span>
                <span className="text-xs font-semibold">Last year</span>
              </span>
            </div>
          </div>
          <LineCharts data={data} />
        </div>
        <div className="bg-white rounded-2xl p-6 pl-0 w-[30%]">
          <div className="flex justify-between items-center pl-10 mb-5">
            <h6 className="text-lg font-semibold">New Orders</h6>
            <span>
              <span className="flex items-center gap-1.5 mb-1">
                <span className="w-3 h-3 rounded-full bg-[#8884d8] inline-block"></span>
                <span className="text-xs font-semibold">Current Week</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff0000] inline-block"></span>
                <span className="text-xs font-semibold">Last Week</span>
              </span>
            </span>
          </div>
          <BarCharts data={calculateWeeklyOrders(orderList)} />
        </div>
      </div>
      <div className="mt-6 flex gap-6">
        <div className="bg-white rounded-2xl p-6 w-[70%]">
          <div className="flex justify-between items-center pl-4 mb-5">
            <Link to="/admin/orders" className="text-lg font-semibold">
              All Orders
            </Link>
          </div>
          <Table />
        </div>
        <div className="bg-white rounded-2xl p-6 pl-0 w-[30%]">
          <div className="flex justify-between items-center pl-16 mb-5">
            <h6 className="text-lg font-semibold">New Orders</h6>
          </div>
          <BarCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
