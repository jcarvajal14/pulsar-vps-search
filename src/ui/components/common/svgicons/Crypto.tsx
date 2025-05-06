import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const CryptoIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='58'
        height='58'
        viewBox='0 0 58 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24.3113 1.88456C27.2758 0.173009 30.9282 0.173012 33.8927 1.88456L50.2417 11.3237C53.2062 13.0352 55.0324 16.1983 55.0324 19.6214V38.4996C55.0324 41.9227 53.2062 45.0858 50.2417 46.7974L33.8927 56.2365C30.9282 57.948 27.2758 57.948 24.3113 56.2365L7.9623 46.7974C4.99781 45.0858 3.17161 41.9227 3.17161 38.4996V19.6214C3.17161 16.1983 4.99781 13.0352 7.9623 11.3237L24.3113 1.88456Z'
          fill='#002D72'
        />
        <path
          d='M33.2429 25.5407L31.8959 29.3287L32.2882 33.5604L29.1352 33.5759H26.0119L26.4338 29.3287L25.0571 25.5407H33.2429Z'
          fill='white'
        />
        <path
          d='M36.9953 26.8086L33.2874 29.3443V33.8482L30.46 36.7029V38.0485L33.1911 40.6855H35.4707L41.2214 30.1533L36.9953 26.8086Z'
          fill='white'
        />
        <path
          d='M22.7924 17.7387H35.441L36.9657 24.5216H21.3195L22.7924 17.7387Z'
          fill='white'
        />
        <path
          d='M25.0424 29.3443L21.2899 26.8397L17.049 30.1533L22.8294 40.7166H25.1386L27.8696 38.0485V36.7029L25.0424 33.8482V29.3443Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.3789 18.8588L29.1574 8.69995L45.8694 18.8899V39.2309L29.0834 49.4209L12.3345 39.2232V18.8588H12.3789ZM29.1574 10.7768L14.0515 19.9245V38.2197L29.1574 47.3674L44.1967 38.2197V19.9245L29.1574 10.7768Z'
          fill='white'
        />
      </svg>
    </SvgContainer>
  );
};
export default CryptoIcon;
