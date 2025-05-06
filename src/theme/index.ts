import { createTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

declare module '@mui/material/styles' {
  interface Components {
    MuiDataGrid?: {
      styleOverrides?: {
        root?: {
          '&.MuiDataGrid-root'?: {
            borderWidth?: string;
            borderColor?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-withBorderColor'?: {
            borderBottom?: string;
            borderColor?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-cell'?: {
            borderColor?: string;
            border?: string;
            backgroundColor?: string;
            borderBottom?: string;
            overflow?: string;
          };
          '&.MuiDataGrid-columnHeaderTitle'?: {
            color?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-menuIcon'?: {
            display?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer'?: {
            justifyContent?: string;
            color?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-sortIcon'?: {
            color?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-cellContent'?: {
            color?: string;
          };
          '&.MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon'?: {
            opacity?: number;
          };
          '&.MuiDataGrid-root .MuiDataGrid-iconButtonContainer'?: {
            visibility?: string;
          };
        };
      };
    };
  }
}

export const pulsarTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '&.MuiDataGrid-root': {
            borderWidth: '0px',
          },
          '&.MuiDataGrid-root .MuiDataGrid-withBorderColor': {
            borderColor: '#2C2F39',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell': {
            borderColor: '#2C2F39',
            overflow: 'visible !important',
          },
          '&.MuiDataGrid-columnHeaderTitle': {
            color: 'white',
          },
          '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer': {
            color: 'white',
          },
          '&.MuiDataGrid-root .MuiDataGrid-menuIcon': {
            display: 'none',
          },
          '&.MuiDataGrid-root .MuiDataGrid-sortIcon': {
            color: 'white',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cellContent': {
            color: 'white',
          },
          '&.MuiDataGrid-root .MuiDataGrid-iconButtonContainer': {
            visibility: 'visible',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root .MuiMenu-list': {
            border: 'solid 1px #475467 !important',
            backgroundColor: '#1F2128 !important',
            color: '#7B7B85',
          },
          '& .MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
            borderRadius: '16px !important',
            minWidth: '200px !important'
          },
          '& .MuiButtonBase-root.MuiMenuItem-root:hover': {
            borderRadius: '24px',
            backgroundColor: '#313442',
          },
          '& .MuiButtonBase-root.MuiMenuItem-root:hover label': {
            color: 'white',
          },
          '& .MuiButtonBase-root.MuiMenuItem-root:hover svg > path': {
            stroke: 'white',
            strokeWidth: '2',
          },
          '& .MuiButtonBase-root.MuiMenuItem-root:hover #power-cycle label': {
            color: 'red',
            fontWeight: '600',
          },
          '& .MuiButtonBase-root.MuiMenuItem-root:hover #power-cycle svg > path': {
            stroke: 'red',
            strokeWidth: '2',
          },
          '& .MuiButtonBase-root.MuiMenuItem-root': {
            margin: '2px 12px',
          },
        },
      },
    },
  },
});
