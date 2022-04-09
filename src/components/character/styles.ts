import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: 100px 150px;
  background-color: white;
  padding: 20px;
  border: 1px solid black;

  box-shadow: 0px 0px 10px #10162f;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
`;

export const Name = styled.h2`
  font-family: 'Inter', sans-serif;
  color: #10162f;
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
