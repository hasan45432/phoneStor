"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// داده‌های فرضی برای نمودار
const data = [
  { date: "02/1/1", sale: 2000 },
  { date: "02/1/2", sale: 5000 },
  { date: "02/1/3", sale: 7000 },
  { date: "02/1/4", sale: 1000 },
  { date: "02/1/5", sale: 9000 },
];

const SalesChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data} width={1000} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sale"
            stroke="#000"
            fillOpacity={1}
            fill="rgb(52 211 153)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
