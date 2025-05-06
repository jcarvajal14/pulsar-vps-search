import { CpuCellDiv } from './styled';
import { BorderLinearProgress } from '../../common/ProgressBar';

interface CpuCellProps {
  percentValue: number;
}

const CpuCell = ({ percentValue }: CpuCellProps) => {
  return (
    <CpuCellDiv>
      <BorderLinearProgress
        variant='determinate'
        value={percentValue}
        style={{ width: '100px', height: 6 }}
      />
      <label>{`${percentValue}%`}</label>
    </CpuCellDiv>
  );
};
export default CpuCell;
