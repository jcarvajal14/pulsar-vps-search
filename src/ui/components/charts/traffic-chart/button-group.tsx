import React, { useState } from 'react';
import { PeriodButtonGroupDiv } from './styled';
import { DatePeriod } from '../../../../types/datePeriod.module';

const setPeriodValue = (index: number):DatePeriod => {
  switch (index) {
    case 0:
      return DatePeriod.quater;
    case 1:
      return DatePeriod.hour;
    case 2:
      return DatePeriod.day;
    case 3:
      return DatePeriod.month;
    case 4:
      return DatePeriod.year;
    case 5:
      return DatePeriod.all;
    
    default:
      return DatePeriod.year;
  }
}
interface PeriodButtonGroupProps {
  setPeriod: (period: any) => void;
};

const PeriodButtonGroup = ({setPeriod}: PeriodButtonGroupProps) => {
  const durationLabels: string[] = [
    '15 Mins',
    '1 Hour',
    '1 Day',
    '1 Month',
    '1 Year',
    'All Time',
  ];
  const [activeButton, setActiveButton] = useState<number>(4);

  const handleClick = (index: number) => {
    setActiveButton(index);
    setPeriod(setPeriodValue(index));
  };
  return (
    <PeriodButtonGroupDiv>
      {durationLabels.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={activeButton === index ? 'active-button' : ''}
        >
          <strong>{item}</strong>
        </button>
      ))}
    </PeriodButtonGroupDiv>
  );
};
export default PeriodButtonGroup;
