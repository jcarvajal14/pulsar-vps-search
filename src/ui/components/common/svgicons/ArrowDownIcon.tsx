import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ArrowDownIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='12'
        height='8'
        viewBox='0 0 12 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1.5L6 6.5L11 1.5'
          stroke='#F1F1F1'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ArrowDownIcon;
