import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getAPI } from "../api";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
//types
import { RootState } from "../redux/reducers";
import { Request } from "../types/types";

const Chart = () => {
  const response = useSelector((state: RootState) => state.resReducer);
  const request = useSelector((state: RootState) => state.reqReducer);
  const [data, setData] = useState<Request[]>([]);

  // 렌더링시,응답값이 바뀔때마다 데이터 갱신
  useEffect(() => {
    getAPI(request).then((res) => setData(res.data.results[0].data));
  }, [request]);

  return (
    <>
      <LineChart width={1200} height={500} data={data}>
        <Line
          animationDuration={500}
          type="monotone"
          dataKey="ratio"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default Chart;
