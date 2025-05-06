import styled from 'styled-components';
import { Color } from '../../../../constants/color';
import { BorderRadius, Space } from '../../../../constants/size';

interface StatusCellDivProps {
  condition: string;
}
interface TrafficTableContainerProps {
  isminimized: string;
}
const TrafficTableContainer = styled.div`
  flex: 1;
  background-color: var(--color-primary);
  border-radius: var(--space-l);
  padding: var(--space-s) var(--space-base);
  margin: 0px 16px 12px 12px;
`;
const ServerCellDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    &:first-child {
      color: ${Color.$gray_primary};
    }
    &:last-child {
      color: ${Color.$white};
      font-weight: 200;
    }
  }
`;

const StatusCellDiv = styled.div<StatusCellDivProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  gap: ${Space.s};
  background-color: ${Color.$dark_card_bright};
  padding: ${Space.xs} ${Space.s};
  border-radius: ${Space.l};
  width: ${Space.xxxl};
  color: ${(props) =>
    props.condition == 'true' ? Color.$green_dark : Color.$red_light};
`;

const CircleIconDiv = styled.div<StatusCellDivProps>`
  width: 12px;
  height: 12px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.condition ? Color.$green_dark : Color.$red_light};
`;

const CpuCellDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${Space.base};

  label {
    color: white;
    width: 20px;
  }
`;

const ManageCellButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  border-radius: ${BorderRadius.l};
  /* border: solid 1px ${Color.$gray_dark}; */
  padding: ${Space.xs} 12px;
  label {
    color: #8a8a98;
    font-weight: 300;
    font-size: 18px;
    &:hover {
      color: ${Color.$brand_600};
    }
  }
`;
const ManageDropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const UsedByDiv = styled.button`
  padding: ${Space.xs} ${Space.base};
  border-radius: ${BorderRadius.base};
`
export {
  StatusCellDiv,
  ServerCellDiv,
  CircleIconDiv,
  CpuCellDiv,
  ManageCellButton,
  ManageDropDown,
  TrafficTableContainer,
  UsedByDiv,
};
