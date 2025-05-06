import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const CloudStorageIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='18'
        height='20'
        viewBox='0 0 18 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.25 3.58398C17.25 5.10277 13.5563 6.33398 9 6.33398C4.44365 6.33398 0.75 5.10277 0.75 3.58398M17.25 3.58398C17.25 2.0652 13.5563 0.833984 9 0.833984C4.44365 0.833984 0.75 2.0652 0.75 3.58398M17.25 3.58398V16.4173C17.25 17.939 13.5833 19.1673 9 19.1673C4.41667 19.1673 0.75 17.939 0.75 16.4173V3.58398M17.25 10.0007C17.25 11.5223 13.5833 12.7507 9 12.7507C4.41667 12.7507 0.75 11.5223 0.75 10.0007'
          stroke='#8A8A98'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default CloudStorageIcon;
