import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
  }
  
  p {
    margin: 2.7rem 0;
  }
`;
