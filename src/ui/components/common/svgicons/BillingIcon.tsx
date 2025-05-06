import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const BillingIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'20'}
        height={height ?? '20'}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.63652 2.81156C10.2734 0.173469 14.55 0.174488 17.1879 2.81156C19.8258 5.44863 19.8258 9.7256 17.1879 12.3637M14.3423 12.4116C14.3423 16.1423 11.3181 19.1667 7.58763 19.1667C3.85716 19.1667 0.833008 16.1423 0.833008 12.4116C0.833008 8.6808 3.85716 5.65642 7.58763 5.65642C11.3181 5.65642 14.3423 8.6808 14.3423 12.4116Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default BillingIcon;
