"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  * {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    font-family: "Montserrat", sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 62.5%;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.onPrimary};
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
