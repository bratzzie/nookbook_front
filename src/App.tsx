import React from "react";
import "./assets/global.css";
import { Landing } from "./pages/landing";
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
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Feed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
