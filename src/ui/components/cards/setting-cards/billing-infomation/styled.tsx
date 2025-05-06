import styled from 'styled-components';
import { Space } from '../../../../../constants/size';

export const Header = styled.header`
    h3 {
        line-height: ${Space.s};
    }
`;

export const CityInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${Space.l};
`