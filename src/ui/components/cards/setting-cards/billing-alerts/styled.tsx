import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    color: ${Color.$white};
  }
`;
export const AlertInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.xs};
  label {
    color: ${Color.$white};
    font-size: 16px;
  }
  p {
    color: ${Color.$netural_700};;
    font-size: 16px;
  }
`
export const AlertType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.xs};
`

