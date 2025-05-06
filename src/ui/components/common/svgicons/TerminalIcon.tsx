import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const TerminalIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='16'
        height='14'
        viewBox='0 0 16 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.33301 11.1666L6.33301 6.16663L1.33301 1.16663M7.99967 12.8333H14.6663'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default TerminalIcon;
