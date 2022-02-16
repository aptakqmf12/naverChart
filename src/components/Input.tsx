import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

//type
import { RootState } from "../redux/reducers";

const StyledInput = styled.div`
  fieldset {
    position: relative;
    display: inline-flex;
    align-items: center;
    & + fieldset {
      margin-left: 10px;
    }
    legend {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      overflow: hidden;
      font-size: 0;
    }
  }
`;

interface Props {
  legend: string;
  inputType: string;
  inputId: string;
}
const Input: React.FC<Props> = ({ legend, inputType, inputId }) => {
  const val = useSelector((state: RootState) => state.reqReducer);

  return (
    <StyledInput>
      <fieldset>
        <legend>{legend}</legend>
        <label htmlFor={inputId}>{legend} : </label>
        <input type={inputType} id={inputId} placeholder={inputId} />
      </fieldset>
      <div>값은 : {val + ".category"}</div>
    </StyledInput>
  );
};

export default Input;
