import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const HuobiIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='59'
        height='58'
        viewBox='0 0 59 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24.5857 1.88456C27.5502 0.173009 31.2026 0.173012 34.1671 1.88456L50.5162 11.3237C53.4807 13.0352 55.3069 16.1983 55.3069 19.6214V38.4996C55.3069 41.9227 53.4806 45.0858 50.5162 46.7974L34.1671 56.2365C31.2026 57.948 27.5502 57.948 24.5857 56.2365L8.23671 46.7974C5.27222 45.0858 3.44602 41.9227 3.44602 38.4996V19.6214C3.44602 16.1983 5.27222 13.0352 8.23672 11.3237L24.5857 1.88456Z'
          fill='#0066ED'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M33.2114 22.1535C33.2114 16.9946 30.8245 12.5582 29.009 11.1136C29.0015 11.109 28.8701 11.0312 28.8813 11.2375L28.8787 11.2438C28.7279 21.2044 23.8949 23.9041 21.2379 27.5408C15.1061 35.933 20.8086 45.1342 26.6155 46.8348C29.8647 47.7864 25.8652 45.1512 25.3502 39.5852C24.7273 32.8577 33.2114 27.7226 33.2114 22.1535Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M35.9975 25.5448C35.9603 25.5181 35.9073 25.4999 35.8709 25.5635C35.771 26.8174 34.5545 29.4995 33.0127 31.9623C27.7832 40.3162 30.7633 44.3432 32.439 46.5061C33.412 47.7618 32.439 46.5061 34.8711 45.2229C35.0615 45.1225 39.6163 42.433 40.1095 36.3055C40.587 30.3716 37.202 26.6314 35.9975 25.5448Z'
          fill='white'
        />
      </svg>
    </SvgContainer>
  );
};
export default HuobiIcon;
