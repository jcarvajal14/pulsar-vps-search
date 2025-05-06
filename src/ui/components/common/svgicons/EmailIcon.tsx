import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const EmailIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
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
          d='M18.3334 3.00004C18.3334 2.08337 17.5834 1.33337 16.6667 1.33337H3.33341C2.41675 1.33337 1.66675 2.08337 1.66675 3.00004M18.3334 3.00004V13C18.3334 13.9167 17.5834 14.6667 16.6667 14.6667H3.33341C2.41675 14.6667 1.66675 13.9167 1.66675 13V3.00004M18.3334 3.00004L10.0001 8.83337L1.66675 3.00004'
          stroke='#ffffff'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default EmailIcon;
