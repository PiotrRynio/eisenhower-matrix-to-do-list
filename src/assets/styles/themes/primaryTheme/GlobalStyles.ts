import { createGlobalStyle } from 'styled-components';
import { GlobalStylesProps } from '../types/GlobalStyles';

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  } 
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  }
   
  ::-webkit-scrollbar {
    width: 6px; 
    height: 6px; 
  }
  ::-webkit-scrollbar-track {
    border-right: 0  ${({ theme }) => theme.colors.primary} solid;  
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
