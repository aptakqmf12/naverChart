import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const StyledBox = styled.div``;

const data = [
  {
    title: "정장",
    keyword: ["정장"],
    data: [
      {
        period: "2017-08-01",
        group: "10",
        ratio: 9.7021,
      },
      {
        period: "2017-09-01",
        group: "10",
        ratio: 13.55561,
      },
      {
        period: "2017-08-01",
        group: "20",
        ratio: 57.88466,
      },
      {
        period: "2017-09-01",
        group: "20",
        ratio: 100,
      },
    ],
  },
];

interface Props {
  lineDatas?: {
    period: string;
    group: string;
    ratio: number;
  };
}

const Chart: React.FC<Props> = ({ lineDatas }) => {
  const [lineData, setLineData] = useState<any>(null);
  return (
    <>
      <LineChart width={400} height={400} data={data[0].data}>
        <Line
          type="monotone"
          dataKey="ratio"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default Chart;
