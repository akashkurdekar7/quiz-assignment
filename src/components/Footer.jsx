import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: center;
  flex-direction: column;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownloadApp = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;

  .button {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.accent};
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CreatedBy = styled.div`
  font-size: 0.9rem;

  .name {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <DownloadApp>
        <p>Download Our App</p>
        <button className="button">Download</button>
      </DownloadApp>
      <Divider />
      <CreatedBy>
        <p>
          Created by{" "}
          <a
            href="https://akashkurdekar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="name"
          >
            &#128509; Akash Kurdekar
          </a>
        </p>
      </CreatedBy>
    </FooterContainer>
  );
};

export default Footer;
