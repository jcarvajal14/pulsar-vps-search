import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ServerCell from './server-cell';
import { TrafficTableContainer, ContentDiv, ContentBorderDiv } from './styled';
import { Space } from '../../../../constants/size';
import StatusCell from './status-cell';

interface ConfigureInfos {
  id: number;
  location: string;
  processor: {
    processorType: string;
    processorDetail: string;
  };
  storage: string;
  ram: number;
  ips: number;
  cost: number;
  action: boolean;
}

const columnsMin: GridColDef<ConfigureInfos>[] = [
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
  },
  {
    field: 'processor',
    headerName: 'Processor',
    width: 150,
    renderCell: (params: GridRenderCellParams<ConfigureInfos>) => {
      return (
        <ServerCell
          serverAddress={params.value.processorType as string}
          serverType={params.value.processorDetail as string}
        />
      );
    },
    // flex: 1,
  },
  {
    field: 'storage',
    headerName: 'Storage',
    width: 150,
    // flex: 1,
  },
  {
    field: 'ram',
    headerName: 'RAM',
    width: 100,
    flex: 1,
  },
  {
    field: 'ips',
    headerName: 'IPs',
    width: 100,
    flex: 1,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    width: 100,
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    flex: 1,
    renderCell: (params: GridRenderCellParams<ConfigureInfos>) => {
      return (
        <StatusCell status={params.value as boolean}
        />
      );
    },
  },
];

const rowsMin = [
  {
    id: 1,
    location: 'Phoenix',
    processor: {
      processorType: '24 Cores (3.10GHz)',
      processorDetail: 'Dual Xeon Gold 5317',
    },
    storage: '2\u00d7 2TB NVME ',
    ram: '256GB',
    ips: '24',
    cost: '$500',
    actions: false,
  },
  {
    id: 2,
    location: 'Phoenix',
    processor: {
      processorType: '12 Cores (3.20GHz)',
      processorDetail: 'Dual Xeon Gold 5317',
    },
    storage: '2\u00d7 2TB NVME ',
    ram: '32GB',
    ips: '16',
    cost: '$300',
    actions: false,
  },
  {
    id: 3,
    location: 'Phoenix',
    processor: {
      processorType: '8 Cores (2.90GHz)',
      processorDetail: 'Dual Xeon Gold 5317',
    },
    storage: '2\u00d7 2TB NVME ',
    ram: '16GB',
    ips: '1',
    cost: '$100',
    actions: true,
  },
];

const ConfigureTable = () => {
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <TrafficTableContainer>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: Space.base }}>
            <h3>Your Configurations</h3>
            <hr />
            {/* @ts-ignore */}
            <DataGrid rows={rowsMin} columns={columnsMin} />
          </div>
        </TrafficTableContainer>
      </ContentBorderDiv>
    </ContentDiv>
  );
};
export default ConfigureTable;
