import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../constants/size';
import { Color } from '../../../constants/color';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding-top: ${Padding.lxl};
  gap: ${Space.l};
`;
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Space.s};
  padding: ${Padding.none} ${Padding.s};
  label {
    font-size: 30px;
    color: white;
  }
  p {
    font-size: 16px;
    letter-spacing: 0.008in;
  }
`;
export const LoginLogo = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${BorderRadius.sb};
  height: 48px;
  width: 48px;
  background-color: ${Color.$white};
`;
export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: ${Space.xl};
  label {
    color: ${Color.$white};
  }
`;
export const EmailDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${Space.s};
`;
export const PasswordDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${Space.s};
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > :last-child {
    color: ${Color.$brand_600};
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: ${Space.s};
  }
`;
export const LoginButton = styled.button`
  padding: ${Padding.s};
  border-radius: ${BorderRadius.xxl};
  flex: 1;
`;
export const SocialLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${Space.s};
  padding: ${Padding.s};
  flex: 1;
  background-color: ${Color.$neutral_foreground};
  border-radius: ${BorderRadius.xxl};
`;
export const GotoSignUp = styled.div`
  text-align: center;
  p {
    font-size: 16px;
  }
  label {
    font-size: 16px;
    color: ${Color.$brand_600};
    cursor: pointer;
  }
`;
