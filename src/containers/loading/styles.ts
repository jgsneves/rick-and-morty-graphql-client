import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

export const Text = styled.h2`
  color: ${Colors.primary};
  font-family: 'Inter', sans-serif;
`;
