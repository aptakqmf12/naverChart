import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledFormBox = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;

const Input = () => {
  return (
    <StyledFormBox>
      <form>
        <fieldset>
          <legend>시작일자</legend>
          <label htmlFor="startDate">시작일자 : </label>
          <input type="date" id="startDate" placeholder="startDate" />
        </fieldset>

        <fieldset>
          <legend>종료일자</legend>
          <label htmlFor="endDate">종료일자 : </label>
          <input type="date" id="endDate" placeholder="endDate" />
        </fieldset>

        <fieldset>
          <legend>카테고리</legend>
          <label>카테고리 : </label>
          <input type="number" placeholder="category" />
        </fieldset>

        <fieldset>
          <legend>키워드</legend>
          <label>키워드 : </label>
          <input type="text" placeholder="keyword" />
        </fieldset>
      </form>
    </StyledFormBox>
  );
};

export default Input;
