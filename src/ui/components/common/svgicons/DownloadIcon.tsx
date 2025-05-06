import React, { useState, useEffect } from 'react';
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const DownloadIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true);
  }, []);
  return !isClient ? null : (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'18'}
        height={height ?? '18'}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.25 11.75V15.4167C17.25 15.9029 17.0568 16.3692 16.713 16.713C16.3692 17.0568 15.9029 17.25 15.4167 17.25H2.58333C2.0971 17.25 1.63079 17.0568 1.28697 16.713C0.943154 16.3692 0.75 15.9029 0.75 15.4167V11.75M4.41667 7.16667L9 11.75M9 11.75L13.5833 7.16667M9 11.75V0.75'
          stroke='#8A8A98'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default DownloadIcon;
