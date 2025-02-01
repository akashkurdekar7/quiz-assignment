import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Wrapper>
      <Logo>
        <h1>Quiz App</h1>
      </Logo>

      <HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? (
          <IoMdClose size={30} color="white" />
        ) : (
          <GiHamburgerMenu size={30} color="white" />
        )}
      </HamburgerIcon>

      <Menu open={menuOpen}>
        <ul>
          <li>
            <StyledLink to="/" onClick={closeMenu}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/about" onClick={closeMenu}>
              About
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/quiz" onClick={closeMenu}>
              Quiz
            </StyledLink>
          </li>
        </ul>
        <DownloadButton onClick={closeMenu}>Download App</DownloadButton>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    h1 {
      margin: 0;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
  }

  li {
    cursor: pointer;
    font-size: 1rem;
    font-weight: medium;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    display: ${({ open }) => (open ? "flex" : "none")};
    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    top: 70px;
    left: 0;
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.accent};
    z-index: 50;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const DownloadButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.accent};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

export default Navbar;
