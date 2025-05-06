import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ProcessorIcon = ({
  stroke,
  strokeWidth,
  width,
  height,
}: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width ?? '30'}
        height={height ?? '30'}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.25 1.25V5M18.75 1.25V5M11.25 25V28.75M18.75 25V28.75M25 11.25H28.75M25 17.5H28.75M1.25 11.25H5M1.25 17.5H5M7.5 5H22.5C23.8807 5 25 6.11929 25 7.5V22.5C25 23.8807 23.8807 25 22.5 25H7.5C6.11929 25 5 23.8807 5 22.5V7.5C5 6.11929 6.11929 5 7.5 5ZM11.25 11.25H18.75V18.75H11.25V11.25Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ProcessorIcon;
