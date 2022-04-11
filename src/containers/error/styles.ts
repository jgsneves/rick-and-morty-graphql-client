import styled from 'styled-components';
import Colors from '../../styles/colors';
import { BaseH3, BaseH4 } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(BaseH3)``;

export const ErrorText = styled(BaseH4)`
  color: ${Colors.error.red0};
`;
