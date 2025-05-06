import { Space } from '../../../constants/size';
import styled from 'styled-components';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-bottom: ${Space.s};
  h6 {
    color: var(--color-gray-100);
  }
`;

const SettingsMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--space-xl);
  overflow-y: auto;
  height: calc(100vh - 160px);
  padding-left: ${Space.sb};

  &::-webkit-scrollbar {
    width: 5px;
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

  .sub-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);

    &:first-child {
      flex-grow: 1;
    }
    &:last-child {
      flex-basis: 240px;
      flex-grow: none;
    }
  }
  .dashboard-right-sidebar {
    gap: var(--space-xxl);
    position: sticky;
    top: var(--space-s);
    right: var(--space-base);
  }
`;
export const CenterDiv = styled.div`
    flex-basis: 1250px;
    flex-grow: none;
    flex-shrink: 1;
    gap: ${Space.xl};
    display: flex;
    flex-direction: column;
    gap: ${Space.xl};
`;


export { PageHeader, SettingsMainContent };
