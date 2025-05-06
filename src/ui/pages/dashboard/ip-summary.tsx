import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../components/cards/card-style';
import { Color } from '../../../constants/color';
import { Space } from '../../../constants/size';
import { IconCardButton } from '../servers/management/server-details';
import IpAddressesIcon from '../../components/common/svgicons/IpAddressesIcon';
import Link from 'next/link';

const IpSummary = () => {
  return (
    <StyledCard>
      <Header>
        <IpAddressesIcon stroke={Color.$white} />
        <label>IP Summary</label>
      </Header>
      <hr />
      <Body>
        <Info>
          <label>{`Reserved IP's`} </label>
          <label>Monthly</label>
        </Info>
        <Info>
          <label>{`Assigned IP\'s`}</label>
          <label>Sep 15, 2023</label>
        </Info>
        <Info>
          <label>{`Unassigned IP\'s`}</label>
          <label>Nov 15, 2023</label>
        </Info>
        <hr />
      </Body>
      <Link href='/ipaddresses'>
        <ChangeBillingModelButton>Manage IP Addresses</ChangeBillingModelButton>
      </Link>
    </StyledCard>
  );
};
export default IpSummary;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  label {
    font-size: 18px;
    color: ${Color.$white};
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 16px;
    &:first-child {
      color: ${Color.$netural_700};
    }
    &:last-child {
      color: ${Color.$white};
    }
  }
`;
const ChangeBillingModelButton = styled(IconCardButton)`
    width: 100%;
  justify-content: center;
`;
