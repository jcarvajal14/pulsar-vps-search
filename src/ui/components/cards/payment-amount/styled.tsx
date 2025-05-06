import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import { FontSize } from '../../../../constants/font';

export const PaymentAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${BorderRadius.l};
    background-color: ${Color.$neutral_foreground};
    padding: ${Padding.l};
    p {
        font-size: 16px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const MakePaymentButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--padding-s);
    border-radius: 48px;
    padding: var(--padding-xs) var(--padding-base);
`;

export const AmountButton = styled.button`
    border-radius: ${BorderRadius.base};
    padding: ${Padding.sb} ${Padding.l};
    font-size: ${FontSize.lxl};
    margin: ${Space.xl} ${Space.none};
    width: 200px;
`

export const AmountDetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AmountDetail = styled.div`
    display: flex;
    flex-direction: column;
    label {
        color: ${Color.$white};
        font-size: 16px;
        &:last-child {
            color: ${Color.$gray_light}
        }
    }
    
`