import styled from 'styled-components';
import { BaseH1 } from '../../styles/globalStyles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60vw;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const Title = styled(BaseH1)``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  gap: 20px;
`;
