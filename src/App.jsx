import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import About from "./components/About";

const App = () => {
  const theme = {
    colors: {
      primary: "#3f51b5",
      secondary: "#f44336",
      background: "#f0f0f0",
      text: "#212121",
      accent: "#ff9800",
    },
    fontSizes: {
      base: "16px",
      large: "20px",
    },
    shadows: {
      primary: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      accent: "0px 4px 8px rgba(255, 152, 0, 0.4)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
