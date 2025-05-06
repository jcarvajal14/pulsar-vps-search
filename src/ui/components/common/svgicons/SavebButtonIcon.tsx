import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const SaveButtonIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='18'
        height='17'
        viewBox='0 0 18 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.1667 15.9956V9.32894H4.83333V15.9956M4.83333 0.995605V5.16227H11.5M14.8333 15.9956H3.16667C2.72464 15.9956 2.30072 15.82 1.98816 15.5074C1.67559 15.1949 1.5 14.771 1.5 14.3289V2.66227C1.5 2.22024 1.67559 1.79632 1.98816 1.48376C2.30072 1.1712 2.72464 0.995605 3.16667 0.995605H12.3333L16.5 5.16227V14.3289C16.5 14.771 16.3244 15.1949 16.0118 15.5074C15.6993 15.82 15.2754 15.9956 14.8333 15.9956Z'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default SaveButtonIcon;
