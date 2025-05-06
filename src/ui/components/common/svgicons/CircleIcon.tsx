import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const CircleIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'16'}
        height={height??'16'}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='0.5' y='0.5' width='15' height='15' rx='7.5' fill='#F1F1F1' />
        <rect
          x='0.5'
          y='0.5'
          width='15'
          height='15'
          rx='7.5'
          stroke='#8B8B93'
        />
      </svg>
    </SvgContainer>
  );
};
export default CircleIcon;
