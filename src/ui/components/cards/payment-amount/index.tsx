import React from 'react';
import {
  Header,
  MakePaymentButton,
  PaymentAmountContainer,
  AmountButton,
  AmountDetailDiv,
  AmountDetail,
} from './styled';
import PaymentsIcon from '../../common/svgicons/PaymentsIcon';
import { Color } from '../../../../constants/color';

const AmountDetails = [
  { name: 'January 1, 2023', info: 'Payment due' },
  { name: '$0.00', info: 'Credits' },
  { name: '$1005.57', info: 'Total usage' },
  { name: '$15.30', info: 'Total overages' },
  { name: '$1030.87', info: 'Amount due' },
];

const PaymentAmount = () => {
  return (
    <PaymentAmountContainer>
      <Header>
        <h2>
          <strong>Amount Due</strong>
        </h2>
        <MakePaymentButton className='button-primary'>
          <PaymentsIcon stroke={Color.$white} strokeWidth='2' />
          <span>Make Payment</span>
        </MakePaymentButton>
      </Header>
      <p>
        This is an estimate of the amount you will owe based on your current
        month-to-date usage after all credits and charges.
      </p>
      <AmountButton className='button-secondary'>
        <strong>$1025.57</strong>
      </AmountButton>
      <AmountDetailDiv>
        {AmountDetails.map((item) => (
          <AmountDetail key={item.name}>
            <label>{item.name}</label>
            <label>{item.info}</label>
          </AmountDetail>
        ))}
      </AmountDetailDiv>
    </PaymentAmountContainer>
  );
};
export default PaymentAmount;
