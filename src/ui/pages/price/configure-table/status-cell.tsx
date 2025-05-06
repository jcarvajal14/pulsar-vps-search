import { Color } from '../../../../constants/color';
import CircleCrossIcon from '../../../components/common/svgicons/CircleCrossIcon';
import LoaderIcon from '../../../components/common/svgicons/LoaderIcon';
import { StatusCellDiv, CircleIconDiv } from './styled';

interface StatusCellProps {
  status: boolean;
}

const StatusCell = ({ status }: StatusCellProps) => {
  return (
    status ? <LoaderIcon /> : <CircleCrossIcon stroke={Color.$error_400} />
  );
};
export default StatusCell;
