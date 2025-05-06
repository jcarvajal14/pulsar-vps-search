import styled from 'styled-components';

import { BorderRadius, Padding, Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import { media } from '../../../styles/responsive';
import { device } from '../../../constants/device';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-none) var(--padding-base);
  justify-content: space-between;
  background-color: var(--color-primary);
  align-items: center;
  height: 60px;
`;
export const LogoContent = styled.div`
  padding: var(--padding-none) var(--padding-base);
  height: 100%;
`;
export const LandingPageLogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.xl};
  height: 100%;
`;
export const LandingNavbar = styled.div`
  text-decoration: none !important;
  display: flex;
  height: 100%;
  /* gap: ${Space.l}; */
  a {
    text-decoration: none !important;
    padding: ${Space.l};
    height: 100%;
    &:hover {
      /* background-color: ${Color.$black}; */
      color: ${Color.$brand_600};
    }
    font-size: 16px;
    color: ${Color.$white};
  }
  ${media.md`
    display: none;
  `}
`;
export const AuthContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  a {
    display: flex;
    width: 56px;
    justify-content: center;
    align-items: center;
  }
`;
export const LoginButton = styled.button`
  color: ${Color.$white};
  font-size: 16px;
`;
export const SignupButton = styled.button`
  padding: ${Padding.s} ${Padding.base};
  border-radius: ${BorderRadius.xxxl};
`;
export const HeaderTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const EnabledLogo = styled.button`
  border: solid 1px ${Color.$bg_primary};
  border-radius: 12px;
  display: none;
  ${media.md`
  display: flex;
  `};
`;
export const DisabledLogo = styled.div`
  display: flex;
  ${media.md`
  display: none;
  `};
`;

export const OffcanvasBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Padding.l} ${Padding.base};
  gap: ${Space.xl};
  a {
    position: relative;
    color: white;
    text-decoration: none;
    &:hover {
      /* background-color: ${Color.$black}; */
      color: ${Color.$brand_600};
    }
  }
`
export const UserAvatarDiv = styled.button`
  width: 48px;
  height: 48px;
  box-sizing: content-box;
  &:hover, &:active, &:focus {
    border: solid 4px ${Color.$black};
  }
  border-radius: 48px;;
`
