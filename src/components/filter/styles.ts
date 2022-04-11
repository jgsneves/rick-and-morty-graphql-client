import styled from 'styled-components';
import { BaseLabel } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(BaseLabel)`
  margin-bottom: 8px;
`;

export const TextInput = styled.input`
  outline: 0;
  font-family: 'Inter', sans-serif;
  height: 24px;
`;
