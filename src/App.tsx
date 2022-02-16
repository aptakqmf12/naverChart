import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//components
import Inputs from "./components/Inputs";
import Chart from "./components/Chart";
//types
import { RootState } from "./redux/reducers";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

function App() {
  const request = useSelector((state: RootState) => state.reqReducer);
  const response = useSelector((state: any) => state.resReducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Inputs />
      <Chart />
    </Wrapper>
  );
}

export default App;
