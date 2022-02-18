import React, { useState, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { REQ_TRIGGER } from "../redux/reducers/request";

//type
import { RootState } from "../redux/reducers";
import { Request, Checkboxs } from "../types/types";

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
  const dispatch = useDispatch();
  const firstInput = useRef<HTMLInputElement>(null);

  const [ages, setAges] = useState<Checkboxs[]>([
    { age: "10", checked: false },
    { age: "20", checked: false },
    { age: "30", checked: false },
    { age: "40", checked: false },
    { age: "50", checked: false },
    { age: "60", checked: false },
  ]);

  const [inputs, setInputs] = useState<Request>({
    startDate: "",
    endDate: "",
    category: "",
    keyword: "",
    timeUnit: "month",
    device: "",
    gender: "",
  });
  const { startDate, endDate, category, keyword, timeUnit, device, gender } =
    inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterdAges = ages
      .filter((age) => age.checked === true)
      .map((el) => el.age);
    dispatch({ type: REQ_TRIGGER, payload: inputs, ages: filterdAges });

    firstInput.current?.focus();
    // setInputs({ startDate: "", endDate: "", category: "", keyword: "" });
  };

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    let mapped: Checkboxs[] = [];
    mapped = [...ages];
    mapped.map((el) => {
      if (el.age === e.target.value) {
        el.checked = !el.checked;
      }
    });
    setAges(mapped);
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
            {ages.map((e) => {
              return (
                <div key={e.age}>
                  <label htmlFor={`age_${e.age}`}>{e.age}</label>
                  <input
                    type="checkbox"
                    name="ages"
                    value={`${e.age}`}
                    id={`age_${e.age}`}
                    checked={e.checked}
                    onChange={onCheckboxClick}
                  />
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
