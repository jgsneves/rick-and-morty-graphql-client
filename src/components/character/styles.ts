import styled from 'styled-components';
import Colors from '../../styles/colors';
import { BaseH2, BaseParagraph } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: 100px 150px;
  background-color: white;
  padding: 20px;
  border: 1px solid black;

  box-shadow: 0px 0px 10px ${Colors.primary};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
`;

export const Name = styled(BaseH2)``;

export const Label = styled(BaseParagraph)`
  font-weight: bold;
`;

export const Information = styled(BaseParagraph)``;
