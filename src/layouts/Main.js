import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Menu from "../components/menu";
import Game from "../components/game";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </Container>
  );
};

export default Main;
