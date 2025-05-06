import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const PowerCycleIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'18'}
        height={height??'20'}
        viewBox='0 0 18 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.8297 5.08671C15.9832 6.2406 16.7687 7.71061 17.0868 9.31088C17.4049 10.9112 17.2414 12.5698 16.6169 14.0771C15.9924 15.5845 14.9349 16.8728 13.5783 17.7792C12.2216 18.6856 10.6267 19.1694 8.99512 19.1694C7.36354 19.1694 5.76859 18.6856 4.41195 17.7792C3.0553 16.8728 1.99787 15.5845 1.37337 14.0771C0.74887 12.5698 0.585336 10.9112 0.903445 9.31088C1.22156 7.71061 2.00702 6.2406 3.16054 5.08671M8.9997 0.833374V10'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default PowerCycleIcon;
