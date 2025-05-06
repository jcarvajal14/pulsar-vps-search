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
import SearchComponent from '../../common/input/search';
import ServerCell from '../../lists/traffic-table/server-cell';
import { StatusType } from '../../../../types/status.module';
import StatusContext from '../../common/status';

const ServerSearchModal = ({ isOpen, closeModal }: ModalProps) => {
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
          <label>Servers</label>
        </Header>
        <hr />
        <SearchDiv>
          <SearchComponent />
        </SearchDiv>

        <Body>
          <TableRow>
            <TableCell>Servers</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>
              <ServerCell
                serverAddress='192.168.1.24'
                serverType='d1.c1.large'
              />
            </TableCell>
            <TableCell>
              <StatusContext type label='On' status={StatusType.on} />
            </TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>
              <ServerCell
                serverAddress='192.168.1.24'
                serverType='d1.c1.large'
              />
            </TableCell>
            <TableCell>
              <StatusContext type label='On' status={StatusType.on} />
            </TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>
              <ServerCell
                serverAddress='192.168.1.24'
                serverType='d1.c1.large'
              />
            </TableCell>
            <TableCell>
              <StatusContext type label='On' status={StatusType.on} />
            </TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>
              <ServerCell
                serverAddress='192.168.1.24'
                serverType='d1.c1.large'
              />
            </TableCell>
            <TableCell>
              <StatusContext type label='On' status={StatusType.on} />
            </TableCell>
            <TableCell>
              <CircleCrossIcon stroke={Color.$error_400} />
            </TableCell>
          </TableRow>
          <hr />
          <TableRow>
            <TableCell>
              <ServerCell
                serverAddress='192.168.1.24'
                serverType='d1.c1.large'
              />
            </TableCell>
            <TableCell>
              <StatusContext type label='On' status={StatusType.on} />
            </TableCell>
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
          >
            <label>Done</label>
          </IconCardButton>
          <CardButton style={{ width: '200px' }} onClick={closeModal}>
            Cancel
          </CardButton>
        </Footer>
      </ModalDiv>
    </Modal>
  );
};
export default ServerSearchModal;

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
  padding: ${Padding.base} ${Padding.base};
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
const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
`;
const SearchDiv = styled.div`
  & > div {
    width: 100%;
    background-color: ${Color.$neutral_overlay};
    & input {
      background-color: ${Color.$neutral_overlay};
      &:hover {
        background-color: ${Color.$neutral_overlay};
      }
      &:focus-visible {
        background-color: ${Color.$neutral_overlay};
      }
    }
  }
`;
