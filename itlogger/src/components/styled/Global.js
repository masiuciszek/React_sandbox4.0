import { createGlobalStyle } from 'styled-components';

export const cl = {
  danger: '#ff6f91',
  primary: '#008dcd',
  success: '#2ecc71',
  dark: '#333',
  white: '#fff',
};
export const GlobalStyle = createGlobalStyle`
  *::before,*::after,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family: 'Noto Sans', sans-serif;
    font-size: 10px;
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap');
  }

  body{
      color: ${cl.dark};
      min-height: 100vh;
  }

  a{
    text-decoration: none;
  }

  ul,li{
    list-style: none;
  }

`;
