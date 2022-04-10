import React from 'react';
import { ApolloError } from '@apollo/client';
import { ErrorText, Wrapper, Text } from './styles';

interface ErrorContainerProps {
  error: ApolloError;
}

const ErrorContainer: React.FC<ErrorContainerProps> = ({
  error,
}: ErrorContainerProps) => {
  return (
    <Wrapper>
      <Text>Houve algum erro! Contate o suporte para maiores informações</Text>
      <ErrorText>{error.message}</ErrorText>
    </Wrapper>
  );
};

export default ErrorContainer;
