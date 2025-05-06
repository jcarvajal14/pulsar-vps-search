import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";

interface PrimaryButtonProps {
    bgColor: string;
    color: string;
    borderColor: string;
}

const PrimaryButton = styled(ButtonComponent)<PrimaryButtonProps>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    border: ${props => `solid 1px ${props.borderColor}`};
`
export default PrimaryButton;
