import type { AppProps } from 'next/app';
import AppLayout from '../ui/layouts/AppLayout';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from '../auth/AuthProvider';
import { AccountProvider } from '../ui/layouts/AccountProvider';
import store from '../redux/store/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AccountProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </AccountProvider>
      </AuthProvider>
    </Provider>
  );
}
