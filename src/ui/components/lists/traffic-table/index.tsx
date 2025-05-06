import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ServerCell from './server-cell';
import CpuCell from './cpu-cell';
import ManageCell from './manage-cell';
import { TrafficTableContainer } from './styled';
import { fetchServerList } from '../../../../redux/slices/servers';
import { ServerType } from '../../../../types/server.module';
import StatusContext from '../../common/status';
import { StatusType } from '../../../../types/status.module';

interface Server {
  id: number | undefined;
  servers: {
    serverAddress: string | undefined;
    serverType: string | undefined;
  };
  status: boolean | undefined;
  location: string | undefined;
  os: string | undefined;
  cpu: number | undefined;
  disk: number | undefined;
  bandwidth: number | undefined;
  incoming?: number | undefined;
  outgoing?: number | undefined;
  manage: boolean | undefined;
}

interface TrafficTableProps {
  isminimized: boolean;
}
const TrafficTable = ({ isminimized }: TrafficTableProps) => {
  // @ts-ignore
  const serverList: ServerType[] = useSelector(
    // @ts-ignore
    (state) => state.server.serverList
  );
  const dispatch = useDispatch();
  const [serverListRowMins, setServerListRowMins] = useState<
    Server[] | undefined
  >([]);
  const [serverListRowMaxs, setServerListRowMaxs] = useState<
    Server[] | undefined
  >([]);
  const [selectedRowId, setSelectedRowId] = useState<number[]>([]);

  const handleSelectionModelChange = (selectionModel: any) => {
    setSelectedRowId(selectionModel);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchServerList());
  }, []);

  useEffect(() => {
    const rowMins: Server[] = serverList?.map((item) => ({
      id: item.id,
      servers: {
        serverAddress: item?.ipAddresses && item.ipAddresses[0].ip,
        serverType: item.type,
      },
      status: item.status,
      location: item.location,
      os: item.os,
      cpu: item.cpuUtilization,
      ram: item.ramUtilization,
      disk: item.diskUtilization,
      bandwidth: item.bandwidth,
      manage: false,
    }));
    const rowMaxs: Server[] = serverList?.map((item) => ({
      id: item.id,
      servers: {
        serverAddress: item?.ipAddresses && item.ipAddresses[0].ip,
        serverType: item.type,
      },
      status: item.status,
      location: item.location,
      os: item.os,
      cpu: item.cpuUtilization,
      ram: item.ramUtilization,
      disk: item.diskUtilization,
      bandwidth: item.bandwidth,
      incoming: item.incomingTraffic,
      outgoing: item.outcomingTraffic,
      manage: false,
    }));
    setServerListRowMins(rowMins);
    setServerListRowMaxs(rowMaxs);
  }, [serverList]);

  const columnsMin: GridColDef<Server>[] = [
    {
      field: 'servers',
      headerName: 'Servers',
      width: 100,
      minWidth: 100,
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
      field: 'status',
      headerName: 'Status',
      width: 70,
      minWidth: 70,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <StatusContext
          status={params.value == true ? StatusType.on : StatusType.off}
          label={params.value == true ? 'ON' : 'OFF'}
        />
      ),
      flex: 0.7,
    },
    { field: 'location', headerName: 'Location', width: 70, flex: 0.7 },
    { field: 'os', headerName: 'OS', width: 70, flex: 0.7 },
    {
      field: 'cpu',
      headerName: 'CPU Utilization',
      width: 200,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
      flex: 1,
    },
    {
      field: 'ram',
      headerName: 'RAM Utilization',
      width: 130,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
      flex: 1,
    },
    {
      field: 'disk',
      headerName: 'Disk Utilization',
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
      width: 130,
      flex: 1,
    },
    {
      field: 'bandwidth',
      headerName: 'BandWidth Utilization',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'manage',
      headerName: 'Actions',
      width: 90,
      flex: 1,
      
      renderCell: (params: GridRenderCellParams<Server>) => (
        <ManageCell status={params.value as boolean} seletedId={selectedRowId[0]} />
      ),
    },
  ];
  const columnsMax: GridColDef<Server>[] = [
    {
      field: 'servers',
      headerName: 'Servers',
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
      field: 'status',
      headerName: 'Status',
      width: 70,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <StatusContext
          status={params.value == true ? StatusType.on : StatusType.off}
          label={params.value == true ? 'ON' : 'OFF'}
        />
      ),
      flex: 1,
    },
    { field: 'location', headerName: 'Location', width: 70, flex: 1 },
    { field: 'os', headerName: 'CPU Utilization', width: 110, flex: 1 },
    {
      field: 'cpu',
      headerName: 'RAM Utilization',
      width: 110,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
      flex: 1,
    },
    {
      field: 'disk',
      headerName: 'Disk Utilization',
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
      width: 110,
      flex: 1,
    },
    {
      field: 'bandwidth',
      headerName: 'BandWidth Utilization',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'incoming',
      headerName: 'Incoming Traffic',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'outgoing',
      headerName: 'Outgoing Traffic',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <CpuCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'manage',
      headerName: 'Actions',
      width: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams<Server>) => (
        <ManageCell status={params.value as boolean} seletedId={selectedRowId[0]} />
      ),
    },
  ];

  return (
    <TrafficTableContainer isminimized={isminimized.toString()}>
      <div style={{ height: '100%', width: '100%' }}>
        {isminimized ? (
          /* @ts-ignore */
          // getRowId={getRowId}
          <DataGrid
            rows={serverListRowMins ?? []}
            rowSelectionModel={selectedRowId}
            onRowSelectionModelChange={handleSelectionModelChange}
            columns={columnsMin}
          />
        ) : (
          /* @ts-ignore */
          <DataGrid
            rows={serverListRowMaxs ?? []}
            rowSelectionModel={selectedRowId}
            onRowSelectionModelChange={handleSelectionModelChange}
            columns={columnsMax}
          />
        )}
      </div>
    </TrafficTableContainer>
  );
};
export default TrafficTable;
