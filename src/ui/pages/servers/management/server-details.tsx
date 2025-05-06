import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import ServersIcon from '../../../components/common/svgicons/ServersIcon';
import TerminalIcon from '../../../components/common/svgicons/TerminalIcon';
import ArrowDownIcon from '../../../components/common/svgicons/ArrowDownIcon';
import AlertOctagonIcon from '../../../components/common/svgicons/AlertCircle';
import PowerCycleIcon from '../../../components/common/svgicons/PowerCycleIcon';
import StatusContext from '../../../components/common/status';
import { StatusType } from '../../../../types/status.module';
import { useDispatch, useSelector } from 'react-redux';
import { ServerDetails } from '../../../../types/server.module';
import { fetchServerDetails } from '../../../../redux/slices/servers';

const ServerDetails = ({ serverId }: { serverId: number | undefined }) => {
  const [serverDetailsState, setServerDetails] = useState<
    ServerDetails | undefined
  >();
  //@ts-ignore
  const serverDetails: ServerDetails = useSelector(
    //@ts-ignore
    (state) => state.serverDetails.serverDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (serverId) {
      //@ts-ignore
      dispatch(fetchServerDetails(serverId));
    }
  }, [serverId]);

  useEffect(() => {
    setServerDetails(serverDetails);
    
  }, [serverDetails]);

  return (
    <ServerDetailsDiv>
      <Header>
        <Title>
          <IconDiv>
            <ServersIcon stroke='#fff' />
          </IconDiv>
          <h2>Server Details</h2>
          <StatusContext
            status={serverDetailsState?.status ?? StatusType.off}
            label={
              serverDetailsState?.status == StatusType.on
                ? 'Powered On'
                : 'Powered Off'
            }
          />
        </Title>
        <HeaderButtonGroup>
          <IconCardButton>
            <TerminalIcon stroke={Color.$white} />
            Open Console
          </IconCardButton>
          <IconCardButton>
            <PowerCycleIcon stroke='#fff' />
            Power Actions&nbsp;&nbsp;&nbsp;
            <ArrowDownIcon stroke={Color.$white} />
          </IconCardButton>
          <IconCardButton style={{ padding: '8px' }}>
            <AlertOctagonIcon stroke={Color.$white} />
          </IconCardButton>
        </HeaderButtonGroup>
      </Header>
      <Body>
        <DetailInfo>
          <label>{serverDetailsState?.CPU}</label>
          <label>CPU</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.RAM}</label>
          <label>RAM</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.OS}</label>
          <label>OS</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.type}</label>
          <label>Type</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.storage}</label>
          <label>Storage</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.created}</label>
          <label>Created</label>
        </DetailInfo>
        <DetailInfo>
          <label>{serverDetailsState?.uptime}</label>
          <label>Uptime</label>
        </DetailInfo>
      </Body>
    </ServerDetailsDiv>
  );
};
export default ServerDetails;

export const ServerDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.l};
  border-radius: ${BorderRadius.l};
  background-color: ${Color.$neutral_foreground};
  padding: ${Padding.base};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
`;
const DetailInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${Space.xs};
  label {
    font-size: 14px;
    color: ${Color.$white};
    &:last-child {
      color: ${Color.$netural_700};
    }
  }
`;
const HeaderButtonGroup = styled.div`
  display: flex;
  flex-direction: ${Space.base};
  align-items: center;
  gap: ${Space.base};
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  align-items: center;
  h2 {
    /* line-height: 0; */
  }
`; 
export const IconDiv = styled.div`
  margin-top: ${Space.xs};
`;

export const CardButton = styled.button`
  border-radius: ${BorderRadius.xxl};
  border: solid 1px ${Color.$gray_600};
  padding: ${Space.s} ${Space.base};
`;
export const IconCardButton = styled(CardButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  color: white;
`;
