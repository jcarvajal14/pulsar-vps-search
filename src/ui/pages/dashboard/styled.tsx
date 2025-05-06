import { Space } from '../../../constants/size';
import styled from 'styled-components';
import { media } from '../../../styles/responsive';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-bottom: ${Space.s};
  h6 {
    color: var(--color-gray-100);
  }
`;

const DashboardMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-xl);

  height: calc(100vh - 160px);
  padding-left: ${Space.sb};
  ${media.xl`
    padding-left: ${Space.l};
    padding-right: ${Space.l};
      `}
  overflow-y: auto;
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
      overflow-y: auto;
      flex-shrink: 1;
      flex-grow: 10;
      position: sticky;
      top: 0px;
      right: var(--space-base);
      width: 350px;
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
    }
    &:last-child {
      width: 360px;
      min-width: 360px;
      max-width: 360px;
      flex-shrink: 2;
      flex-grow: 0;
      position: sticky;
      top: 0px;
      right: var(--space-base);
      ${media.xl`
        display: none;
      `}
    }
  }
  .dashboard-right-sidebar {
    overflow-y: auto;
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
  }
`;

export { PageHeader, DashboardMainContent };
