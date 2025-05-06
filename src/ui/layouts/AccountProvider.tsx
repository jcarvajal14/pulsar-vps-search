import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export interface AccountProviderProps {
  isAccountPage: boolean | undefined;
}

const AccountContext = React.createContext<AccountProviderProps | null>(null);

const AccountPage = [
  'dashboard',
  'servers',
  'ipaddresses',
  'cloudstorage',
  'payments',
  'settings',
];

const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAccountPage, setIsAccountPageContent] = useState<
    boolean | undefined
  >(undefined);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    
    if (AccountPage.some((page) => currentPath.split('/').includes(page))) {
      setIsAccountPageContent(true);
    } else {
      setIsAccountPageContent(false);
    }
  }, [currentPath]);

  return (
    <AccountContext.Provider value={{ isAccountPage }}>
      {children}
    </AccountContext.Provider>
  );
};

const useAccount = () => {
  const context = React.useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a AuthProvider');
  }
  return context;
};

export { AccountProvider, useAccount };
