import styled from 'styled-components';
import Colors from '../../styles/colors';

interface StyledSpinnerProps {
  color: 'primary' | 'secondary';
  size: number;
}

const StyledSpinner = styled.svg<StyledSpinnerProps>`
  animation: rotate 2s linear infinite;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  & .path {
    stroke: ${props =>
      props.color === 'primary' ? Colors.primary : Colors.grayScale.gray3};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default StyledSpinner;
