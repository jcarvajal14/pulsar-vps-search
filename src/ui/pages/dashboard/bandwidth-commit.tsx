import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../components/cards/card-style';
import { Color } from '../../../constants/color';
import { Space } from '../../../constants/size';
import { IconCardButton } from '../servers/management/server-details';
import OsciloIcon from '../../components/common/svgicons/OsciloIcon';

const BandwidthCommit = () => {
    return (
        <StyledCard>
            <Header>
                <OsciloIcon stroke={Color.$white} />
                <label>Bandwidth Commit</label>
            </Header>
            <hr />
            <Body>
                <Info>
                    <label>Global Commit </label>
                    <label>50Gbps</label>
                </Info>
            </Body>
            <ChangeBillingModelButton>
                Adjust Commit
            </ChangeBillingModelButton>
        </StyledCard>
    )
}
export default BandwidthCommit;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${Space.s};
    label {
        font-size: 18px;
        color: ${Color.$white};
    }
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Space.s};
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    label {
        font-size: 16px;
        &:first-child {
            color: ${Color.$netural_700};
        }
        &:last-child {
            color: ${Color.$white};
        }
    }
`
const ChangeBillingModelButton = styled(IconCardButton)`
    justify-content: center;
`