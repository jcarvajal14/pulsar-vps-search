import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const MemoryIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='30'
        height='20'
        viewBox='0 0 30 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M26.2499 1.38208H3.74991C2.3692 1.38208 1.24991 2.68491 1.24991 4.29203V15.9721C1.24991 17.5793 2.3692 18.8821 3.74991 18.8821H26.2499C27.6306 18.8821 28.7499 17.5793 28.7499 15.9721V4.29203C28.7499 2.68491 27.6306 1.38208 26.2499 1.38208Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1.24945 13.4524H28.7495'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M24.0497 5.05859H22.7997V8.80859H24.0497V5.05859Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.5574 5.05859H17.3074V8.80859H18.5574V5.05859Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.0151 5.05859H11.7651V8.80859H13.0151V5.05859Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.50003 5.05859H6.25003V8.80859H7.50003V5.05859Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>   
    </SvgContainer>
  );
};
export default MemoryIcon;
