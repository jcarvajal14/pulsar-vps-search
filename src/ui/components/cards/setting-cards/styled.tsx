import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';

export const SettingCardDiv = styled.div`
    background-color: ${Color.$neutral_foreground};
    display: flex;
    flex-direction: column;
    padding: ${Padding.l};
    border-radius: ${BorderRadius.l};
    gap: ${Space.l};
`