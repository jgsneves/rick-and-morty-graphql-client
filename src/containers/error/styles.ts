import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h3`
  font-family: 'Inter', sans-serif;
  color: ${Colors.primary};
`;

export const ErrorText = styled.h4`
  font-family: 'Inter', sans-serif;
  color: ${Colors.error.red0};
`;
