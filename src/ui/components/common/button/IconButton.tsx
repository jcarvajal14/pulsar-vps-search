import Image from 'next/image';
import styled from 'styled-components';

export const IconButtonDiv = styled.button`
    display: flex;
    flex-direction: row;
    gap: var(--padding-s);
    border-radius: 48px;
    padding: var(--padding-s) var(--padding-base);
`;

interface IconButtonProps {
    iconSource: string
}
const IconButtonComponent = ({iconSource}: IconButtonProps) => {
    return (
        <IconButtonDiv>
          <Image src={iconSource} alt='dashboard-icon' />
          <span>Dashboard</span>
        </IconButtonDiv>
    )
}
export default IconButtonComponent;
