import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CurrencyFormat from "../../../../helpers/CurrencyFormatter";
import './lineChart.css'

const LineCharts = ({ data }) => {
  const formatNumber = (number) => {
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(0)}M`;
    }
    if (number >= 1000) {
      return `${(number / 1000).toFixed(0)}k`;
    }
    return number;
  };
  const CustomTooltip = ({ payload }) => {
    if (!payload || payload.length === 0) return null;
  
    // Find the data items for currentYear and lastYear
    const currentYearItem = payload.find(item => item.dataKey === 'currentYear');
    const lastYearItem = payload.find(item => item.dataKey === 'lastYear');
  
    // Ensure values are safely accessed
    const currentYearValue = currentYearItem ? currentYearItem.value : null;
    const lastYearValue = lastYearItem ? lastYearItem.value : null;
  
    // Ensure payload[0].payload.name is available
    const name = payload[0]?.payload?.name || '';
  
    return (
      <div className="custom-tooltip bg-white px-2 py-3 border border-gray-400">
        <span>{name}</span>
        {currentYearValue !== null && (
          <p className="label text-[#8884d8]">{`Current Year: ${CurrencyFormat(currentYearValue, 0)}`}</p>
        )}
        {lastYearValue !== null && (
          <p className="label text-[#ff0000] mt-1">{`Last Year: ${CurrencyFormat(lastYearValue, 0)}`}</p>
        )}
      </div>
    );
  };
  return (
    <div className="lineChart">

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 6,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatNumber} />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend content={<}/> */}
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
