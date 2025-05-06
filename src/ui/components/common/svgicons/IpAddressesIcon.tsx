import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const IpAddressesIcon = ({
  stroke,
  strokeWidth,
  width,
  height,
}: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width ?? 20}
        height={height ?? 18}
        viewBox='0 0 20 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.3335 17.25H13.6668M10.0002 13.5833V17.25M2.66683 0.75H17.3335C18.346 0.75 19.1668 1.57081 19.1668 2.58333V11.75C19.1668 12.7625 18.346 13.5833 17.3335 13.5833H2.66683C1.65431 13.5833 0.833496 12.7625 0.833496 11.75V2.58333C0.833496 1.57081 1.65431 0.75 2.66683 0.75Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default IpAddressesIcon;
