import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import LogoImage from '../../../assets/images/footer-logo.png';
import Image from 'next/image';
import { device } from '../../../constants/device';
import { media } from '../../../styles/responsive';

const footerDetails = [
  {
    infos: [
      'Products',
      'Overview',
      'Features',
      'Solutions',
      'Tutorials',
      'Pricing',
      'Releases',
    ],
  },
  {
    infos: [
      'Servers',
      'About us',
      'Careers',
      'Press',
      'News',
      'Media kit',
      'Contact',
    ],
  },
  {
    infos: [
      'Resources',
      'Blog',
      'Newsletter',
      'Events',
      'Help Center',
      'Tutorials',
      'Support',
    ],
  },
  {
    infos: [
      'Use cases',
      'Startups',
      'Enterprise',
      'Government',
      'Sass',
      'Marketplaces',
      'Ecommerce',
    ],
  },
  {
    infos: [
      'Social',
      'Twitter',
      'Linkedin',
      'Facebook',
      'Github',
      'AngelList',
      'Dribble',
    ],
  },
  {
    infos: [
      'Legal',
      'Terms',
      'Privacy',
      'Cookies',
      'Licenses',
      'Settings',
      'Contact',
    ],
  },
];

const Footer = () => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true);
  }, []);
  return isClient ? (
    <FooterDiv>
      <FooterContent>
        <ProductInfos>
          {footerDetails.map((infos, index) => (
            <ProductDetail key={index}>
              {infos.infos.map((info, index) => (
                <label key={info + index}>{info}</label>
              ))}
            </ProductDetail>
          ))}
        </ProductInfos>
        <hr />
        <LogoContent>
          <Image src={LogoImage} alt='logo-image' />
          <label>Copyright @ 2023 Pulsar</label>
        </LogoContent>
      </FooterContent>
    </FooterDiv>
  ) : null;
};
export default Footer;

const FooterDiv = styled.div`
  width: 100%;
  background-color: #1f2128;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 1200px;

  ${media.lg`
    width: ${device.md}
  `}
  
  display: flex;
  flex-direction: column;
  gap: ${Space.xl};
  padding: ${Space.xxxl} ${Space.xl};
  hr {
    padding-top: ${Space.xl} !important;
    border-color: ${Color.$netural_700} !important;
  }
`;

const ProductInfos = styled.div`
  ${media.md`
    display: none;
  `}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${Space.s};

  label {
    font-size: 16px;
    color: ${Color.$white};
    flex: 1;
    &:first-child {
      color: ${Color.$netural_700};
    }
  }
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    color: #8a8a98;
  }
`;
