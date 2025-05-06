import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

interface ProgressbarProps {
  percentValue?: number;
  progressColor?: string;
  bgColor?: string;
}

interface ContainerProps {
  bgColor?: string;
}

const Progressbar = ({
  percentValue,
  progressColor,
  bgColor,
}: ProgressbarProps) => {
//   return <ProgressbarContainer></ProgressbarContainer>;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#fff'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#308fe8',
  },
}));

// const ProgressbarContainer = styled.div<ContainerProps>`
//   background-color: ${(props) => props.bgColor};
// `;
export { BorderLinearProgress, Progressbar };
