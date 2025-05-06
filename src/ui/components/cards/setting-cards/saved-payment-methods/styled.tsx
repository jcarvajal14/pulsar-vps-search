import styled from 'styled-components';
import { Color } from '../../../../../constants/color';
import { BorderRadius, Padding, Space } from '../../../../../constants/size';
import Image from 'next/image';

export const Header = styled.header``;
export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
`;

export const InCardDiv = styled.div`
  background-color: ${Color.$neutral_overlay};
  border-radius: ${BorderRadius.s};
  padding: ${Padding.l};
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  flex: 1;
  height: 320px;
`;

export const CardTitle = styled.div`
  label {
    font-size: 16px;
    color: ${Color.$white};
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${Space.s};
  column-gap: ${Space.s};
`;

interface CreditCardModelProps {
    $bgcolor: string;
}
export const CreditCardModel = styled.div<CreditCardModelProps>`
  flex-basis: 30%;
  flex-grow: 1;
  border-radius: ${BorderRadius.xs};
  background-color: ${(props => props.$bgcolor)};
  display: flex;
  flex-direction: column;
  padding: ${Space.s};
  gap: ${Space.s};
  code {
    font-size: 7px;
    color: white;
  }
  label {
    font-size: 6px;
    color: white;
  }
`;

export const CreditNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const NumberDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
`;
export const NumberInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CreditDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CreditStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.xs};
  background-color: ${Color.$neutral_foreground};
  border-radius: ${BorderRadius.sb};
  padding: ${Padding.xs} ${Padding.s};
  label {
    color: ${Color.$success_300};
  }
`;

export const CircleIconDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 20px;
  background-color: ${Color.$success_300};
`;

export const AddCard = styled.button`
  align-self: center;
  border-radius: ${BorderRadius.xl};
  padding: ${Padding.s} ${Padding.sb};
  border: solid 1px ${Color.$gray_600};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  color: ${Color.$white};
`;
export const WalletsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const WalletCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 101;
  transform: translate(-50%, 0);
  top: 0;
  left: 50%;

  width: 347px;
`;
export const WalletCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Space.s} ${Space.sb};
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Space.l};
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${Color.$black};
      width: ${Space.xl};
      height: ${Space.xl};
      border-radius: ${BorderRadius.xl};
    }
  }
`;
export const WalletCardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.$bg_primary};
  border-radius: ${BorderRadius.l};
  border: solid 1px ${Color.$neutral_overlay};
  padding: ${Padding.sb} ${Padding.none};
  gap: ${Space.s};
  label {
    font-size: 16px;
    color: ${Color.$white};
    text-align: center;
  }
  hr {
    border-color: ${Color.$neutral_overlay} !important;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${Space.sb};
    gap: ${Space.sb};
  }
`;
export const CoinDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 12px;
  }
`;
export const WalletBackgroundImage = styled(Image)`
  position: absolute;
  z-index: 100;
  transform: translate(-50%, 0);
  top: 0;
  left: 50%;
`;
