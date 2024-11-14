import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CurrencyFormat from "../../../../helpers/CurrencyFormatter";
import "./lineChart.css";

const LineCharts = ({ orderList }) => {
  // Helper function to get the month name
  const getMonthName = (monthIndex) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[monthIndex];
  };

  // Calculate total sales for each month
  const monthlySalesData = useMemo(() => {
    const salesData = {};

    orderList?.forEach((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth(); // 0 = January, 11 = December
      const year = date.getFullYear();
      const currentYear = new Date().getFullYear();

      // Use the month name as a unique key for display, adding separate fields for current and last year totals.
      const monthName = getMonthName(month);

      if (!salesData[monthName]) {
        salesData[monthName] = {
          name: monthName,
          monthIndex: month,
          currentYear: 0,
          lastYear: 0,
        };
      }

      // Add to the appropriate year’s total for each month
      if (year === currentYear) {
        salesData[monthName].currentYear += order.totalPrice;
      } else if (year === currentYear - 1) {
        salesData[monthName].lastYear += order.totalPrice;
      }
    });

    // Convert the object to an array and sort by monthIndex to ensure chronological order
    return Object.values(salesData).sort((a, b) => a.monthIndex - b.monthIndex);
  }, [orderList]);

  // Custom Tooltip to display sales information
  const CustomTooltip = ({ payload }) => {
    if (!payload || payload.length === 0) return null;

    const currentYearItem = payload.find(
      (item) => item.dataKey === "currentYear"
    );
    const lastYearItem = payload.find((item) => item.dataKey === "lastYear");

    const currentYearValue = currentYearItem ? currentYearItem.value : null;
    const lastYearValue = lastYearItem ? lastYearItem.value : null;
    const name = payload[0]?.payload?.name || "";

    return (
      <div className="custom-tooltip bg-white px-2 py-3 border border-gray-400">
        <span>{name}</span>
        {currentYearValue !== null && (
          <p className="label text-[#8884d8]">{`Current Year: ${CurrencyFormat(
            currentYearValue,
            0
          )}`}</p>
        )}
        {lastYearValue !== null && (
          <p className="label text-[#ff0000] mt-1">{`Last Year: ${CurrencyFormat(
            lastYearValue,
            0
          )}`}</p>
        )}
      </div>
    );
  };
  console.log(monthlySalesData);
  return (
    <div className="lineChart">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={300}
          data={monthlySalesData}
          margin={{
            top: 5,
            right: 6,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) =>
              value >= 1000 ? `${value / 1000}k` : value
            }
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="currentYear"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="lastYear" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
