import React from 'react';
import StyledSpinner from './styles';

interface SpinnerProps {
  size: number;
  color: 'primary' | 'secondary';
}

const Spinner: React.FC<SpinnerProps> = ({
  size,
  color,
}: SpinnerProps): JSX.Element => (
  <StyledSpinner viewBox="0 0 50 50" color={color} size={size}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="6"
    />
  </StyledSpinner>
);

export default Spinner;
