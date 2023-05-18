import React from "react";
import { Routes, Route } from "react-router-dom";

import { Game } from "../container/game";
import { Menu } from "../container/menu";


const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default Main;
