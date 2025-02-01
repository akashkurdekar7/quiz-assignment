import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  font-size: 1rem;
  text-align: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownloadApp = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  .button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const CreatedBy = styled.div`
  font-size: 0.9rem;

  .name {
    font-weight: bold;
    color: #4caf50;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      color: #ddd;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
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
