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
import CircleCrossIcon from '../../common/svgicons/CircleCrossIcon';
import StorageIcon from '../../common/svgicons/StorageIcon';
import ServerSearchModal from '../serversearch-modal';
import ReimageLoadMoal from '../reimage-modal';

const FileConfigModal = ({ isOpen, closeModal }: ModalProps) => {
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
      style={{ top: '250px' }}
      width='750px'
      open={isModal}
      onCancel={handleCancel}
      footer={false}
      className='add-address-modal'
    >
      <ModalDiv>
        <Header>
          <StorageIcon stroke={Color.$white} />
          <label>My Files Configuration</label>
        </Header>
        <hr />
        <Body>
          <TableRow>
            <TableCell>Attached To</TableCell>
            <TableCell>Date Added</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>d1.c1.large</TableCell>
            <TableCell>17 Oct, 2022</TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>d1.c2.medium</TableCell>
            <TableCell>17 Oct, 2022</TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
        </Body>
        <hr />
        <Footer>
          <IconCardButton
            className='button-card'
            style={{ border: 'none', width: '200px', justifyContent: 'center' }}
            onClick={openModal}
          >
            <label>Attach</label>
          </IconCardButton>
          <CardButton style={{ width: '200px' }} onClick={closeModal}>
            Cancel
          </CardButton>
        </Footer>
      </ModalDiv>
      <ServerSearchModal closeModal={closeChildModal} isOpen={isModalOpen} />
    </Modal>
  );
};
export default FileConfigModal;

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
    border-color: #f1f1f1;
  }
`;
const Body = styled.div`
  padding: ${Padding.base} ${Padding.base};
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
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
const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
`;
