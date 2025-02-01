import React from "react";
import styled from "styled-components";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <h1>About Our Quiz App</h1>
        <p>
          Welcome to the ultimate quiz experience! Our app is designed to test
          your knowledge across a variety of topics with interactive and
          engaging quizzes. Whether you're competing against the clock or aiming
          for a high score, there's always something new to discover and
          challenge yourself with.
        </p>
        <p>
          Here are some features you'll enjoy:
          <ul>
            <li>Challenge yourself with timed quizzes</li>
            <li>Instant feedback on your answers</li>
            <li>Celebrate with confetti when you complete a quiz</li>
            <li>Track your progress and improve your score over time</li>
          </ul>
        </p>
        <p>
          We're constantly adding new quizzes and improving the app. Stay tuned
          for more exciting updates and challenges in the future!
        </p>
      </AboutContent>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  background-color: white;
`;

const AboutContent = styled.div`
  background-color: #e4e4e7;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 800px;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin: 15px 0;
    line-height: 1.6;
    color: #333;
  }

  ul {
    text-align: center;
    margin-left: 20px;
  }

  ul li {
    font-size: 1.1rem;
    color: #555;
  }

  li {
    text-decoration: dotted !important;
  }
`;

export default About;
