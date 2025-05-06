import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ServersIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'20'}
        height={height??'20'}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.49967 4.50004H4.50884M4.49967 15.5H4.50884M2.66634 0.833374H17.333C18.3455 0.833374 19.1663 1.65419 19.1663 2.66671V6.33337C19.1663 7.3459 18.3455 8.16671 17.333 8.16671H2.66634C1.65382 8.16671 0.833008 7.3459 0.833008 6.33337V2.66671C0.833008 1.65419 1.65382 0.833374 2.66634 0.833374ZM2.66634 11.8334H17.333C18.3455 11.8334 19.1663 12.6542 19.1663 13.6667V17.3334C19.1663 18.3459 18.3455 19.1667 17.333 19.1667H2.66634C1.65382 19.1667 0.833008 18.3459 0.833008 17.3334V13.6667C0.833008 12.6542 1.65382 11.8334 2.66634 11.8334Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ServersIcon;
