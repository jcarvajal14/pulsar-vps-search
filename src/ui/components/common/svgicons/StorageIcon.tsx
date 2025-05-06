import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const StorageIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'28'}
        height={height??'22'}
        viewBox='0 0 28 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M26.5 11H1.5M26.5 11V18.5C26.5 19.163 26.2366 19.7989 25.7678 20.2678C25.2989 20.7366 24.663 21 24 21H4C3.33696 21 2.70107 20.7366 2.23223 20.2678C1.76339 19.7989 1.5 19.163 1.5 18.5V11M26.5 11L22.1875 2.3875C21.9805 1.97098 21.6615 1.62046 21.2662 1.37535C20.8709 1.13024 20.4151 1.00025 19.95 1H8.05C7.58489 1.00025 7.12908 1.13024 6.73381 1.37535C6.33853 1.62046 6.01947 1.97098 5.8125 2.3875L1.5 11M6.5 16H6.5125M11.5 16H11.5125'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default StorageIcon;
