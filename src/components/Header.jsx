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
`;
export default Header;
