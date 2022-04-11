import React from 'react';
import Spinner from '../../components/spinner';
import { Wrapper, Text } from './styles';

interface LoadingContainerProps {
  spinnerSize: number;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  spinnerSize,
}: LoadingContainerProps) => {
  return (
    <Wrapper>
      <Spinner color="primary" size={spinnerSize} />
      <Text>Carregando</Text>
    </Wrapper>
  );
};

export default LoadingContainer;
