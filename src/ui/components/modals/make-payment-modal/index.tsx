import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ModalProps } from '../../../../types/modalProps.module';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import CircleIcon from '../../common/svgicons/CircleIcon';
import { Tabs } from 'antd';
import { Card, Crypto } from './tab-contents';
import { CardButton } from '../../../pages/servers/management/server-details';
import BuywithPaypalIcon from '../../common/svgicons/BuywithPaypalIcon';

const MakePaymentModal = ({ isOpen, closeModal }: ModalProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModal(false);
    closeModal();
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  useEffect(() => {
    setIsModal(isOpen);
  }, [isOpen]);

  return (
    <Modal
      style={{ top: '100px' }}
      width='480px'
      open={isModal}
      closeIcon={true}
      onCancel={handleCancel}
      footer={false}
      
      className='add-address-modal'
    >
      <ModalDiv>
        <Header>
          <h4>Make a payment</h4>
          <p>Your current estimated costs for this billing period are $5.57.</p>
        </Header>
        <Content>
          <label>Payment Amount</label>
          <AmoundDiv>
            <AmoundInfo>
              <CircleIcon stroke={Color.$brand_600} />
              <p>$5.57 - Estimated costs for current billing period. </p>
            </AmoundInfo>
            <AmoundInfo>
              <CircleIcon stroke={Color.$white} />
              <p>Custom Amount</p>
            </AmoundInfo>
            <p>Extra balance willI be added as credit for your next bill. </p>
          </AmoundDiv>
        </Content>
        <Content>
          <Tabs onChange={onChange} type='card' items={[Card, Crypto]} />
        </Content>
        <CardButton className='button-primary' style={{ width: '160px' }}>
          Submit Payment
        </CardButton>
      </ModalDiv>
      <Footer>
        <label>OR, PAY WITH A 3RD-PARTY PROVIDER</label>
        <p>Submit a one time payment with these providers</p>
        <BuyWithPaypalButton>
          <label>Buy with</label>
          <BuywithPaypalIcon />
        </BuyWithPaypalButton>
      </Footer>
    </Modal>
  );
};
export default MakePaymentModal;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  label {
    color: ${Color.$white};
    font-size: 16px;
  }
  p {
    font-size: 16px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 36px;
  }
  p {
    color: ${Color.$netural_700};
  }
  margin-bottom: ${Space.l};
`;
const Footer = styled.div`
  margin-top: ${Space.l};
  display: flex;
  flex-direction: column;
  label {
    color: ${Color.$white};
  }
  p {
    padding-top: ${Space.s};
    color: ${Color.$netural_700};
    font-size: 16px;
    margin-bottom: ${Space.xs};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;
const AmoundDiv = styled.div`
  padding-left: ${Space.s};
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  & > :last-child {
    color: ${Color.$netural_700};
    padding-left: 22px;
  }
`;
const AmoundInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  align-items: center;
  &:first-child {
    p {
      color: ${Color.$brand_600};
    }
  }
`;
const BuyWithPaypalButton = styled.button`
  width: 300px;
  border-radius: ${BorderRadius.xs};
  padding: ${Space.sb} ${Space.base};
  label {
    color: #253b80;
    font-weight: 600;
  }
  background-color: #ffc43a;
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  align-items: center;
  justify-content: center
`;
