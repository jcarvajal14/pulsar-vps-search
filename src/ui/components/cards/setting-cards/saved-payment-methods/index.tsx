import React from 'react';
import { MainContent, Header } from './styled';
import { SettingCardDiv } from '../styled';
import YourCards from './cards';
import YourWallets from './wallets';

const SavedPaymentMethod = () => {
  return (
    <SettingCardDiv>
      <Header>
        <h3><strong>Saved Payment Methods</strong></h3>
      </Header>
      <MainContent>
        <YourCards />
        <YourWallets />
      </MainContent>
    </SettingCardDiv>
  );
};
export default SavedPaymentMethod;
