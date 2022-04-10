import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 30px;
  gap: 20px;
`;
