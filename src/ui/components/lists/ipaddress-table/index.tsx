import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ServerCell from './server-cell';
import StatusCell from './status-cell';
import ManageCell from './manage-cell';
import { TrafficTableContainer } from './styled';
import { StatusType } from '../../../../types/status.module';
import StatusContext from '../../common/status';

interface Server {
  id: number;
  ipaddress: string;
  location: string;
  dateAllocated: string;
  status: StatusType;
  assinedTo: {
    serverAddress: string;
    serverType: string;
  };
  manage: string;
}

const columnsMin: GridColDef<Server>[] = [
  { field: 'ipaddress', headerName: 'IP Address', width: 100, flex: 1 },
  { field: 'location', headerName: 'Location', width: 70, flex: 1 },
  { field: 'dateAllocated', headerName: 'Date Allocated', width: 110, flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 70,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <StatusContext
        status={params.value as StatusType}
        label={
          params.value === StatusType.assigned
            ? 'Assigned'
            : params.value === StatusType.unassigned
            ? 'Unassigned'
            : params.value === StatusType.provisioning
            ? 'Provisioning...'
            : params.value === StatusType.error
            ? 'Failed'
            : 'Failed'
        }
      />
    ),
    flex: 1,
  },
  {
    field: 'assignedTo',
    headerName: 'Assigned To',
    width: 100,
    renderCell: (params: GridRenderCellParams<Server>) => {
      return (
        <ServerCell
          serverAddress={params.value.serverAddress as string}
          serverType={params.value.serverType as string}
        />
      );
    },
    flex: 1,
  },
  {
    field: 'manage',
    headerName: 'Actions',
    width: 110,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <ManageCell status={params.value as boolean} />
    ),
  },
];

const rowsMin = [
  {
    id: 1,
    ipaddress: '192.168.1.24',
    location: 'Phoenix',
    dateAllocated: '17 Oct, 2022',
    status: StatusType.provisioning,
    assignedTo: {
      serverAddress: '192.168.1.24',
      serverType: 'd1.c1.large',
    },
    manage: true,
  },
  {
    id: 2,
    ipaddress: '192.168.1.24',
    location: 'Phoenix',
    dateAllocated: '17 Oct, 2022',
    status: StatusType.assigned,
    assignedTo: {
      serverAddress: '192.168.1.24',
      serverType: 'd1.c1.large',
    },
    manage: true,
  },
  {
    id: 3,
    ipaddress: '192.168.1.24',
    location: 'Phoenix',
    dateAllocated: '17 Oct, 2022',
    status: StatusType.error,
    assignedTo: {
      serverAddress: '192.168.1.24',
      serverType: 'd1.c1.large',
    },
    manage: true,
  },
];

const IpAddressesTable = () => {
  return (
    <TrafficTableContainer>
      <div style={{ height: '100%', width: '100%' }}>
        {/* @ts-ignore */}
        <DataGrid rows={rowsMin} columns={columnsMin} />
      </div>
    </TrafficTableContainer>
  );
};
export default IpAddressesTable;
