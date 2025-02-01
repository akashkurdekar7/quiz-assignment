import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;

export default Header;
