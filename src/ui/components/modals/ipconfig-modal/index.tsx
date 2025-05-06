import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ModalProps } from '../../../../types/modalProps.module';
import { Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import {
  CardButton,
  IconCardButton,
} from '../../../pages/servers/management/server-details';
import IpAddressesIcon from '../../common/svgicons/IpAddressesIcon';
import PlusRoundedIcon from '../../common/svgicons/PlusRoundedIcon';
import { MakePaymentButton } from '../../cards/payment-amount/styled';
import PaymentsIcon from '../../common/svgicons/PaymentsIcon';
import StatusContext from '../../common/status';
import { StatusType } from '../../../../types/status.module';
import CircleCrossIcon from '../../common/svgicons/CircleCrossIcon';

const IpConfigModal = ({ isOpen, closeModal }: ModalProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModal(false);
    closeModal();
  };

  useEffect(() => {
    setIsModal(isOpen);
  }, [isOpen]);

  return (
    <Modal
      style={{ top: '250px' }}
      width='750px'
      open={isModal}
      onCancel={handleCancel}
      footer={false}
      className='add-address-modal'
    >
      <ModalDiv>
        <Header>
          <IpAddressesIcon stroke={Color.$white} />
          <label>IP Configuration</label>
        </Header>
        <hr />
        <Body>
          <TableRow>
            <TableCell>IP Address</TableCell>
            <TableCell>Cost Per Month</TableCell>
            <TableCell>Date Added</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>192.168.1.13</TableCell>
            <TableCell id='price'>5$</TableCell>
            <TableCell>17 Oct, 2022</TableCell>
            <TableCell><StatusContext type label='Unassigned' status={StatusType.unassigned} /></TableCell>
                      <TableCell><CircleCrossIcon stroke={Color.$error_400} /></TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>192.168.1.15</TableCell>
            <TableCell id='price'>5$</TableCell>
            <TableCell>17 Oct, 2022</TableCell>
            <TableCell><StatusContext type label='Assigned' status={StatusType.assigned} /></TableCell>
            <TableCell><CircleCrossIcon stroke={Color.$error_400} /></TableCell>
          </TableRow>
          <hr />
          <ButtonDiv>
            <IconCardButton className='button-card' style={{ border: 'none' }}>
              <PlusRoundedIcon stroke={Color.$white} />
              <label>Add Ip Address</label>
            </IconCardButton>
          </ButtonDiv>
        </Body>
        <hr />
        <CostDiv>
          <label>Total Cost</label>
          <label>$10</label>
        </CostDiv>
        <Footer>
          <MakePaymentButton className='button-primary'>
            <PaymentsIcon stroke={Color.$white} strokeWidth='2' />
            <span>Submit Changes</span>
          </MakePaymentButton>
          <CardButton style={{width: '180px'}} onClick={closeModal}>Cancel</CardButton>
        </Footer>
      </ModalDiv>
    </Modal>
  );
};
export default IpConfigModal;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  font-size: 16px;
  color: white;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  hr {
    border-color: #f1f1f1 !important;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  hr {
    margin-top: ${Padding.xs} !important;
    margin-bottom: ${Padding.xs} !important;
    border-color: ${Color.$neutral_overlay} !important;
  }
`;
const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.base};
`;
const TableCell = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  &#price {
    text-align: center;
  }
`;
const ButtonDiv = styled.div`
  padding-top: ${Space.xs};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CostDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & :first-child {
    color: ${Color.$netural_700};
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
`;
