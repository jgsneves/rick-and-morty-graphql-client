import styled from 'styled-components';
import { BaseH1 } from '../../styles/globalStyles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60vw;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const Title = styled(BaseH1)``;

export const FilterSection = styled.div`
  width: 200px;
  margin-top: 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 30px;
  gap: 20px;
`;
