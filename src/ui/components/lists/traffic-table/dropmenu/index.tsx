import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Hr } from '../../../common/Hr';
import ServersIcon from '../../../common/svgicons/ServersIcon';
import BillingIcon from '../../../common/svgicons/BillingIcon';
import ViewStatementIcon from '../../../common/svgicons/ViewStatementIcon';
import IpAddressesIcon from '../../../common/svgicons/IpAddressesIcon';
import PowerCycleIcon from '../../../common/svgicons/PowerCycleIcon';
import TrashIcon from '../../../common/svgicons/TrashIcon';
import styled from 'styled-components';
import { Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';
import Link from 'next/link';
import ReimageMoal from '../../../modals/reimage-modal';
import CloudStorageIcon from '../../../common/svgicons/CloudStorageIcon';

const MenuItemPowerCycleDiv = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  padding: ${Space.xxs} ${Space.xs};
  gap: ${Space.s};
  width: 100%;
  height: 100%;
  align-items: center;
  label {
    color: ${Color.$error_400};
  }
  &:hover {
    label {
      color: ${Color.$error_700};
      font-weight: 600;
    }
    svg > path {
      stroke-width: 2;
      stroke: ${Color.$error_700};
    }
  }
`;

const MenuItemDiv = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  padding: ${Space.xxs} ${Space.xs};
  gap: ${Space.s};
  align-items: center;
  &:hover {
    label {
      color: ${Color.$white};
    }
    svg > path {
      stroke-width: 2;
      stroke: white;
    }
  }
`;

export default function DropdownMenu(props: any) {
  const { anchorEl, setAnchorEl, selectedId } = props;
  const open = Boolean(anchorEl);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href={{
              pathname: '/servers/management',
              query: { id: selectedId },
            }}
          >
            {/* <Link href='/servers/management' as={`/servers/management?id=${selectedId}`}> */}
            <MenuItemDiv>
              <ServersIcon width={18} height={18} />
              <label>Manage Server</label>
            </MenuItemDiv>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/payments'>
            <MenuItemDiv>
              <BillingIcon />
              <label>Change Billing</label>
            </MenuItemDiv>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/ipaddresses'>
            <MenuItemDiv>
              <IpAddressesIcon width={18} height={16} />
              <label>Ip Addresses</label>
            </MenuItemDiv>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/ipaddresses'>
            <MenuItemDiv>
              <CloudStorageIcon width={18} height={14} />
              <label>Cloud Storage</label>
            </MenuItemDiv>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemDiv>
            <ViewStatementIcon
              width={20}
              height={20}
              stroke='#8B8B93'
              strokeWidth='1.5'
            />
            <label>View Statements</label>
          </MenuItemDiv>
        </MenuItem>
        <Hr
          style={{
            marginLeft: '12px',
            marginRight: '12px',
            marginTop: '8px',
            marginBottom: '12px',
            borderColor: '#475467',
          }}
        />
        <MenuItem onClick={handleClose}>
          <MenuItemPowerCycleDiv id='power-cycle'>
            <PowerCycleIcon
              width={18}
              height={18}
              strokeWidth='1.5'
              stroke='#ED4C4D'
            />
            <label style={{ marginTop: '2px' }}>Power Cycle</label>
          </MenuItemPowerCycleDiv>
        </MenuItem>
        <MenuItem>
          <MenuItemDiv
            onClick={() => {
              handleClose();
              openModal();
            }}
          >
            <TrashIcon stroke='1.5' width={18} height={18} />
            <label style={{ marginTop: '4px' }}>Reimage Server</label>
          </MenuItemDiv>
        </MenuItem>
      </Menu>
      <ReimageMoal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
