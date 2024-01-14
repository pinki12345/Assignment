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

const data = [
  {
    name: "2012",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2013",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2014",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2015",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2016",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2017",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2018",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "2019",
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "2020",
    uv: 3490,
    pv: 5300,
    amt: 2100,
  },
  {
    name: "2021",
    uv: 3490,
    pv: 7000,
    amt: 2100,
  },
];

const ChartPage = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={335}>
        <BarChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartPage;
