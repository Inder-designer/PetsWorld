import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 6,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="thisWeekOrders" fill="#8884d8" />
          <Bar dataKey="lastWeekOrders" fill="#ff0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
