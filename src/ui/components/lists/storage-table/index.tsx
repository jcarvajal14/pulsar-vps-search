import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ManageCell from './manage-cell';
import { TrafficTableContainer, UsedByDiv } from './styled';
import { StatusType } from '../../../../types/status.module';
import StatusContext from '../../common/status';
import { StorageType } from '../../../../types/storage.module';
import CpuCell, { DiskCell } from './cpu-cell';
import FileConfigModal from '../../modals/fileconfig-modal';

const StorageTable = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const columnsMin: GridColDef<StorageType>[] = [
    { field: 'deviceName', headerName: 'Device Name', width: 100, flex: 1 },
    {
      field: 'diskUtilization',
      headerName: 'Disk Utilization',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<StorageType>) => (
        <DiskCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'diskUsage',
      headerName: 'Disk Usage',
      width: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<StorageType>) => (
        <CpuCell percentValue={params.value as number} />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 70,
      renderCell: (params: GridRenderCellParams<StorageType>) => (
        <StatusContext
          status={params.value as StatusType}
          label={
            params.value === StatusType.online
              ? 'Online'
              : params.value === StatusType.offline
              ? 'Offline'
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
      field: 'usedBy',
      headerName: 'Used By',
      width: 110,
      renderCell: (params: GridRenderCellParams<StorageType>) => (
        <UsedByDiv
          className='button-primary'
          onClick={openModal}
        >{`${params.value} Servers`}</UsedByDiv>
      ),
      flex: 1,
    },
    {
      field: 'manage',
      headerName: 'Actions',
      width: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams<StorageType>) => (
        <ManageCell status={params.value as boolean} />
      ),
    },
  ];

  const rowsMin = [
    {
      id: 1,
      deviceName: 'Extra Storage',
      diskUtilization: '70',
      diskUsage: '60',
      status: StatusType.offline,
      usedBy: 0,
      manage: true,
    },
    {
      id: 2,
      deviceName: 'Personal Files',
      diskUtilization: '80',
      diskUsage: '50',
      status: StatusType.provisioning,
      usedBy: 3,
      manage: true,
    },
    {
      id: 3,
      deviceName: 'Movies',
      diskUtilization: '40',
      diskUsage: '60',
      status: StatusType.online,
      usedBy: 2,
      manage: true,
    },
  ];

  return (
    <TrafficTableContainer>
      <div style={{ height: '100%', width: '100%' }}>
        {/* @ts-ignore */}
        <DataGrid rows={rowsMin} columns={columnsMin} />
      </div>
      <FileConfigModal isOpen={isModalOpen} closeModal={closeModal} />
    </TrafficTableContainer>
  );
};
export default StorageTable;
