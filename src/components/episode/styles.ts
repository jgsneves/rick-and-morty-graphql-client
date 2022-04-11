import styled from 'styled-components';
import Colors from '../../styles/colors';
import { BaseH2, BaseParagraph } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  align-items: center;

  box-shadow: 0px 0px 10px ${Colors.primary};

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled(BaseH2)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Label = styled(BaseParagraph)`
  font-weight: bold;
`;

export const Information = styled(BaseParagraph)``;
