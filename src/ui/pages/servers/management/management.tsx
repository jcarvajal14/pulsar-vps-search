import React, { useEffect, useState } from 'react';
import { MainPageContainer } from '../../../../styles/global';
import { PageHeader } from '../styled';
import styled from 'styled-components';
import { Space } from '../../../../constants/size';
import EarthIcon from '../../../components/common/svgicons/EarthIcon';
import { Color } from '../../../../constants/color';
import ServerDetails from './server-details';
import ServerUtilization from './server-utilization';
import BillingCard from './billing-card';
import IpCard from './ip-card';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import CloudStorageCard from './cloud-storage-card';

export default function ServersPage() {
  const router = useRouter();
  const [serverId, setServerId] = useState<number | undefined>();


  useEffect(() => {
      const id = router.query.id;
      setServerId(Number(id));
  }, [router]);

  const serverDetails: ServerDetails = useSelector(
    //@ts-ignore
    (state) => state.serverDetails.serverDetails
  );

  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>{serverDetails.ipAddress}</strong>
        </h3>
        <LabelDiv>
          <EarthIcon />
          <label>Location: ASHBURN US-EAST</label>
        </LabelDiv>
      </PageHeader>
      <ServersMainContent>
        <Main>
          <ServerDetails serverId={serverId} />
          <ServerUtilization />
        </Main>
        <RightSidebar>
          <BillingCard />
          <IpCard />
          <CloudStorageCard />
        </RightSidebar>
      </ServersMainContent>
    </MainPageContainer>
  );
}

const LabelDiv = styled.div`
  margin: ${Space.s} ${Space.none};
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  label {
    color: ${Color.$netural_700};
  }
`;

const ServersMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-base);
  overflow-y: hidden;
  height: calc(100vh - 160px);
  padding-left: ${Space.sb};
  padding-right: ${Space.base};

  &::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  flex: 1;
`;
const RightSidebar = styled.div`
  min-height: 100%;
  max-height: 100%;
  flex-basis: 360px;
  gap: ${Space.base};
  /* justify-content: space-between; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
