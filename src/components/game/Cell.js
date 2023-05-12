import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Circle from "../../assets/circle-blue.svg";
import Cross from "../../assets/cross.svg";
import { changeStatus } from "../../store/slice/gameSlice";

const CellDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 30%;
  border: 2px solid black;
  background-color: white;
  height: 33%;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const Cell = ({ value, pos }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (value) return;
    dispatch(changeStatus({ index: pos }));
  };
  return (
    <CellDiv onClick={handleClick}>
      {value === 1 ? (
        <Image src={Cross} />
      ) : value === -1 ? (
        <Image src={Circle} />
      ) : (
        <></>
      )}
    </CellDiv>
  );
};

export default Cell;
