import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ChartBarIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='14'
        height='18'
        viewBox='0 0 14 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13 17V7M7 17V1M1 17V11'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ChartBarIcon;
