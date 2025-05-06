import styled from 'styled-components'
import { BorderRadius, Space } from '../../../constants/size'
import { Color } from '../../../constants/color'

export const StyledCard = styled.div`
    border-radius: ${BorderRadius.l};
    padding: ${Space.l};
    background-color: ${Color.$neutral_foreground};;
    display: flex;
    flex-direction: column;
    gap: ${Space.base} ${Space.s};
`