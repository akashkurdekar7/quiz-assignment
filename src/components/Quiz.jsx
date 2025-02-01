import React, { useState, useEffect } from "react";
import styled from "styled-components";
import quizImage from "../assets/quizImage.jpg";
import Question from "./Question";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timerId;
    if (quizStarted && countdown > 0) {
      timerId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [quizStarted, countdown]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <Wrapper>
      <Overlay />
      <QuizContainer>
        {!quizStarted ? (
          <StartButton onClick={startQuiz}>Start Quiz</StartButton>
        ) : countdown > 0 ? (
          <Countdown>{countdown}</Countdown>
        ) : (
          <Question />
        )}
      </QuizContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${quizImage});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  z-index: 2;
  text-align: center;
`;

const StartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }
`;

const Countdown = styled.div`
  font-size: 10rem;
  font-weight: bold;
  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
  color: white;
  animation: pop 0.5s ease-in-out;

  @keyframes pop {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default Quiz;
