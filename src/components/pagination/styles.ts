import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Select = styled.select`
  width: 50px;
  outline: 0;
`;

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: ${Colors.primary};
  margin-right: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
`;
