import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { ThemeProvider } from '@mui/material';
import { pulsarTheme } from '../../theme';
import { useAccount } from './AccountProvider';
import { useAuth } from '../../auth/AuthProvider';
import MobileTabButtonGroup from '../components/common/mobile-tabsgroup';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const account = useAccount();
  const auth = useAuth();
  return (
    <ThemeProvider theme={pulsarTheme}>
      <Header account={account} auth={auth} />
      <section className='main-content'>
        <Sidebar account={account} auth={auth} />
        
        {children}
      </section>
    </ThemeProvider>
  );
};
export default AppLayout;
