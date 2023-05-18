import React, { useCallback } from "react";
import styled from "styled-components";
import { Card } from "../../components/card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMode } from "../../store/slice/gameSlice";

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 300px;
  height: 100%;
`;

const MenuContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = useCallback(gameMode => {
    dispatch(setMode(gameMode));
    if(!gameMode)return;
    navigate("/game");
  },[dispatch, navigate]);
  return (
    <InnerContainer>
      <Card gameMode={1} clickHandler={clickHandler} />
      <Card gameMode={0} clickHandler={clickHandler} />
    </InnerContainer>
  );
};

export default MenuContainer;
