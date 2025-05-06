import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    display: none;
  }
`;

export const InvoiceDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  label {
    color: ${Color.$netural_700};
    font-size: 16px;
  }
`;
export const CategorySelectContainer = styled.div`
  background-color: ${Color.$neutral_foreground};
  border-radius: ${BorderRadius.l};
  padding: ${Padding.sb} ${Padding.base};
`;

export const CategorySelect = styled.select`
  background-color: ${Color.$neutral_foreground};
  padding: ${Padding.none} ${Padding.none};
  color: ${Color.$netural_700};
  width: 150px;

  option {
    border-color: ${Color.$neutral_foreground};
    padding: ${Padding.xs} none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const InvoiceFilterDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
`;

export const StatusSelectContainer = styled.div`
  background-color: ${Color.$neutral_foreground};
  border-radius: ${BorderRadius.l};
  padding: ${Padding.sb} ${Padding.base};
`;

export const StatusSelect = styled.select`
  background-color: ${Color.$neutral_foreground};
  padding: ${Padding.none} ${Padding.none};
  color: ${Color.$netural_700};
  width: 100px;

  option {
    border-color: ${Color.$neutral_foreground};
    padding: ${Padding.xs} none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Filters = styled.button`
  background-color: ${Color.$neutral_foreground};
  border-radius: ${BorderRadius.l};
  padding: ${Padding.sb} ${Padding.base};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  label {
    color: ${Color.$netural_700};
  }
`;
