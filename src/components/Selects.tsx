import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StyledSelects = styled.div`
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    fieldset {
      border: 0;
      select {
        border: 0;
        cursor: pointer;
        &:focus {
          border: 0;
          outline: 0;
        }
      }
      label {
        cursor: pointer;
      }
      input[type="checkbox"] {
        margin: 0;
        cursor: pointer;
        & + label {
          margin-left: 10px;
        }
      }
    }
  }
`;

const Selects = () => {
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  useEffect(() => {}, []);

  return (
    <StyledSelects>
      <form onSubmit={onSubmit}>
        <fieldset>
          <select id="timeUit">
            <option value="month" selected>
              month
            </option>
            <option value="week">week</option>
            <option value="date">date</option>
          </select>
        </fieldset>
        <fieldset>
          <select id="gender">
            <option selected>gender</option>
            <option value="m">m</option>
            <option value="f">f</option>
          </select>
        </fieldset>
        <fieldset>
          <select id="deivce">
            <option value="" selected>
              device
            </option>
            <option value="pc">pc</option>
            <option value="mo">mo</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>age</legend>
          {[10, 20, 30, 40, 50, 60].map((e) => {
            return (
              <>
                <label htmlFor={`age_${e}`}>{e}</label>
                <input type="checkbox" id={`age_${e}`} />
              </>
            );
          })}
        </fieldset>
      </form>
    </StyledSelects>
  );
};

export default Selects;
