import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditPlanButton = styled.button`
  align-self: flex-start;
  border-radius: ${BorderRadius.xl};
  padding: ${Padding.s} ${Padding.sb};
  border: solid 1px ${Color.$gray_600};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  color: ${Color.$white};
`;
export const PlanInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xl};
`;
export const PlanDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.xs};
  label {
    color: ${Color.$white};
    font-size: 16px;
    &:last-child {
      color: ${Color.$netural_700};
    }
  }
`;
