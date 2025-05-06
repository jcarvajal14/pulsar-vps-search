import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const PasswordEyeIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='16'
        viewBox='0 0 20 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.833252 8.00004C0.833252 8.00004 4.16658 1.33337 9.99992 1.33337C15.8333 1.33337 19.1666 8.00004 19.1666 8.00004C19.1666 8.00004 15.8333 14.6667 9.99992 14.6667C4.16658 14.6667 0.833252 8.00004 0.833252 8.00004Z'
          stroke='#F1F1F1'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.99992 10.5C11.3806 10.5 12.4999 9.38075 12.4999 8.00004C12.4999 6.61933 11.3806 5.50004 9.99992 5.50004C8.61921 5.50004 7.49992 6.61933 7.49992 8.00004C7.49992 9.38075 8.61921 10.5 9.99992 10.5Z'
          stroke='#F1F1F1'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default PasswordEyeIcon;
