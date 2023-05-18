import React from "react";
import Blue from "../../assets/player.svg";
import Red from "../../assets/player-alt.svg";
import Robot from "../../assets/robot.svg";


const CardComponent = ({ gameMode, clickHandler }) => {
  const handleClick = () => {
    clickHandler(gameMode)
  };
  return (
    <div className="card__container" onClick={handleClick}>
      <img src={Blue} alt="blue"/>
      <label>VS</label>
      {gameMode ? <img src={Red} alt="red"/> : <img src={Robot} alt="robot"/>}
    </div>
  );
};

export default CardComponent;
