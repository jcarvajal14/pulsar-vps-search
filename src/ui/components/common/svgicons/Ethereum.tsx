import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const EthereunIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
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
          d='M24.8823 2.092C27.7726 0.423242 31.3337 0.423244 34.2241 2.09201L50.5732 11.5311C53.4635 13.1999 55.2441 16.2839 55.2441 19.6214V38.4996C55.2441 41.8372 53.4635 44.9212 50.5731 46.5899L34.2241 56.029C31.3337 57.6978 27.7726 57.6978 24.8823 56.029L8.53324 46.5899C5.64286 44.9212 3.86231 41.8372 3.86231 38.4996V19.6214C3.86231 16.2839 5.64286 13.1999 8.53324 11.5311L24.8823 2.092Z'
          fill='#1D243C'
          stroke='#323232'
          strokeWidth='0.47907'
        />
        <path
          d='M17.5762 29.416L29.5494 36.3692V24.0692V9.89771L17.5762 29.416Z'
          fill='#8A93B2'
        />
        <path
          d='M29.5493 9.89771V24.0692V36.3692L41.5225 29.416L29.5493 9.89771Z'
          fill='#63688F'
        />
        <path
          d='M29.5532 24.071L41.5228 29.4161L29.5532 36.3676V24.071Z'
          fill='#464A76'
        />
        <path
          d='M29.5494 24.0693L29.5529 24.0705V36.3659L29.5494 36.3693L17.5762 29.4161L29.5494 24.0693Z'
          fill='#63688F'
        />
        <path
          d='M17.5762 31.6465L29.5494 48.223V38.5963L17.5762 31.6465Z'
          fill='#8B94B3'
        />
        <path
          d='M29.5493 38.5965V48.2233L41.5296 31.6467L29.5493 38.5965Z'
          fill='#63688F'
        />
      </svg>
    </SvgContainer>
  );
};
export default EthereunIcon;
