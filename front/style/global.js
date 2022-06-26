import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Poppins', 'Noto Sans', sans-serif;
  }

  a{
    text-decoration: none;
    color: #000000;
  }

  progress{
    appearance: none;
  }

`
