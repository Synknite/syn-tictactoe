import React from "react";
import Logo from "../assets/tictactoe-logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={Logo} />
    </HeaderContainer>
  );
};

export default Header;
