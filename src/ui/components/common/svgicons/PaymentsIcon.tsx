import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const PaymentsIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.916748 9.16663H21.0834M2.75008 3.66663H19.2501C20.2626 3.66663 21.0834 4.48744 21.0834 5.49996V16.5C21.0834 17.5125 20.2626 18.3333 19.2501 18.3333H2.75008C1.73756 18.3333 0.916748 17.5125 0.916748 16.5V5.49996C0.916748 4.48744 1.73756 3.66663 2.75008 3.66663Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default PaymentsIcon;
