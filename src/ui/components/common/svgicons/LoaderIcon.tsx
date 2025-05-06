import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const LoaderIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
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
          d='M9.59896 0.865234V4.19857M9.59896 14.1986V17.5319M3.70729 3.3069L6.06563 5.66523M13.1323 12.7319L15.4906 15.0902M1.26562 9.19857H4.59896M14.599 9.19857H17.9323M3.70729 15.0902L6.06563 12.7319M13.1323 5.66523L15.4906 3.3069'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default LoaderIcon;
