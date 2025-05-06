import { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/router';
import { getAccessToken } from '../services/auth';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WrapperCommponent: React.FC<any> = (props) => {
    const router = useRouter();
    const auth = useAuth();
    const [isAuthChecked, setAuthChecked] = useState<boolean | undefined>();

    useEffect(() => {
      CheckAuthenticated().then((isAuth) => {
        if (!isAuth) {
          router.push('/login');
        }
      }).catch(err => {
        console.log(err);
      });
    }, [router, isAuthChecked]);

    const CheckAuthenticated = async () => {
      if ((await getAccessToken()) === 'bearer123123') {
        auth?.setAuthenticate({ authed: true })
        setAuthChecked(true);
        return true;
      } else {
        return false;
      }
    };
    
    return <WrappedComponent {...props} />;
  };
  return WrapperCommponent;
};

export default withAuth;
