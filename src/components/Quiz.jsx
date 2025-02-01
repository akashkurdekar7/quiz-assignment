import React, { useState } from "react";
import styled from "styled-components";
import quizImage from "../assets/quizImage.jpg";
import Question from "./Question";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const startQuiz = () => {
    setQuizStarted(true);
    const timerId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <Wrapper>
      {/* <WelcomeImage /> */}
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
  flex-direction: column;
`;

const WelcomeImage = styled.div`
  height: 100vh;
  background-image: url(${quizImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: url(${quizImage});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

const StartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  bottom: 16%;
  position: absolute;

  &:hover {
    background-color: #218838;
  }
`;

const Countdown = styled.div`
  font-size: 16rem;
  text-shadow: 10px 10px 5px #d3d3d3;
  color: black;
  cursor: progress;
  transition: color 0.1s ease-in-out, text-shadow 0.1s linear,
    transform 0.1s ease-in-out;

  &:hover {
    transform: scale(150%);
  }
`;

export default Quiz;
