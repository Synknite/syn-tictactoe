import React from "react";
import Board from "../../components/board/Board";
import styled from "styled-components";
import Blue from "../../assets/player.svg";
import Red from "../../assets/player-alt.svg";
import { useSelector } from "react-redux";

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Face = styled.img`
  height: 50%;
`;

const Score = styled.span`
  font-family: GrilledCheese BTN;
  font-size: 4.2rem;
`;

const GameContainer =() => {
  const { first, second } = useSelector((state) => state.game.score);
  return (
    <>
      <ScoreBoard>
        <Face src={Blue} />
        <Score>{first}</Score>
      </ScoreBoard>
      <Board />
      <ScoreBoard>
        <Face src={Red} />
        <Score>{second}</Score>
      </ScoreBoard>
    </>
  );
};

export default GameContainer;
