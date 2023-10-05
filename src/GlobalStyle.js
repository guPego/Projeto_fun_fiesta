import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    src: url(fonts/Gafata-Regular.ttf);
    font-family: 'Gafata-Regular';    
    font-weight: normal; 
  }  

  body {
    margin: 0;
    padding: 0;
    border: none;
    background-color: #191414 !important;
    font-family: Gafata-Regular, Sans-Serif;
  }

  body a {
    font-family: Gafata-Regular, Sans-Serif;
  }
`;

export default GlobalStyle;
