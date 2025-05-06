import { Color } from '../../../../constants/color';
import { Space } from '../../../../constants/size';
import styled from 'styled-components';

const InputDiv = styled.div`
  background-color: ${Color.$neutral_overlay};
  /* width: 600px; */
  border-radius: 24px;
  padding: ${Space.s} ${Space.base};
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
`;
const InputTextDiv = styled.input`
  background-color: ${Color.$neutral_overlay};
  color: white;
  width: 100%;
  flex: 1 1 0;
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
interface InputComponentProps {
  inputPlaceholder?: string;
  disable?: boolean;
  type?: string;
}
const InputComponent = ({
  inputPlaceholder,
  disable,
  type,
}: InputComponentProps) => {
  return (
    <InputDiv>
      <InputTextDiv
        placeholder={inputPlaceholder}
        disabled={disable}
        contentEditable={!disable}
        type={type}
      />
    </InputDiv>
  );
};
export default InputComponent;
