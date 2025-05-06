import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const CircleCrossIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.4993 7.49935L7.49935 12.4993M7.49935 7.49935L12.4993 12.4993M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935Z'
          stroke='#8B8B93'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default CircleCrossIcon;
