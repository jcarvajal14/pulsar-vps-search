import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const EditIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='19'
        viewBox='0 0 20 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.1665 2.8288H3.33317C2.89114 2.8288 2.46722 3.0044 2.15466 3.31696C1.8421 3.62952 1.6665 4.05344 1.6665 4.49547V16.1621C1.6665 16.6042 1.8421 17.0281 2.15466 17.3406C2.46722 17.6532 2.89114 17.8288 3.33317 17.8288H14.9998C15.4419 17.8288 15.8658 17.6532 16.1783 17.3406C16.4909 17.0281 16.6665 16.6042 16.6665 16.1621V10.3288M15.4165 1.5788C15.748 1.24728 16.1977 1.06104 16.6665 1.06104C17.1353 1.06104 17.585 1.24728 17.9165 1.5788C18.248 1.91032 18.4343 2.35996 18.4343 2.8288C18.4343 3.29764 18.248 3.74728 17.9165 4.0788L9.99984 11.9955L6.6665 12.8288L7.49984 9.49547L15.4165 1.5788Z'
          stroke='white'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default EditIcon;
