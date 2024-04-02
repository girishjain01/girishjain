import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';
import './index.css'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
*{margin:0;
padding:0;
box-sizing:border-box ;}

html,body{
  font-family: 'Oswald', sans-serif;
  font-size: 62.5%;

  @media (max-width: 768px) {
    font-size:50%;
  }
  @media (max-width: 450px) {
    font-size:40%;
  }
}
body{
  font-size: 1.6rem;
}

`;




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>,
);
