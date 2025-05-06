import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import InputComponent from '../../common/input/input';
import { Color } from '../../../../constants/color';
import WalletLogoText from '../../common/svgicons/WalletLogoText';

type TabContent = {
  label: JSX.Element;
  key: string;
  children: JSX.Element;
};

const CardMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Padding.base} ${Padding.sb};
  gap: ${Space.s};
`;
const WalletMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Padding.base} ${Padding.sb};
  gap: ${Space.s};
  align-items: center;
`;
const WalletConnectButton = styled.button`
  border-radius: ${BorderRadius.base};
  background-color: ${Color.$neutral_foreground};
  border: solid 1px ${Color.$brand_600};
  padding: ${Padding.s};
  width: 200px;
`;

export const Card: TabContent = {
  label: <label style={{ textAlign: 'center' }}>Card</label>,
  key: '1',
  children: (
    <CardMainContent>
      <label>Saved Payment Methods</label>
      <InputComponent inputPlaceholder='Visa ending in 1926' />
    </CardMainContent>
  ),
};

export const Crypto: TabContent = {
  label: <label style={{ textAlign: 'center' }}>Crypto</label>,
  key: '2',
  children: (
    <WalletMainContent>
      <WalletConnectButton>
        <WalletLogoText />
      </WalletConnectButton>
    </WalletMainContent>
  ),
};
