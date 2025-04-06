import React from "react";
import "./assets/global.css";
import { Home } from "./pages/home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/feed";

const GlobalStyle = createGlobalStyle`
*{
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
