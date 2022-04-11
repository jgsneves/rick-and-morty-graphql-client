import styled, { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export const BaseH1 = styled.h1`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const BaseH2 = styled.h2`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const BaseH3 = styled.h3`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const BaseH4 = styled.h4`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const BaseParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;
