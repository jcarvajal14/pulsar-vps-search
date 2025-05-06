import styled from 'styled-components';
import { Color } from '../../../../constants/color';
import { BorderRadius, Space } from '../../../../constants/size';

interface StatusCellDivProps {
  condition: string;
}

export const ContentDiv = styled.div`
  flex-basis: 320px;
  background-image: linear-gradient(
    to bottom,
    #7f56d9,
    rgba(42, 108, 236, 0.88),
    rgba(0, 42, 255, 0.78)
  );
  /* border: 1px solid ; */
  border-radius: 16px;
`;

export const ContentBorderDiv = styled.div`
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.sb} ${Space.l};
`;

const TrafficTableContainer = styled.div`
  background-color: var(--color-primary);
  border-radius: var(--space-l);
  padding: var(--space-s) var(--space-base);
  margin: 'none';
`
const ServerCellDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    &:first-child {
      color: ${Color.$white};
    }
    &:last-child {
      color: ${Color.$gray_primary};
      font-weight: 400;
      font-size: 12px;
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
  color: ${(props) => (props.condition == 'true' ? Color.$green_dark : Color.$red_light)};
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
  border: solid 1px ${Color.$gray_dark};
  padding: ${Space.xs} 12px;
  label {
    color: white;
    font-weight: 300;
  }
`;
const ManageDropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export {
  StatusCellDiv,
  ServerCellDiv,
  CircleIconDiv,
  CpuCellDiv,
  ManageCellButton,
  ManageDropDown,
  TrafficTableContainer,
};
