import React, { useState, useEffect } from 'react';
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const AssignedIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true);
  }, []);
  return !isClient ? null : (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.1673 9.1567V10C19.1662 11.9768 18.5261 13.9002 17.3425 15.4834C16.159 17.0666 14.4953 18.2248 12.5997 18.7853C10.7041 19.3457 8.67814 19.2784 6.82392 18.5934C4.96969 17.9084 3.38658 16.6423 2.3107 14.984C1.23481 13.3257 0.723793 11.3641 0.853855 9.39166C0.983917 7.41922 1.74809 5.54167 3.03241 4.03902C4.31672 2.53637 6.05237 1.48914 7.98049 1.05351C9.90861 0.617872 11.9259 0.817181 13.7315 1.62171M19.1673 2.66671L10.0007 11.8425L7.25066 9.09254'
          stroke='#8B8B93'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default AssignedIcon;
