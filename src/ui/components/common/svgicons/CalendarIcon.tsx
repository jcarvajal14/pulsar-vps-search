import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const CalendarIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
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
          d='M5.71289 1.33325V3.33325'
          stroke='#64646F'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.0464 1.33325V3.33325'
          stroke='#64646F'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.71289 6.06006H14.0462'
          stroke='#64646F'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.3796 5.66659V11.3333C14.3796 13.3333 13.3796 14.6666 11.0463 14.6666H5.71297C3.37964 14.6666 2.37964 13.3333 2.37964 11.3333V5.66659C2.37964 3.66659 3.37964 2.33325 5.71297 2.33325H11.0463C13.3796 2.33325 14.3796 3.66659 14.3796 5.66659Z'
          stroke='#64646F'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.8429 9.13338H10.8488'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.8429 11.1334H10.8488'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.37655 9.13338H8.38253'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.37655 11.1334H8.38253'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.90926 9.13338H5.91525'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.90926 11.1334H5.91525'
          stroke='#64646F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default CalendarIcon;
