import React, { useState, useEffect } from 'react';
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ToolIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true);
  }, []);
  return !isClient ? null : (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='19'
        height='18'
        viewBox='0 0 19 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.2499 4.44965C11.0972 4.60542 11.0117 4.81486 11.0117 5.03298C11.0117 5.25111 11.0972 5.46054 11.2499 5.61632L12.5832 6.94965C12.739 7.10234 12.9484 7.18787 13.1665 7.18787C13.3847 7.18787 13.5941 7.10234 13.7499 6.94965L16.8915 3.80798C17.3106 4.73397 17.4375 5.76568 17.2553 6.76561C17.0731 7.76553 16.5905 8.68619 15.8718 9.40488C15.1531 10.1236 14.2324 10.6062 13.2325 10.7884C12.2326 10.9706 11.2009 10.8437 10.2749 10.4247L4.51655 16.183C4.18503 16.5145 3.73539 16.7008 3.26655 16.7008C2.79771 16.7008 2.34807 16.5145 2.01655 16.183C1.68503 15.8515 1.49878 15.4018 1.49878 14.933C1.49878 14.4641 1.68503 14.0145 2.01655 13.683L7.77488 7.92465C7.35585 6.99866 7.22898 5.96696 7.41117 4.96703C7.59335 3.9671 8.07595 3.04645 8.79465 2.32775C9.51334 1.60906 10.434 1.12646 11.4339 0.944268C12.4339 0.762079 13.4656 0.888953 14.3915 1.30798L11.2582 4.44132L11.2499 4.44965Z'
          stroke='#F1F1F1'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ToolIcon;
