import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import DashboardIcon from '../svgicons/DashboardIcon';
import ServersIcon from '../svgicons/ServersIcon';
import PaymentsIcon from '../svgicons/PaymentsIcon';
import SettingsIcon from '../svgicons/SettingsIcon';
import IpAddressesIcon from '../svgicons/IpAddressesIcon';
import { Color } from '../../../../constants/color';
import Link from 'next/link';
import CloudStorageIcon from '../svgicons/CloudStorageIcon';
import { media } from '../../../../styles/responsive';

const StyledLink = styled(Link)`
  display: flex;
`;
const TabsGroup = styled.div`
background-color: #1f2128;
  ${media.md`
    position: absolute;
    transform:translate(-50%, 0);
    top: 60px;
    left: 50%;

    display: flex;
    flex-direction: row;
  `};
  ${media.sm`
  position: absolute;
    transform:translate(-50%, 0);
    top: 80px;
    left: 50%;

    display: flex;
    flex-direction: row;
  `}
  display: none;
`;
const TabButton = styled.button`
  display: flex;
  flex: 1;
  width: 80px;
  ${media.sm`
      width: 40px;
      padding: var(--padding-s) var(--padding-s);
  `}
  & > span {
    ${media.sm`
      display: none;
  `}
  }
  flex-direction: column;
  align-items: center;
  gap: var(--padding-s);
  padding: var(--padding-s) var(--padding-base);
`;
const TabButtonNone = styled.button`
  display: flex;
  flex: 1;
  width: 80px;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-s);
  padding: var(--padding-s) var(--padding-s);
  ${media.sm`
      width: 40px;
      padding: var(--padding-s) var(--padding-s);
  `}

  & > span {
    color: var(--color-gray-400);
    ${media.sm`
      display: none;
  `}
  }
  & > .button {
    filter: brightness(50%);
  }
  &:hover {
    background-color: ${Color.$dark_card_bright};
  }
`;
const enum PageTabs {
  Dashboard = 'Dashboard',
  Servers = 'Servers',
  IPAddress = 'IP Addresses',
  Payments = 'Payments',
  Settings = 'Settings',
}

const pages = [
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    route: 'dashboard',
    link: '/dashboard',
  },
  { name: 'Servers', icon: ServersIcon, route: 'servers', link: '/servers' },
  {
    name: 'IPs',
    icon: IpAddressesIcon,
    route: 'ipaddresses',
    link: '/ipaddresses',
  },
  {
    name: 'Storage',
    icon: CloudStorageIcon,
    route: 'cloudstorage',
    link: '/cloudstorage',
  },

  {
    name: 'Payments',
    icon: PaymentsIcon,
    route: 'payments',
    link: '/payments',
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
    route: 'settings',
    link: '/settings',
  },
];

const MobileTabButtonGroup = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <TabsGroup>
      {pages.map(({ name, icon: Icon, route, link }, index) => {
        if (currentRoute.split('/').includes(route)) {
          return (
            <StyledLink key={name} href={link}>
              <TabButton className='button-primary'>
                <Icon stroke='white' strokeWidth='2' />
                <span>{name}</span>
              </TabButton>
            </StyledLink>
          );
        } else {
          return (
            <StyledLink key={name} href={link}>
              <TabButtonNone>
                <Icon stroke='#8A8A98' strokeWidth='1' />
                <span>{name}</span>
              </TabButtonNone>
            </StyledLink>
          );
        }
      })}
    </TabsGroup>
  );
};
export default MobileTabButtonGroup;
