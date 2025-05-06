import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const PlusRoundedIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.4998 7.16724V13.8339M7.1665 10.5006H13.8332M18.8332 10.5006C18.8332 15.1029 15.1022 18.8339 10.4998 18.8339C5.89746 18.8339 2.1665 15.1029 2.1665 10.5006C2.1665 5.8982 5.89746 2.16724 10.4998 2.16724C15.1022 2.16724 18.8332 5.8982 18.8332 10.5006Z'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default PlusRoundedIcon;
