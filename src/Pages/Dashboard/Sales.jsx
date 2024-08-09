import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const Sales = () => {
  const [year, setYear] = useState(2024);

  // Static data
  const salesData = {
    2024: [
      { date: 'January', totalSales: 30, totalRevenue: 20000, refunds: 500, category: 'dog', product: 'Dog Food', paymentMode: 'Credit Card' },
      { date: 'February', totalSales: 20, totalRevenue: 15000, refunds: 300, category: 'cat', product: 'Cat Food', paymentMode: 'Cash' },
      { date: 'March', totalSales: 25, totalRevenue: 18000, refunds: 400, category: 'dog', product: 'Dog Toys', paymentMode: 'Credit Card' },
      { date: 'April', totalSales: 15, totalRevenue: 12000, refunds: 200, category: 'bird', product: 'Bird Cage', paymentMode: 'Debit Card' },
      { date: 'May', totalSales: 28, totalRevenue: 22000, refunds: 150, category: 'fish', product: 'Fish Tank', paymentMode: 'Credit Card' },
      { date: 'June', totalSales: 35, totalRevenue: 25000, refunds: 100, category: 'dog', product: 'Dog Bed', paymentMode: 'Cash' },
      // Add more months...
    ],
    // Add data for other years if needed
  };

  const dataForYear = salesData[year] || [];

  // Calculate totals
  const totalSales = dataForYear.reduce((sum, item) => sum + item.totalSales, 0);
  const totalRefunds = dataForYear.reduce((sum, item) => sum + item.refunds, 0);

  // Chart Data
  const salesByCategory = dataForYear.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.totalSales;
    return acc;
  }, {});

  const topProducts = dataForYear
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 5)
    .map(item => ({ product: item.product, sales: item.totalSales }));

  const paymentModes = dataForYear.reduce((acc, item) => {
    acc[item.paymentMode] = (acc[item.paymentMode] || 0) + item.totalSales;
    return acc;
  }, {});

  const allCategories = ['dog', 'cat', 'bird', 'fish', 'reptile']; // Example categories
  const salesByAllCategories = allCategories.reduce((acc, category) => {
    acc[category] = dataForYear
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + item.totalSales, 0);
    return acc;
  }, {});

  const chartData = {
    salesTrend: {
      labels: dataForYear.map(item => item.date),
      datasets: [{
        label: "Sales Trend",
        data: dataForYear.map(item => item.totalSales),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      }],
    },
    salesByCategory: {
      labels: Object.keys(salesByCategory),
      datasets: [{
        label: "Sales by Category",
        data: Object.values(salesByCategory),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      }],
    },
    topProducts: {
      labels: topProducts.map(item => item.product),
      datasets: [{
        label: "Top 5 Products by Sales",
        data: topProducts.map(item => item.sales),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      }],
    },
    paymentModes: {
      labels: Object.keys(paymentModes),
      datasets: [{
        label: "Payment Mode Distribution",
        data: Object.values(paymentModes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1,
      }],
    },
    salesByAllCategories: {
      labels: Object.keys(salesByAllCategories),
      datasets: [{
        label: "Sales by All Main Categories",
        data: Object.values(salesByAllCategories),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      }],
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Sales Analysis</h1>
      <div className="mb-4">
        <label htmlFor="year" className="font-medium">Select Year:</label>
        <select
          id="year"
          className="ml-2 p-2 border rounded"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          {/* Add more years if needed */}
        </select>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold">Total Sales: ${totalSales}</h2>
        <h2 className="text-lg font-semibold">Total Refunds: ${totalRefunds}</h2>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Sales by Main Category</h2>
        <Bar data={chartData.salesByCategory} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Sales by All Main Categories</h2>
        <Bar data={chartData.salesByAllCategories} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
        <Line data={chartData.salesTrend} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Top 5 Products by Sales</h2>
        <Bar
          data={chartData.topProducts}
          options={{ indexAxis: 'y' }} // Horizontal bar chart
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Payment Mode Distribution</h2>
        <Pie data={chartData.paymentModes} />
      </div>
    </div>
  );
};

export default Sales;
