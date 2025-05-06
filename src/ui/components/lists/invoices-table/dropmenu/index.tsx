import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Hr } from '../../../common/Hr';
import styled from 'styled-components';
import { Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';
import Link from 'next/link';
import ReimageMoal from '../../../modals/reimage-modal';
import AssignedIcon from '../../../common/svgicons/AssignedIcon';
import CircleCrossIcon from '../../../common/svgicons/CircleCrossIcon';
import ViewStatementIcon from '../../../common/svgicons/ViewStatementIcon';
import PaymentsIcon from '../../../common/svgicons/PaymentsIcon';
import StorageIcon from '../../../common/svgicons/StorageIcon';
import DownloadIcon from '../../../common/svgicons/DownloadIcon';

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
          {/* <Link> */}
            <MenuItemDiv>
            <ViewStatementIcon
              width={22}
              height={20}
              stroke='#8B8B93'
              strokeWidth='1.5'
            />
              <label>View Details</label>
            </MenuItemDiv>
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {/* <Link> */}
            <MenuItemDiv>
              <PaymentsIcon width={14} height={16} />
              <label>Make Payment</label>
            </MenuItemDiv>
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {/* <Link> */}
            <MenuItemDiv>
              <StorageIcon width={22} height={22} />
              <label>Cloud Storage</label>
            </MenuItemDiv>
          {/* </Link> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {/* <Link> */}
            <MenuItemDiv>
              <DownloadIcon width={22} height={18} />
              <label>Download</label>
            </MenuItemDiv>
          {/* </Link> */}
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
            <label style={{ marginTop: '2px' }}>Dispute</label>
          </MenuItemPowerCycleDiv>
        </MenuItem>
      </Menu>
      <ReimageMoal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
