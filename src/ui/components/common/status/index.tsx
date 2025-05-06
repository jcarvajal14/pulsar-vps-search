import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import { StatusType } from '../../../../types/status.module';
import LoaderIcon from '../svgicons/LoaderIcon';
import AlertCircle from '../svgicons/AlertCircle';

interface StatusProps {
  status: StatusType;
}
interface StatusDivProps {
  type?: boolean;
}
export const StatusDiv = styled.div<StatusDivProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${BorderRadius.l};
  gap: ${Space.s};
  background-color: ${Color.$dark_card_bright};
  padding: ${(props) => (props.type === false ? '0px 6px' : '4px 12px')};
`;
export const StatusLabel = styled.label<StatusProps>`
  font-size: 14px;
  color: ${(props) => {
    let color: Color;
    switch (props.status) {
      case StatusType.on:
      case StatusType.success:
      case StatusType.assigned:
      case StatusType.online:
        color = Color.$success_300;
        break;
      case StatusType.error:
      case StatusType.off:
        color = Color.$error_400;
        break;
      case StatusType.unassigned:
      case StatusType.offline:
        color = Color.$netural_700;
        break;
      case StatusType.loading:
      case StatusType.provisioning:
        color = Color.$white;
        break;
      default:
        color = Color.$success_300;
        break;
    }
    return color;
  }};
`;
export const StatusCircleIcon = styled.div<StatusProps>`
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: ${(props) => {
    let color: Color;
    switch (props.status) {
      case StatusType.on:
      case StatusType.success:
      case StatusType.assigned:
      case StatusType.online:
        color = Color.$success_300;
        break;
      case StatusType.error:
      case StatusType.off:
        color = Color.$error_400;
        break;
      case StatusType.unassigned:
      case StatusType.offline:
        color = Color.$netural_700;
        break;
      case StatusType.loading:
      case StatusType.provisioning:
        color = Color.$white;
        break;
      default:
        color = Color.$success_300;
        break;
    }
    return color;
  }};
`;

const StatusContext = ({
  status,
  label,
  type,
}: {
  status: StatusType;
  label: string;
  type?: boolean;
}) => {
  return (
    <StatusDiv type={type}>
      {status === StatusType.provisioning ? (
        <LoaderIcon stroke={Color.$white} width={16} height={16} />
      ) : status === StatusType.error ? (
        <AlertCircle stroke={Color.$error_400} width={16} height={16} />
      ) : (
        <StatusCircleIcon status={status} />
      )}
      <StatusLabel status={status}>{label}</StatusLabel>
    </StatusDiv>
  );
};
export default StatusContext;
