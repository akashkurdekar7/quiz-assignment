import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import styled from "styled-components";
import Confetti from "react-confetti";

const Question = () => {
  const apiUrl = "/api/Uw5CrX";

  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quizFinish, setQuizFinish] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const totalQuestions = questions.length;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(apiUrl);
        const { title, questions: questionsArray } = response.data;

        if (Array.isArray(questionsArray)) {
          setQuestions(questionsArray);
          setTitle(title);
        } else {
          setError("Invalid data format from API");
        }
      } catch (error) {
        setError("Error fetching questions.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (timer > 0 && !quizFinish) {
      const timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, quizFinish]);

  const onAnswerSelect = (option) => {
    if (userAnswers[currentQuestionIndex]) return;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setUserAnswers(updatedAnswers);

    if (option.is_correct) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    setTimer(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinish(true);
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <p className="loading-text">Loading questions...</p>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <p className="error-text">Error: {error}</p>
      </Wrapper>
    );
  }

  if (questions.length === 0) {
    return (
      <Wrapper>
        <p className="error-text">No questions found.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {quizFinish && (
        <Confetti
          className="confetti"
          width={windowWidth}
          height={windowHeight}
        />
      )}
      <div className="questions">
        {quizFinish ? (
          <div className="finish-message">
            <h2>Quiz Finished!</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>
          </div>
        ) : (
          <div className="card">
            <div className="timerProgress">
              <div className="progress">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
              <div className="timer-container">
                <FaClock className="icon" />
                <span>Time Left: {timer} sec</span>
              </div>
            </div>
            <h3 className="title">{title}</h3>
            <p className="question-description">
              {questions[currentQuestionIndex].description}
            </p>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option) => {
                const isSelected =
                  userAnswers[currentQuestionIndex]?.id === option.id;
                const isCorrect = option.is_correct;

                return (
                  <button
                    key={option.id}
                    onClick={() => onAnswerSelect(option)}
                    className={`option-button ${
                      isSelected
                        ? isCorrect
                          ? "correct"
                          : "incorrect"
                        : isCorrect && userAnswers[currentQuestionIndex]
                        ? "correct"
                        : ""
                    }`}
                  >
                    {option.description}
                  </button>
                );
              })}
            </div>
            {userAnswers[currentQuestionIndex] &&
              !userAnswers[currentQuestionIndex].is_correct && (
                <div className="correct-answer">
                  CORRECT ANSWER:{" "}
                  {
                    questions[currentQuestionIndex].options.find(
                      (option) => option.is_correct
                    )?.description
                  }
                </div>
              )}
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;

  .confetti {
    margin: 0;
    inset: -20px;
  }

  .loading-text {
    font-size: 1.5rem;
    color: #555;
  }

  .error-text {
    font-size: 1.5rem;
    color: red;
  }

  .finish-message {
    text-align: center;
    width: max-content;
    font-size: 1.5rem;
    color: #333;
    position: absolute;
    bottom: 16%;
    left: 50%;
    transform: translate(-50%);
  }

  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    min-width: 400px; /* Adjusted for smaller screens */
    min-height: 200px;
    position: relative;
  }

  .timerProgress {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .timer-container {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: #c8c8c8;
    justify-content: flex-end;
  }

  .timer-container .icon {
    margin-right: 10px;
    font-size: 1.6rem;
  }

  .title {
    font-size: 1.8rem;
    margin: 10px 0;
    text-align: center;
  }

  .question-description {
    font-size: 1.4rem;
    margin: 10px 0;
    text-align: justify;
    color: black;
    font-weight: 600;
  }

  .options-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-button {
    align-self: stretch;
    padding: 18px 30px;
    border-radius: 20px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: black;
    background-color: white;
    transition: background-color 0.001s ease-in-out,
      border-color 0.003s ease-in-out;
  }

  .option-button.correct {
    background-color: rgb(158, 255, 151);
  }

  .option-button.incorrect {
    background-color: #ff0000;
  }

  .correct-answer {
    text-align: justify;
    color: black;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .next-button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    width: max-content;
  }

  .next-button:hover {
    background-color: #218838;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .card {
      min-width: 300px; /* Adjust for tablets */
    }
    .title {
      font-size: 1.5rem; /* Smaller title for mobile */
    }
    .question-description {
      font-size: 1.2rem; /* Smaller question text for mobile */
    }
  }

  @media (max-width: 480px) {
    .card {
      min-width: 100%; /* Full width for mobile */
      padding: 10px; /* Less padding for mobile */
    }
    .title {
      font-size: 1.3rem; /* Even smaller title for mobile */
    }
    .question-description {
      font-size: 1rem; /* Smaller question text for mobile */
    }
  }
`;

export default Question;
