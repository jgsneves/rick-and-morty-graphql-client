import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RickAndMortyName = styled.img`
  width: 700px;

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const Logo = styled.img`
  width: 300px;
  @media (max-width: 800px) {
    width: 50vw;
  }
`;
