import React from 'react';
import Spinner from '../../components/spinner';
import { Wrapper, Text } from './styles';

interface LoadingProps {
  spinnerSize: number;
}

const Loading: React.FC<LoadingProps> = ({ spinnerSize }: LoadingProps) => {
  return (
    <Wrapper>
      <Spinner color="primary" size={spinnerSize} />
      <Text>Carregando</Text>
    </Wrapper>
  );
};

export default Loading;
