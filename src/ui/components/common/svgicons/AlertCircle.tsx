import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const AlertCircle = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'19'}
        height={height??'19'}
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.59896 5.86523V9.19857M9.59896 12.5319H9.60729M17.9323 9.19857C17.9323 13.8009 14.2013 17.5319 9.59896 17.5319C4.99659 17.5319 1.26562 13.8009 1.26562 9.19857C1.26562 4.59619 4.99659 0.865234 9.59896 0.865234C14.2013 0.865234 17.9323 4.59619 17.9323 9.19857Z'
          stroke='#ED4C4D'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default AlertCircle;
