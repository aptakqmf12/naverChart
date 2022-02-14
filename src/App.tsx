import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Input from "./components/Input";
import Chart from "./components/Chart";

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

function App() {
  useEffect(() => {
    axios
      .post("/v1/datalab/shopping/category/keyword/age", {
        body: {
          startDate: "2017-08-01",
          endDate: "2017-09-30",
          timeUnit: "month",
          category: "50000000",
          keyword: "정장",
          device: "",
          gender: "",
          ages: ["10", "20"],
        },
        headers: {
          "X-Naver-Client-Id": "mpK4Xes94zbMMu3jJ09b",
          "X-Naver-Client-Secret": "NWFgxlr90B",
        },
      })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Wrapper>
      <Input />
      <Chart />
    </Wrapper>
  );
}

export default App;
