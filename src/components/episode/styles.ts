import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  align-items: center;

  box-shadow: 0px 0px 10px #10162f;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  color: #10162f;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Label = styled.p`
  font-family: 'Inter', sans-serif;
  color: #10162f;
  font-weight: bold;
`;

export const Information = styled.p`
  font-family: 'Inter', sans-serif;
  color: #10162f;
`;
