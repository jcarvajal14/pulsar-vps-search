import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';

export const Header = styled.header`
  h3 {
    line-height: ${Space.s};
  }
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${Space.l};
  column-gap: ${Space.l};
  div {
    flex-basis: 40%;
  }
`;
export const AdditionalContacts = styled.button`
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
export const SaveChangesButton = styled.button`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Padding.s};
    border-radius: 48px;
    padding: ${Padding.s} ${Padding.base};
`;

