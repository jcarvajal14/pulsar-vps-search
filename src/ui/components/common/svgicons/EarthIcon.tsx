import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const EarthIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.1663 10C19.1663 15.0627 15.0623 19.1667 9.99967 19.1667M19.1663 10C19.1663 4.93743 15.0623 0.833374 9.99967 0.833374M19.1663 10H0.833008M9.99967 19.1667C4.93706 19.1667 0.833008 15.0627 0.833008 10M9.99967 19.1667C12.2925 16.6565 13.5955 13.399 13.6663 10C13.5955 6.60107 12.2925 3.34353 9.99967 0.833374M9.99967 19.1667C7.70683 16.6565 6.40382 13.399 6.33301 10C6.40382 6.60107 7.70683 3.34353 9.99967 0.833374M0.833008 10C0.833008 4.93743 4.93706 0.833374 9.99967 0.833374'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default EarthIcon;
