import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {Cell} from "../cell";
import BackArrow from '../../assets/arrow-back.svg'
import { resetStatus, resetScore, reset } from "../../store/slice/gameSlice";
import { useNavigate } from "react-router-dom";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-left: 80px;
  margin-right: 80px;
`;

const Square = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-bottom: 30px;
`;

const Cover = styled.div`
display: flex;
align-items: center;
justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Result = styled.span`
  font-family: 'GrilledCheese BTN';
  font-size: 5rem;
  font-weight: bold ;
  color: rgb(199, 170, 253);
  text-align: center;

  animation: 0.8s ease-in-out infinite up-down;
  
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

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`

const Button = styled.span`
flex: 1;
font-size: 24pt;
font-weight: bold;
color: yellow;
margin: 10px;
text-align: center;
img {
  width: 50%;
}
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
`

const BoardComponent = () => {
  const { gameStatus, winner, isFinished } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const nextRoundHandle = () => {
    dispatch(resetStatus());
  }
  const resetScoreHandle = () => {
    dispatch(resetScore())
  }
  const backHandle = () => {
    dispatch(reset())
    navigator("/menu");
  }
  return (
    <GameContainer>
      <Square>
        {isFinished && (
          <Cover>
            <Result>{winner}</Result>
            <span style={{fontFamily:"GrilledCheese BTN"}}>123</span>
          </Cover>
        )}
        <>
          {gameStatus.map((item, index) => (
            <Cell value={item} key={index} pos={index} />
          ))}
        </>
      </Square>
      <ToolBar>
        <Button onClick={backHandle}><img src={BackArrow} alt="back-arrow"/></Button>
        {isFinished && <><Button onClick={nextRoundHandle}>Next Round</Button>
        <Button onClick={resetScoreHandle}>Reset Score</Button></>}
      </ToolBar>
    </GameContainer>
  );
};

export default BoardComponent;
