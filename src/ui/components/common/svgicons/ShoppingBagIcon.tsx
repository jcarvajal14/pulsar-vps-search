import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ShoppingBagIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='18'
        height='20'
        viewBox='0 0 18 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.5 4.99935L4 1.66602H14L16.5 4.99935M1.5 4.99935V16.666C1.5 17.108 1.67559 17.532 1.98816 17.8445C2.30072 18.1571 2.72464 18.3327 3.16667 18.3327H14.8333C15.2754 18.3327 15.6993 18.1571 16.0118 17.8445C16.3244 17.532 16.5 17.108 16.5 16.666V4.99935M1.5 4.99935H16.5M12.3333 8.33268C12.3333 9.21674 11.9821 10.0646 11.357 10.6897C10.7319 11.3148 9.88405 11.666 9 11.666C8.11594 11.666 7.2681 11.3148 6.64298 10.6897C6.01786 10.0646 5.66667 9.21674 5.66667 8.33268'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ShoppingBagIcon;
