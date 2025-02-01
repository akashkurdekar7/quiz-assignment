import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import home from "../assets/home.jpg";

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <Container>
      <Overlay />
      <Content>
        <h1 className="title">Welcome to the Quiz App</h1>
        <p className="description">
          Test your knowledge by answering the questions below. Are you ready?
        </p>
        <Button onClick={startQuiz}>Start Quiz</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;

  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.accent};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

export default Home;
