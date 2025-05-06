import React, { useEffect, useState } from 'react';
import { MainPageContainer } from '../../../styles/global';
import {
  LoginContainer,
  LoginHeader,
  LoginPageContent,
  LoginMain,
  EmailDiv,
  PasswordDiv,
  CheckboxContainer,
  LoginButton,
  SocialLoginButton,
  GotoSignUp,
} from './styled';
import LoginLogoIcon from '../../components/common/svgicons/LoginLogoIcon';
import EmailIcon from '../../components/common/svgicons/EmailIcon';
import IconInput from '../../components/common/input/iconInput';
import { CheckBox } from '../../components/common/checkbox';
import GoogleIcon from '../../components/common/svgicons/GoogleIcon';
import PasswordInput from '../../components/common/password';
import { postLoginEnvironment, setAccessToken } from '../../../services/auth';
import { Notification } from '../../../utilities/notification';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface User {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const router = useRouter();

  const login = async () => {
    try {
      const response = await postLoginEnvironment({
        user: user ? user.email : null,
        password: user ? user.password : null,
      });
      if (response.status === 200) {
        Notification.success({
          message: 'Success',
          description:
          'Logined successfully'
        })
        setAccessToken('bearer' + '123123');
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      Notification.error({
        message: 'Error',
        description: 'Login failed'
      })
    }
  };

  const getEmail = (value: string) =>
    setUser((user) => ({ ...user, email: value }));
  const getPassword = (value: string) =>
    setUser((user) => ({ ...user, password: value }));

  return (
    <MainPageContainer>
      <LoginContainer>
        <LoginPageContent>
          <LoginHeader>
            <LoginLogoIcon />
            <label>
              <strong>Log in to your account</strong>
            </label>
            <p>Welcome back! Please enter your details</p>
          </LoginHeader>
          <LoginMain>
            <EmailDiv>
              <label>Email</label>
              <IconInput
                onInputChange={getEmail}
                Icon={EmailIcon}
                placeText='Enter your email'
              />
            </EmailDiv>
            <PasswordDiv>
              <label>Password</label>
              <PasswordInput onInputChange={getPassword} />
            </PasswordDiv>
            <CheckboxContainer>
              <div>
                <CheckBox />
                <label>Remember for 30 days</label>
              </div>
              <label>Forgot password</label>
            </CheckboxContainer>
            <LoginButton className='button-primary' onClick={login}>
              Sign In
            </LoginButton>
            <SocialLoginButton>
              <GoogleIcon />
              <label>Sign in with Google</label>
            </SocialLoginButton>
            <GotoSignUp>
              <p>
                Don&apos;t have an account? <Link href='/signup'><label>Sign up</label></Link>
              </p>
            </GotoSignUp>
          </LoginMain>
        </LoginPageContent>
      </LoginContainer>
    </MainPageContainer>
  );
};
export default LoginPage;
