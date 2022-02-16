import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { request, REQ_TRIGGER } from "../redux/reducers/request";

//type
import { RootState } from "../redux/reducers";
import { Request } from "../types/types";

const StyledInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 20px;
  fieldset {
    position: relative;
    display: inline-flex;
    align-items: center;
    border: none;
    & + fieldset {
      margin-left: 5px;
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
    label {
      margin-right: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    }
    input {
      height: 30px;
      transition: all 3s ease;
      &:focus {
        outline: 0;
        border: 2px red solid;
      }
      &[type="text"] {
        padding: 0 0 0 5px;
      }
    }
    &:not(:first-child) {
      margin-left: 50px;
    }
  }
`;

const StyledSelects = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    select {
      border: 0;
      cursor: pointer;
      &:focus {
        border: 0;
        outline: 0;
      }
    }
    div {
      margin-left: 10px;
      label {
        cursor: pointer;
      }
      input[type="checkbox"] {
        margin: 0 0 0 2px;
        cursor: pointer;
      }
    }
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
  button[type="submit"] {
    display: inline-block;
    margin-left: 30px;
    padding: 5px 10px;
    background-color: #298ac5;
    border: 0;
    outline: 0;
    color: white;
    font-size: 16px;
  }
`;

const Inputs = () => {
  const item = useSelector((state: RootState) => state.reqReducer);
  const dispatch = useDispatch();

  const firstInput = useRef<HTMLInputElement>(null);

  const [inputs, setInputs] = useState<Request>({
    startDate: "",
    endDate: "",
    category: "",
    keyword: "",
    timeUnit: "month",
    ages: [],
    device: "",
    gender: "",
  });
  const {
    startDate,
    endDate,
    category,
    keyword,
    timeUnit,
    ages,
    device,
    gender,
  } = inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    dispatch({ type: REQ_TRIGGER, payload: inputs });
    //{type:REQ, payload:inputs}로 입력한값들(inputs)를 넘겨준다

    firstInput.current?.focus();
    // setInputs({ startDate: "", endDate: "", category: "", keyword: "" });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <StyledInputBox>
          <fieldset>
            <legend>시작일자</legend>
            <label htmlFor="startDate">시작일자 : </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={onChange}
              placeholder="startDate"
              ref={firstInput}
              required
            />
          </fieldset>

          <fieldset>
            <legend>종료일자</legend>
            <label htmlFor="endDate">종료일자 : </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={onChange}
              placeholder="endDate"
              required
            />
          </fieldset>

          <fieldset>
            <legend>카테고리</legend>
            <label htmlFor="category">카테고리 : </label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={onChange}
              placeholder="category"
              required
            />
          </fieldset>

          <fieldset>
            <legend>키워드</legend>
            <label htmlFor="keyword">키워드 : </label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={keyword}
              onChange={onChange}
              placeholder="keyword"
              required
            />
          </fieldset>
        </StyledInputBox>

        <StyledSelects>
          <fieldset>
            <select
              id="timeUit"
              name="timeUnit"
              value={timeUnit}
              onChange={onChange}
            >
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="date">Date</option>
            </select>
          </fieldset>
          <fieldset>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={onChange}
            >
              <option value="">All Gender</option>
              <option value="m">M</option>
              <option value="f">F</option>
            </select>
          </fieldset>
          <fieldset>
            <select
              id="device"
              name="device"
              value={device}
              onChange={onChange}
            >
              <option value="">All Device</option>
              <option value="pc">PC</option>
              <option value="mo">MO</option>
            </select>
          </fieldset>

          <fieldset>
            {[10, 20, 30, 40, 50, 60].map((e) => {
              return (
                <div>
                  <label htmlFor={`age_${e}`}>{e}</label>
                  <input type="checkbox" id={`age_${e}`} />
                </div>
              );
            })}
          </fieldset>
          <button type="submit">submit</button>
        </StyledSelects>
      </form>
    </>
  );
};

export default Inputs;
