import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const TrashIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
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
          d='M0.75 4.50004H2.58333M2.58333 4.50004H17.25M2.58333 4.50004V17.3334C2.58333 17.8196 2.77649 18.2859 3.1203 18.6297C3.46412 18.9736 3.93044 19.1667 4.41667 19.1667H13.5833C14.0696 19.1667 14.5359 18.9736 14.8797 18.6297C15.2235 18.2859 15.4167 17.8196 15.4167 17.3334V4.50004H2.58333ZM5.33333 4.50004V2.66671C5.33333 2.18048 5.52649 1.71416 5.8703 1.37034C6.21412 1.02653 6.68044 0.833374 7.16667 0.833374H10.8333C11.3196 0.833374 11.7859 1.02653 12.1297 1.37034C12.4735 1.71416 12.6667 2.18048 12.6667 2.66671V4.50004M7.16667 9.08337V14.5834M10.8333 9.08337V14.5834'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default TrashIcon;
