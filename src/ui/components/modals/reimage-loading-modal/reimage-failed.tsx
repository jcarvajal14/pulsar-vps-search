import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ModalProps } from '../../../../types/modalProps.module';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import InputComponent from '../../common/input/input';
import { CardButton } from '../../../pages/servers/management/server-details';
import LoaderIcon from '../../common/svgicons/LoaderIcon';

const ReimageFailedModal = ({ isOpen, closeModal }: ModalProps) => {
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
      width='450px'
      open={isModal}
      onCancel={handleCancel}
      footer={false}
      className='add-address-modal'
    >
      <ModalDiv>
        <Content>
          <IconDiv>
            <LoaderIcon
              stroke={Color.$white}
              strokeWidth='3'
              width={48}
              height={48}
            />
          </IconDiv>
          <h4>
            <strong>ReImage Server</strong>
          </h4>
          <p>This will take a while...</p>
          <p>
            You can close this window and continue your administration tasks,
            we’ll notify you once the server is done reimaging.
          </p>
        </Content>
      </ModalDiv>
    </Modal>
  );
};
export default ReimageFailedModal;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  align-items: center;
  p {
    text-align: center;
  }
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
