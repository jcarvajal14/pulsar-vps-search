import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const OsciloIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='30'
        height='27'
        viewBox='0 0 30 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M28.3333 13.5H23L19 25.5L11 1.5L6.99999 13.5H1.66666'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default OsciloIcon;
