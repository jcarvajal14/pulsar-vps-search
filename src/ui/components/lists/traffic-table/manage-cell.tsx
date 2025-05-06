import React from 'react'
import { ManageCellButton, ManageDropDown } from './styled';
import { useState } from 'react';
import DropdownMenu from './dropmenu';


interface ManageCellProps {
  status: boolean;
  seletedId: number;
}
const ManageCell = ({ status, seletedId }: ManageCellProps) => {
  const [dropDownStatus, ToggleDropDown] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    ToggleDropDown(true) 
  };
  return (
    <ManageDropDown>
      <ManageCellButton
        onClick={handleClick}
        onBlur={() => ToggleDropDown(anchorEl ? true : false)}
      >
        <label>&bull;&bull;&bull;</label>
      </ManageCellButton>
      <DropdownMenu anchorEl={anchorEl} selectedId={seletedId} setAnchorEl={setAnchorEl} />
    </ManageDropDown>
  );
};
export default ManageCell;
