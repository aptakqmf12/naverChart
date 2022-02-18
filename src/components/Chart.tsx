import React, { useState, useEffect } from "react";
import { getAPI } from "../api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
//types
import { RootState } from "../redux/reducers";
import { Response } from "../types/types";

const Chart = () => {
  const request = useSelector((state: RootState) => state.reqReducer);
  const [data, setData] = useState<Response[]>([]);
  const [filterdDataArr, setFilterdDataArr] = useState<any[]>([]);

  const groupBy = (array: Response[], prop: string): any => {
    return array.reduce(function (acc: any, obj: any) {
      let key = obj[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  };

  useEffect(() => {
    getAPI(request).then((res) => setData(res.data.results[0].data));
    // data를 그루핑
    const filterdObj = groupBy(data, "group");
    const filterdArr = Object.values(filterdObj);
    setFilterdDataArr(filterdArr);
  }, [request]);

  return (
    <>
      <LineChart width={1200} height={500}>
        {filterdDataArr.map((data) => {
          return (
            <Line
              key={data.group + data.ratio}
              animationDuration={500}
              type="monotone"
              data={data}
              dataKey="ratio"
              stroke="#ec000c"
              activeDot={{ r: 8 }}
              yAxisId="left"
            />
          );
        })}

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="period" />

        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default Chart;
