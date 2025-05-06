import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../../components/cards/card-style';
import ChartBarIcon from '../../../components/common/svgicons/ChartBarIcon';
import { Color } from '../../../../constants/color';
import { Space } from '../../../../constants/size';
import { IconCardButton } from './server-details';
import PaymentsIcon from '../../../components/common/svgicons/PaymentsIcon';

const BillingCard = () => {
  return (
    <StyledCard>
      <Header>
        <LabelDiv>
          <ChartBarIcon stroke={Color.$white} />
          <label>Billing</label>
        </LabelDiv>
        <ChangeBillingModelButton>
          Change Billing Model
        </ChangeBillingModelButton>
      </Header>
      <hr />
      <Body>
        <Info>
          <label>Billing Model</label>
          <label>Monthly</label>
        </Info>
        <Info>
          <label>Start Date</label>
          <label>Sep 15, 2023</label>
        </Info>
        <Info>
          <label>Unit Price</label>
          <label>$386/Month</label>
        </Info>
      </Body>
    </StyledCard>
  );
};
export default BillingCard;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  label {
    font-size: 18px;
    color: ${Color.$white};
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  min-height: 70px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 16px;
    &:first-child {
      color: ${Color.$netural_700};
    }
    &:last-child {
      color: ${Color.$white};
    }
  }
`;
const ChangeBillingModelButton = styled(IconCardButton)`
  justify-content: center;
`;
