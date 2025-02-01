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
      <h1 className="title">Welcome to the Quiz App</h1>
      <p className="description">
        Test your knowledge by answering the questions below. Are you ready?
      </p>
      <button className="button" onClick={startQuiz}>
        Start Quiz
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
  background-image: url(${home});
  background-size: cover;
  background-position: center;

  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .button {
    padding: 12px 24px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: #45a049;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
`;

export default Home;
