import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ThreeDotIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='2'
        height='7'
        viewBox='0 0 2 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='0.927749' cy='1.05739' r='0.759292' fill='white' />
        <circle cx='0.927749' cy='3.58839' r='0.759292' fill='white' />
        <circle cx='0.927749' cy='6.1194' r='0.759292' fill='white' />
      </svg>
    </SvgContainer>
  );
};
export default ThreeDotIcon;
