import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const MasterCardIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    // <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='27'
        height='18'
        viewBox='0 0 27 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='1.06934'
          y='0.307373'
          width='25.6005'
          height='17.612'
          rx='2.2015'
          fill='white'
        />
        <ellipse
          cx='10.903'
          cy='9.00834'
          rx='3.67547'
          ry='3.76298'
          fill='#EE0005'
        />
        <ellipse
          cx='15.4694'
          cy='9.00834'
          rx='3.67547'
          ry='3.76298'
          fill='#F9A000'
        />
        <path
          d='M11.7939 9.00833C11.7939 10.2032 12.338 11.2678 13.1861 11.9571C14.0343 11.2678 14.5783 10.2032 14.5783 9.00833C14.5783 7.81351 14.0343 6.74886 13.1861 6.05957C12.338 6.74892 11.7939 7.81354 11.7939 9.00833Z'
          fill='#FF6300'
        />
      </svg>
    // </SvgContainer>
  );
};
export default MasterCardIcon;
