import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const LoginLogoIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='54'
        height='54'
        viewBox='0 0 54 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_dd_814_24003)'>
          <g clipPath='url(#clip0_814_24003)'>
            <rect x='3' y='2' width='48' height='48' rx='12' fill='white' />
            <rect
              x='3'
              y='2'
              width='48'
              height='48'
              rx='12'
              fill='url(#paint0_linear_814_24003)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M27.0001 5.05828C15.4343 5.05828 6.0584 14.4342 6.0584 26C6.0584 37.5658 15.4343 46.9418 27.0001 46.9418C38.566 46.9418 47.9419 37.5658 47.9419 26C47.9419 14.4342 38.566 5.05828 27.0001 5.05828ZM5.94189 26C5.94189 14.3699 15.37 4.94177 27.0001 4.94177C38.6303 4.94177 48.0584 14.3699 48.0584 26C48.0584 37.6302 38.6303 47.0583 27.0001 47.0583C15.37 47.0583 5.94189 37.6302 5.94189 26Z'
              fill='#D0D5DD'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M27 20.1169C23.7506 20.1169 21.1165 22.751 21.1165 26.0004C21.1165 29.2497 23.7506 31.8839 27 31.8839C30.2494 31.8839 32.8835 29.2497 32.8835 26.0004C32.8835 22.751 30.2494 20.1169 27 20.1169ZM21 26.0004C21 22.6867 23.6863 20.0004 27 20.0004C30.3137 20.0004 33 22.6867 33 26.0004C33 29.3141 30.3137 32.0004 27 32.0004C23.6863 32.0004 21 29.3141 21 26.0004Z'
              fill='#D0D5DD'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M26.9999 21.9802C24.7801 21.9802 22.9805 23.7797 22.9805 25.9996C22.9805 28.2194 24.7801 30.019 26.9999 30.019C29.2198 30.019 31.0194 28.2194 31.0194 25.9996C31.0194 23.7797 29.2198 21.9802 26.9999 21.9802ZM22.864 25.9996C22.864 23.7154 24.7157 21.8636 26.9999 21.8636C29.2841 21.8636 31.1359 23.7154 31.1359 25.9996C31.1359 28.2838 29.2841 30.1355 26.9999 30.1355C24.7157 30.1355 22.864 28.2838 22.864 25.9996Z'
              fill='#D0D5DD'
            />
            <path d='M26.9419 2H27.0584V50H26.9419V2Z' fill='#D0D5DD' />
            <path
              d='M51 25.9414L51 26.0579L3 26.0579L3 25.9414L51 25.9414Z'
              fill='#D0D5DD'
            />
            <path d='M42.9031 2H43.0196V50H42.9031V2Z' fill='#D0D5DD' />
            <path d='M18.9614 2H19.0779V50H18.9614V2Z' fill='#D0D5DD' />
            <path d='M34.9224 2H35.0389V50H34.9224V2Z' fill='#D0D5DD' />
            <path d='M10.9805 2H11.097V50H10.9805V2Z' fill='#D0D5DD' />
            <path
              d='M51 41.9023L51 42.0188L3 42.0188L3 41.9023L51 41.9023Z'
              fill='#D0D5DD'
            />
            <path
              d='M51 17.9609L51 18.0774L3 18.0774L3 17.9609L51 17.9609Z'
              fill='#D0D5DD'
            />
            <path
              d='M51 33.9219L51 34.0384L3 34.0384L3 33.9219L51 33.9219Z'
              fill='#D0D5DD'
            />
            <path
              d='M51 9.98047L51 10.097L3 10.097L3 9.98047L51 9.98047Z'
              fill='#D0D5DD'
            />
            <g filter='url(#filter1_dd_814_24003)'>
              <circle
                cx='27'
                cy='26'
                r='12'
                fill='url(#paint1_linear_814_24003)'
              />
            </g>
            <g filter='url(#filter2_b_814_24003)'>
              <path
                d='M3 26H51V30.8C51 37.5206 51 40.8809 49.6921 43.4479C48.5416 45.7058 46.7058 47.5416 44.4479 48.6921C41.8809 50 38.5206 50 31.8 50H22.2C15.4794 50 12.1191 50 9.55211 48.6921C7.29417 47.5416 5.4584 45.7058 4.30792 43.4479C3 40.8809 3 37.5206 3 30.8V26Z'
                fill='white'
                fillOpacity='0.2'
              />
            </g>
          </g>
          <rect
            x='3.225'
            y='2.225'
            width='47.55'
            height='47.55'
            rx='11.775'
            stroke='#D0D5DD'
            strokeWidth='0.45'
          />
        </g>
        <defs>
          <filter
            id='filter0_dd_814_24003'
            x='0'
            y='0'
            width='54'
            height='54'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feGaussianBlur stdDeviation='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_814_24003'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feGaussianBlur stdDeviation='1.5' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_814_24003'
              result='effect2_dropShadow_814_24003'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_814_24003'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_dd_814_24003'
            x='10.5'
            y='11'
            width='33'
            height='33'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1.5' />
            <feGaussianBlur stdDeviation='1.5' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_814_24003'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1.5' />
            <feGaussianBlur stdDeviation='2.25' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_814_24003'
              result='effect2_dropShadow_814_24003'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_814_24003'
              result='shape'
            />
          </filter>
          <filter
            id='filter2_b_814_24003'
            x='-4.5'
            y='18.5'
            width='63'
            height='39'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImageFix' stdDeviation='3.75' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_814_24003'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_814_24003'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_814_24003'
            x1='27'
            y1='2'
            x2='27'
            y2='50'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='1' stopColor='#D0D5DD' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_814_24003'
            x1='21'
            y1='38'
            x2='33'
            y2='14'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#53389E' />
            <stop offset='1' stopColor='#6941C6' />
          </linearGradient>
          <clipPath id='clip0_814_24003'>
            <rect x='3' y='2' width='48' height='48' rx='12' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </SvgContainer>
  );
};
export default LoginLogoIcon;
