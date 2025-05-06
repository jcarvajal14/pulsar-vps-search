import { StatusType } from '../../../../types/status.module';
import { StatusCellDiv, CircleIconDiv } from './styled';

interface StatusCellProps {
  status: StatusType;
}

const StatusCell = ({ status }: StatusCellProps) => {
  return (
    <StatusCellDiv condition={status.toString()}>
      <CircleIconDiv condition={status.toString()} />
      <label>{status ? 'ON' : 'OFF'}</label>
    </StatusCellDiv>
  );
};
export default StatusCell;
