import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// --darkdark: #042e3f;
// --darklight: #0e6772;
// --lightdark: #42a6a5;
// --lightlight: #f9f9f9; 
// --highlight:#cfefa1;
const theme = createTheme({
  palette: {
    primary: {
      light: '#ff8e8c',
      main: '#42a6a5',
      dark: '#c62035',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4da9b7',
      main: '#0e6772',
      dark: '#004e5a',
      contrastText: '#000',
    },
  },
  typography: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "none",
  },
  button: {
    textTransform: "none",
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
