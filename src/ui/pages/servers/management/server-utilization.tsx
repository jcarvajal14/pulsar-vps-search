import React from 'react';
import styled from 'styled-components';
import { Header, IconDiv } from './server-details';
import ProcessorIcon from '../../../components/common/svgicons/ProcessorIcon';
import {
  HeaderDateDiv,
  MonthButton,
} from '../../../components/charts/traffic-chart/styled';
import PeriodButtonGroup from './button-group';
import { Color } from '../../../../constants/color';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import ServerUtilChart from './server-util-chart';

const ServerUtilization = () => {
  return (
    <ServerDetailsDiv>
      <Header>
        <Title>
          <IconDiv>
            <ProcessorIcon stroke={Color.$white} width={24} height={24} />
          </IconDiv>
          <h2>Server Utilization</h2>
        </Title>
        <HeaderDateDiv>
          <PeriodButtonGroup />
          <MonthButton className='button-secondary' style={{border: 'none'}}>January, 2023</MonthButton>
        </HeaderDateDiv>
      </Header>
      <hr />
      <Body>
        <ChartDiv>
          <ChartLabel>
            <label>Activity</label>
            <label>CPU</label>
          </ChartLabel>
          <hr />
          <ServerUtilChart />
        </ChartDiv>
        <ChartDiv>
          <ChartLabel>
            <label>Activity</label>
            <label>RAM</label>
          </ChartLabel>
          <hr />
          <ServerUtilChart />
        </ChartDiv>
        <ChartDiv>
          <ChartLabel>
            <label>Activity</label>
            <label>Disk</label>
          </ChartLabel>
          <hr />
          <ServerUtilChart />
        </ChartDiv>
        <ChartDiv>
          <ChartLabelDiv>
            <ChartLabel>
              <label>Activity</label>
              <label>BandWidth</label>
            </ChartLabel>
            <BandwidthLabels>
              <div>
                <label>Incoming</label>
                <label id='incoming-server-management'><strong>50G</strong></label>
              </div>
              <div>
                <label>Outgoing</label>
                <label id='outgoing-server-management'><strong>20G</strong></label>
              </div>
            </BandwidthLabels>
          </ChartLabelDiv>
          <hr />
          <ServerUtilChart isBandwidth={ true } />
        </ChartDiv>
      </Body>
    </ServerDetailsDiv>
  );
};
export default ServerUtilization;

const ServerDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 160px);
  min-height: calc(100% - 160px);
  overflow: hidden;
  gap: ${Space.base};
  border-radius: ${BorderRadius.l};
  background-color: ${Color.$neutral_foreground};
  padding: ${Padding.base};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  align-items: center;
  label {
    color: white;
  }
  h2 {
    /* line-height: 0; */
  }
`;
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: ${Space.s};
  row-gap: ${Space.s};
`;
const ChartDiv = styled.div`
  padding: ${Space.base};
  background-color: ${Color.$neutral_overlay};
  border-radius: ${BorderRadius.base};
  height: 48%;
  flex-basis: 40%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
`;
const ChartLabel = styled.div`
  display: flex;
  flex-direction: column;
  label {
    &:first-child {
      color: ${Color.$netural_700};
      font-size: 11px;
    }
    &:last-child {
      color: ${Color.$white};
      font-size: 13px;
    }
  }
`;
const ChartLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BandwidthLabels = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: var(--space-xs);
  gap: var(--space-l);
  background-color: #262932;
  padding: 4px 8px;
  div {
    display: flex;
    flex-direction: column;
    
    label {
      font-size: 0.7em;
      &:first-child {
        color: white;
      }
    }
    #incoming-server-management {
        color: #F17F7F;
    }
    #outgoing-server-management {
        color: #72C2FC;
    }
  }
`
