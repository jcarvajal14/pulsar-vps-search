import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../../components/cards/card-style';
import { Color } from '../../../../constants/color';
import { Space } from '../../../../constants/size';
import { IconCardButton } from './server-details';
import IpAddressesIcon from '../../../components/common/svgicons/IpAddressesIcon';
import StatusContext from '../../../components/common/status';
import { StatusType } from '../../../../types/status.module';
import EditIcon from '../../../components/common/svgicons/EditIcon';
import IpConfigModal from '../../../components/modals/ipconfig-modal';

const IpCard = () => {
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
        <LabelDiv>
          <IpAddressesIcon stroke={Color.$white} />
          <label>Ip Addresses</label>
        </LabelDiv>
        <ChangeBillingModelButton onClick={openModal}>
          <EditIcon stroke='white' />
          Configure
        </ChangeBillingModelButton>
      </Header>
      <hr />
      <Body>
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext
            status={StatusType.on}
            label='Active'
            type={false}
          />{' '}
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext
            status={StatusType.on}
            label='Active'
            type={false}
          />{' '}
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <StatusContext status={StatusType.on} label='Active' type={false} />
        </Info>
      </Body>
      <IpConfigModal isOpen={isModalOpen} closeModal={closeModal} />
    </StyledCard>
  );
};
export default IpCard;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  gap: ${Space.xxs};
  flex: 1;

  overflow-y: auto;
  padding-right: ${Space.s};
  max-height: 150px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }

  hr {
    border-color: ${Color.$neutral_overlay} !important;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 16px;
    &:first-child {
      color: ${Color.$white};
    }
    &:last-child {
      color: #50d1b2;
    }
  }
`;
const ChangeBillingModelButton = styled(IconCardButton)`
  justify-content: center;
`;
