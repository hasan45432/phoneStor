"use client";
import React from "react";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

// داده‌های فرضی برای نمودار
const data = [
  { date: "02/1/1", sale: 2000, data: 1000 },
  { date: "02/1/2", sale: 5000, data: 2000 },
  { date: "02/1/3", sale: 7000, data: 3000 },
  { date: "02/1/4", sale: 1000, data: 4000 },
  { date: "02/1/5", sale: 9000, data: 5000 },
];

export default function MyLineChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sale" stroke="black" />
          <Line type="monotone" dataKey="data" stroke="#1ABA1A" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
