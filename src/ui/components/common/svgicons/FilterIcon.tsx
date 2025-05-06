import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const FilterIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='17'
        height='16'
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.37964 1L5.75464 7.58824V12.5294L11.0046 15V7.58824L15.3796 1H1.37964Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default FilterIcon;
