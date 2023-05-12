import React from "react";
import styled from "styled-components";
import Blue from "../../assets/player.svg";
import Red from "../../assets/player-alt.svg";
import Robot from "../../assets/robot.svg";
import { setMode } from "../../store/slice/gameSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 4px solid black;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  &:hover {
    cursor: pointer;
    animation: 0.6s ease-in-out infinite up-down;
  }
  @keyframes up-down {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const VSLabel = styled.div`
  font-size: 25pt;
  margin: 25px;
`;

const Face = styled.img`
  height: 50%;
`;

const CardComponent = ({ gameMode }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMode(gameMode));
    if(!gameMode)return;
    navigator("/game");
  };
  return (
    <CardWrapper onClick={handleClick}>
      <Face src={Blue} />
      <VSLabel style={{fontFamily:"GrilledCheese BTN"}}>VS</VSLabel>
      {gameMode ? <Face src={Red} /> : <Face src={Robot} />}
    </CardWrapper>
  );
};

export default CardComponent;
