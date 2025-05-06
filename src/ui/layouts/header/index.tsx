import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AccountProviderProps } from '../AccountProvider';
import {
  TopBar,
  LogoContent,
  AuthContent,
  LandingPageLogoContent,
  LandingNavbar,
  LoginButton,
  SignupButton,
  HeaderTab,
  EnabledLogo,
  DisabledLogo,
  OffcanvasBodyDiv,
  UserAvatarDiv,
} from './styled';
import CompanyLogo from '../../../assets/images/company-logo.png';
import LandingLogo from '../../../assets/images/landing-logo.png';
import UserAvatar from '../../../assets/icons/girl.png';
import AlarmHeaderIcon from '../../components/common/svgicons/AlarmHeaderIcon';
import { AuthContextProps } from '../../../auth/AuthProvider';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { Dropdown, Menu } from 'antd';
import { setAccessToken } from '../../../services/auth';
import { useRouter } from 'next/router';
import ArrowDownIcon from '../../components/common/svgicons/ArrowDownIcon';
import { Color } from '../../../constants/color';
import QuestionHeaderIcon from '../../components/common/svgicons/QuestionHeaderIcon';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface LayoutProps {
  auth: AuthContextProps | null;
  account: AccountProviderProps | null;
}
const Header = ({ auth, account }: LayoutProps) => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isAccountPage, setIsAccountPage] = useState<boolean | undefined>(
    undefined
  );
  const [isLogined, setIsLogined] = useState<boolean | undefined>();

  useEffect(() => {
    setIsAccountPage(account?.isAccountPage);
    setIsLogined(auth?.isAuthenticated);
  }, [account, auth]);

  const products = [
    { label: 'Overview', key: 'item-1' }, // remember to pass the key prop
    { label: 'Featues', key: 'item-2' },
    { label: 'Solutions', key: 'item-3' },
    { label: 'Tutorials', key: 'item-4' },
    { label: 'Pricing', key: 'item-5' },
  ];
  const resources = [
    { label: 'Blog', key: 'item-1' }, // remember to pass the key prop
    { label: 'Newsletter', key: 'item-2' },
    { label: 'Events', key: 'item-3' },
    { label: 'Help centre', key: 'item-4' },
    { label: 'Support', key: 'item-5' },
  ];

  const Logout = () => {
    setAccessToken(null);
    router.push('/login');
  };

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link href='temp'>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href='dashboard'>My Account</Link>
      </Menu.Item>
      <Menu.Item onClick={Logout}>Log out</Menu.Item>
    </Menu>
  );

  return (
    <TopBar>
      <LogoContent>
        {isAccountPage ? (
          <Link href='/price'>
            <Image src={CompanyLogo} alt='Company Logo' />
          </Link>
        ) : (
          <LandingPageLogoContent>
            <EnabledLogo onClick={handleShow}>
              <Image src={LandingLogo} alt='landing-logo' />
            </EnabledLogo>
            <DisabledLogo>
              <Image src={LandingLogo} alt='landing-logo' />
            </DisabledLogo>
            <Offcanvas show={show} onHide={handleClose} backdrop={true}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Image src={LandingLogo} alt='landing-logo' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <OffcanvasBodyDiv className='font-rubik'>
                  <Link href='/price'>Home</Link>
                  <Dropdown menu={{ items: products }} trigger={['hover']}>
                    <Link href='/price'>
                      <HeaderTab>
                        Products&nbsp;&nbsp;
                        <ArrowDownIcon stroke={Color.$white} />
                      </HeaderTab>
                    </Link>
                  </Dropdown>
                  <Dropdown menu={{ items: resources }} trigger={['hover']}>
                    <Link href='/price'>
                      <HeaderTab>
                        Resources&nbsp;&nbsp;
                        <ArrowDownIcon stroke={Color.$white} />
                      </HeaderTab>
                    </Link>
                  </Dropdown>
                  <Link href='/price'>Pricing</Link>
                </OffcanvasBodyDiv>
              </Offcanvas.Body>
            </Offcanvas>
            <LandingNavbar className='font-rubik'>
              <Link href='/price'>Home</Link>
              <Dropdown menu={{ items: products }} trigger={['hover']}>
                <Link href='/price'>
                  <HeaderTab>
                    Products&nbsp;&nbsp;
                    <ArrowDownIcon stroke={Color.$white} />
                  </HeaderTab>
                </Link>
              </Dropdown>
              <Dropdown menu={{ items: resources }} trigger={['hover']}>
                <Link href='/price'>
                  <HeaderTab>
                    Resources&nbsp;&nbsp;
                    <ArrowDownIcon stroke={Color.$white} />
                  </HeaderTab>
                </Link>
              </Dropdown>
              <Link href='/price'>Pricing</Link>
            </LandingNavbar>
          </LandingPageLogoContent>
        )}
      </LogoContent>
      {isLogined ? (
        <AuthContent>
          <div className='icon alarm-icon cursor-pointer'>
            <AlarmHeaderIcon stroke={'1'} />
          </div>
          <div className='icon alarm-icon cursor-pointer'>
            <QuestionHeaderIcon stroke={'1'} />
          </div>
          <Dropdown overlay={userMenu} trigger={['click']}>
            <Link href='/price'>
              <UserAvatarDiv>
                <Image
                  src={UserAvatar}
                  className='icon user-avatar'
                  alt='user'
                />
              </UserAvatarDiv>
            </Link>
          </Dropdown>
        </AuthContent>
      ) : (
        <AuthContent>
          <Link href='/login'>
            <LoginButton>Log in</LoginButton>
          </Link>
          <Link href='/signup'>
            <SignupButton className='button-primary'>Sign up</SignupButton>
          </Link>
        </AuthContent>
      )}
    </TopBar>
  );
};
export default Header;
