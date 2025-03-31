import React from 'react';
import './assets/global.css';
import { Home } from './pages/home';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
*{
  }
`

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
    
  )
}
