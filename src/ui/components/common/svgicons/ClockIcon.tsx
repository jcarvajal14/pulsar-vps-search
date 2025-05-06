import React, { useState, useEffect } from 'react';
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ClockIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true);
  }, []);
  return !isClient ? null : (
    // <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
    <svg
      width={width??'18'}
      height={height??'18'}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.4416 13.5665C17.8584 14.9456 16.9463 16.1608 15.785 17.106C14.6236 18.0512 13.2484 18.6975 11.7796 18.9884C10.3108 19.2793 8.79312 19.2059 7.3592 18.7748C5.92528 18.3436 4.61881 17.5678 3.554 16.5151C2.4892 15.4624 1.69848 14.1648 1.25098 12.7359C0.803485 11.307 0.712832 9.79026 0.986949 8.31823C1.26107 6.8462 1.89161 5.46373 2.82344 4.29168C3.75528 3.11963 4.96004 2.19369 6.3324 1.59482M19.1657 10.0007C19.1657 8.79687 18.9286 7.60487 18.468 6.49272C18.0073 5.38057 17.3321 4.37004 16.4809 3.51884C15.6297 2.66764 14.6192 1.99242 13.507 1.53176C12.3948 1.07109 11.2029 0.833984 9.99907 0.833984V10.0007H19.1657Z'
        stroke='#8A8A98'
        stroke-width='1'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
    // </SvgContainer>
  );
};
export default ClockIcon;
