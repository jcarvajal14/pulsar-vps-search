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
  NameDiv,
  Divider,
} from './styled';
import LoginLogoIcon from '../../components/common/svgicons/LoginLogoIcon';
import EmailIcon from '../../components/common/svgicons/EmailIcon';
import IconInput from '../../components/common/input/iconInput';
import { CheckBox } from '../../components/common/checkbox';
import GoogleIcon from '../../components/common/svgicons/GoogleIcon';
import PasswordInput from '../../components/common/password';
import { useRouter } from 'next/router';
import Link from 'next/link';
import InputComponent from '../../components/common/input/input';
import PhoneInputComponent from '../../components/common/phone-input';

interface User {
  email: string;
  password: string;
}
const SignupPage = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const router = useRouter();

  const signup = async () => {
    
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
              <strong>Create an account</strong>
            </label>
          </LoginHeader>
          <LoginMain>
            <NameDiv>
              <InputComponent inputPlaceholder='First Name'/>
              <InputComponent inputPlaceholder='Last Name'/>
            </NameDiv>
            <EmailDiv>
              <IconInput
                onInputChange={getEmail}
                Icon={EmailIcon}
                placeText='Enter your email'
              />
            </EmailDiv>
            <PhoneInputComponent />
            <PasswordDiv>
              <PasswordInput onInputChange={getPassword} />
            </PasswordDiv>
            <PasswordDiv>
              <PasswordInput onInputChange={getPassword} />
            </PasswordDiv>
            <CheckboxContainer>
              <div>
                <CheckBox />
                <label>I agree to the <a><u>terms & conditions</u></a></label>
              </div>
            </CheckboxContainer>
            <LoginButton className='button-primary' onClick={signup}>
              Get Started
            </LoginButton>
            <Divider>
              <hr/> OR <hr />
            </Divider>
            <SocialLoginButton>
              <GoogleIcon />
              <label>Sign in with Google</label>
            </SocialLoginButton>
            <GotoSignUp>
              <p>
                Aleady have an account?  <Link href='/login'><label>Log in</label></Link>
              </p>
            </GotoSignUp>
          </LoginMain>
        </LoginPageContent>
      </LoginContainer>
    </MainPageContainer>
  );
};
export default SignupPage;
