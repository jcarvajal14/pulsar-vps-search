import { useState } from 'react';
import { Space } from '../../../../constants/size';
import styled from 'styled-components';
import { SvgIconProps } from '../SvgIcon';
import { Color } from '../../../../constants/color';

const IconInputDiv = styled.div`
  background-color: ${Color.$neutral_overlay};
  flex: 1;
  border-radius: 24px;
  padding: ${Space.s} ${Space.base};
  align-items: center;
  display: flex;
  flex-direction: row;
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
  &:focus-visible {
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

interface IconInputProps {
  placeText: string;
  Icon: ({ stroke, strokeWidth }: SvgIconProps) => JSX.Element | null;
  onInputChange: (value: string) => void;
}
const IconInput = ({ placeText, Icon, onInputChange }: IconInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // call the callback function with the updated value
  };
  return (
    <IconInputDiv>
      <IconDiv>
        <Icon stroke={Color.$white } />
      </IconDiv>
      <InputTextDiv placeholder={placeText} value={inputValue} onChange={handleInputChange} />
    </IconInputDiv>
  );
};
export default IconInput;
