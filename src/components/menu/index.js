import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 300px;
  height: 100%;
`;

const Menu = () => {
  const navigator = useNavigate();
  useEffect(() => {
    navigator("/menu");
  },[])
  return (
    <InnerContainer>
      <Card gameMode={1} />
      <Card gameMode={0} />
    </InnerContainer>
  );
};

export default Menu;
