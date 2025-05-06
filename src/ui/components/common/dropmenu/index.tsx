import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Hr } from '../Hr';
import ServersIcon from '../svgicons/ServersIcon';
import BillingIcon from '../svgicons/BillingIcon';
import ViewStatementIcon from '../svgicons/ViewStatementIcon';
import IpAddressesIcon from '../svgicons/IpAddressesIcon';
import PowerCycleIcon from '../svgicons/PowerCycleIcon';
import TrashIcon from '../svgicons/TrashIcon';

export default function DropdownMenu(props: any) {
  const { anchorEl, setAnchorEl } = props;
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        <BillingIcon />
        <label>Change Billing</label>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ServersIcon />
        <label>Manage Server</label>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <IpAddressesIcon />
        <label>Ip Addresses</label>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ViewStatementIcon />
        <label>View Statements</label>
      </MenuItem>
      <Hr style={{ marginLeft: '12px', marginRight: '12px' }} />
      <MenuItem onClick={handleClose}>
        <PowerCycleIcon />
        <label>Power Cycle</label>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <TrashIcon stroke='2'/>
        <label>Reimage Server</label>
      </MenuItem>
    </Menu>
  );
}
