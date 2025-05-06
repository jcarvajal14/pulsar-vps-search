import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../components/cards/card-style';
import ChartBarIcon from '../../components/common/svgicons/ChartBarIcon';
import { Color } from '../../../constants/color';
import { Space } from '../../../constants/size';
import PaymentsIcon from '../../components/common/svgicons/PaymentsIcon';
import { IconCardButton } from '../servers/management/server-details';
import MakePaymentModal from '../../components/modals/make-payment-modal';

const UpcommingPayments = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <StyledCard>
      <Header>
        <ChartBarIcon stroke={Color.$white} />
        <label>Upcomming Payments</label>
      </Header>
      <hr />
      <Body>
        <Info>
          <label>Billed</label>
          <label>Monthly</label>
        </Info>
        <Info>
          <label>Start Date</label>
          <label>Sep 15, 2023</label>
        </Info>
        <Info>
          <label>Due Date</label>
          <label>Nov 15, 2023</label>
        </Info>
        <Info>
          <label>{`Server\(s\)`}</label>
          <label>$3450</label>
        </Info>
        <Info>
          <label>IPv4</label>
          <label>$35</label>
        </Info>
        <Info>
          <label>Bandwidth</label>
          <label>$385</label>
        </Info>
        <Info>
          <label>Bandwidth Overage</label>
          <label>$0.00</label>
        </Info>
        <hr />
        <Info>
          <label>Running Total</label>
          <label>$6835.00</label>
        </Info>
      </Body>
      <ChangeBillingModelButton className='button-primary' onClick={openModal}>
        <PaymentsIcon stroke={Color.$white} />
        Make Payment
      </ChangeBillingModelButton>
      <MakePaymentModal isOpen={isModalOpen} closeModal={closeModal} />
    </StyledCard>
  );
};
export default UpcommingPayments;

const Header = styled.div`
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
  min-height: 120px;
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
