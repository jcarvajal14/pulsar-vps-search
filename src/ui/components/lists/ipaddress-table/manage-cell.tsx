import React from 'react'
import { ManageCellButton, ManageDropDown } from './styled';
import { useState } from 'react';
import DropdownMenu from './dropmenu';


interface ManageCellProps {
  status: boolean;
}
const ManageCell = ({ status }: ManageCellProps) => {
  const [dropDownStatus, ToggleDropDown] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    ToggleDropDown(!dropDownStatus)
  };
  return (
    <ManageDropDown>
      <ManageCellButton
        onClick={handleClick}
      >
        <label>&bull;&bull;&bull;</label>
      </ManageCellButton>
      <DropdownMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </ManageDropDown>
  );
};
export default ManageCell;
