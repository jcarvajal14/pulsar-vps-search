import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ModalProps } from '../../../../types/modalProps.module';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import AlertOctagonIcon from '../../common/svgicons/AlertCircle';
import InputComponent from '../../common/input/input';
import { CardButton } from '../../../pages/servers/management/server-details';
import ReimageLoadingMoal from '../reimage-loading-modal';

const ReimageModal = ({ isOpen, closeModal }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeChildModal = () => {
    setModalOpen(false);
  };

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
      style={{
        top: '250px',
      }}
      width='450px'
      open={isModal}
      onCancel={handleCancel}
      footer={false}
      className='add-address-modal'
    >
      <ModalDiv>
        <Content>
          <IconDiv>
            <AlertOctagonIcon
              stroke={Color.$error_500}
              strokeWidth='3'
              width={48}
              height={48}
            />
          </IconDiv>
          <h4>
            <strong>Reimaging Server</strong>
          </h4>
          <p>
            Reimaging will permanently destroy all data on this system. The data
            is not recoverable.
          </p>
          <InputDiv>
            <label>Acknowledge</label>
            <InputComponent
              inputPlaceholder='I HEREBY CONSENT TO ALL DATA BEING DESTROYED'
              disable={true}
            />
          </InputDiv>
          <InputDiv>
            <label>Password</label>
            <InputComponent
              inputPlaceholder='Type your password'
              type='password'
            />
          </InputDiv>
        </Content>
        <ButtonDiv>
          <ModalButton>Cancel</ModalButton>
          <ModalButton onClick={() => {
            openModal();
            closeModal();
          }
          }>REIMAGE</ModalButton>
        </ButtonDiv>
      </ModalDiv>
      <ReimageLoadingMoal isOpen={isModalOpen} closeModal={closeChildModal} />
    </Modal>
  );
};
export default ReimageModal;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;
const IconDiv = styled.div`
  align-self: center;
  justify-self: center;
  border-radius: ${BorderRadius.xxl};
  background-color: ${Color.$neutral_overlay};
  padding: ${Padding.base};
  h4 {
    font-size: 18px;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.xs};
  label {
    color: ${Color.$white};
  }
`;
const ButtonDiv = styled.div`
  padding-top: ${Space.base};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${Space.s};
`;
const ModalButton = styled(CardButton)`
  flex: 1;
  color: ${Color.$white};
  &:last-child {
    background-color: ${Color.$error_600};
    border: none;
  }
  &:last-child:hover {
    background-color: ${Color.$error_700};
    border: none;
  }
`;
