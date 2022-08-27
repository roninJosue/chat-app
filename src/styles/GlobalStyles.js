import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(63, 73, 204);
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;

    &:hover {
      background-color: #a8bbbf;
    }
  }

`