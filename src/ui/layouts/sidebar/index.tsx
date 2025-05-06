import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  SidebarDiv,
  ProContent,
  ProAccountDiv,
  UpgradeContentDiv,
  UpgradeButton,
  ToggleDiv,
  ToggleContent,
  Hr,
} from './styled';
import CityIcon from '../../../assets/icons/city-icon.svg';
import ProMaskIcon1 from '../../../assets/icons/pro-mask-1.svg';
import ProMaskIcon2 from '../../../assets/icons/pro-mask-2.svg';
import UpGradeImage from '../../../assets/images/upgrade.png';
import UserPassageIcon from '../../../assets/icons/user-passage-icon.svg';
import UpgrademaskIcon from '../../../assets/images/upgrade-mask.png';
import MoonImage from '../../../assets/images/moon.png';
import SettingIcon from '../../../assets/icons/setting-icon.png';
import MaximizeIcon from '../../../assets/icons/maximize-icon.png';
import Switch from '@mui/material/Switch';
import TabButtonGroup from '../../../ui/components/common/tabsgroup';
import { AccountProviderProps } from '../AccountProvider';
import { AuthContextProps } from '../../../auth/AuthProvider';
import MobileTabButtonGroup from '../../components/common/mobile-tabsgroup';

interface LayoutProps {
  auth: AuthContextProps | null;
  account: AccountProviderProps | null;
}
const Sidebar = ({ auth, account } : LayoutProps) => {

  const [isAccountPage, setIsAccountPage] = useState<boolean | undefined>(
    undefined
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  useEffect(() => {
    setIsAccountPage(account?.isAccountPage);
    setIsAuthenticated(auth?.isAuthenticated);
  }, [account, auth]);

  return isAccountPage && isAuthenticated ? (
    <div>
      <SidebarDiv>
      <TabButtonGroup />
      <ProContent>
        <hr />
        <ProAccountDiv>
          <Image
            src={ProMaskIcon1}
            className='pro-mask-1-icon'
            alt='pro-mask-1'
          />
          <Image
            src={ProMaskIcon2}
            className='pro-mask-2-icon'
            alt='pro-mask-2'
          />
          <h6>
            <strong>Go to Pro</strong>
          </h6>
          <p>
            Get access to all <br />
            features on Pro account
          </p>
          <Image src={CityIcon} className='city-icon' alt='city-icon' />
        </ProAccountDiv>
        <UpgradeContentDiv>
          <Image
            src={UpGradeImage}
            className='upgrade-image'
            alt='upgrade-image'
          />
          <Image
            src={UpgrademaskIcon}
            className='upgrade-mask-icon'
            alt='upgrade-mask-icon'
          />
          <Image
            src={UserPassageIcon}
            className='user-passage-icon'
            alt='user-passage-icon'
          />
          <p>
            Need help managing your servers? Add the{' '}
            <strong>Support Plan</strong> now!
          </p>
          <UpgradeButton className='button-primary'>
            <strong>Upgrade Now</strong>
          </UpgradeButton>
        </UpgradeContentDiv>
        <ToggleDiv>
          <ToggleContent>
            <Image src={MoonImage} className='moon-image' alt='moon-image' />
            <Switch defaultChecked />
            <Image src={SettingIcon} alt='setting-icon' />
          </ToggleContent>
          <Hr />
          <Image src={MaximizeIcon} alt='maximize-icon' />
        </ToggleDiv>
      </ProContent>
      </SidebarDiv>
      <MobileTabButtonGroup />
    </div>
    
  ) : (
    <div style={{ display: 'none' }}></div>
  );
};
export default Sidebar;
