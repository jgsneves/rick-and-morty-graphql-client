import React from 'react';
import { ApolloError } from '@apollo/client';
import { ErrorText, Wrapper, Text } from './styles';
import parseErrorMessage from '../../mappers/parseErrorMessage';

interface ErrorContainerProps {
  error: ApolloError;
  content: 'Personagem' | 'Episódio';
}

const ErrorContainer: React.FC<ErrorContainerProps> = ({
  error,
  content,
}: ErrorContainerProps) => {
  return (
    <Wrapper>
      <Text>
        Houve algum erro! Caso necessário, entre em contato com o suporte para
        maiores informações.
      </Text>
      <ErrorText>{parseErrorMessage(error.message, content)}</ErrorText>
    </Wrapper>
  );
};

export default ErrorContainer;
