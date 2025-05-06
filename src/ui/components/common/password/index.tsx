import { useState } from 'react';
import { Space } from '../../../../constants/size';
import styled from 'styled-components';
import { Color } from '../../../../constants/color';
import PasswordEyeIcon from '../svgicons/PasswordEyeIcon';

const IconInputDiv = styled.div`
  background-color: ${Color.$neutral_overlay};
  flex: 1;
  border-radius: 24px;
  padding: ${Space.s} ${Space.base} ${Space.s} ${Space.base};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${Space.s};
`;

const IconDiv = styled.div``;
const InputTextDiv = styled.input`
  background-color: ${Color.$neutral_overlay};
  color: white;
  flex: 1 1 200px;
  &:hover {
    background-color: ${Color.$neutral_overlay};
  }
  &:focus {
    background-color: ${Color.$neutral_overlay};
  }
  &:focus-visible {
    background-color: ${Color.$neutral_overlay};
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${Color.$white};
    -webkit-box-shadow: 0 0 0px 1000px ${Color.$neutral_overlay} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:hover {
    -webkit-text-fill-color: ${Color.$white};
    -webkit-box-shadow: 0 0 0px 1000px ${Color.$neutral_overlay} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${Color.$white};
    -webkit-box-shadow: 0 0 0px 1000px ${Color.$neutral_overlay} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

interface PasswordInputProps {
  onInputChange: (value: string) => void;
}

const PasswordInput = ({ onInputChange }: PasswordInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // call the callback function with the updated value
  };
  return (
    <IconInputDiv>
      <InputTextDiv
        type='password'
        placeholder='Please type your password'
        onChange={handleInputChange}
      />
      <IconDiv>
        <PasswordEyeIcon stroke={Color.$white} />
      </IconDiv>
    </IconInputDiv>
  );
};
export default PasswordInput;
