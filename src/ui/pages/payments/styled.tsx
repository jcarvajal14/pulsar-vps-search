import { Space } from '../../../constants/size';
import styled from 'styled-components';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-right: ${Space.base};
  padding-bottom: ${Space.s};
  h6 {
    color: var(--color-gray-100);
  }
`;

const PaymentsMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  overflow-y: auto;
  height: calc(100vh - 170px);
  padding-left: ${Space.sb};
  padding-right: ${Space.base};

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

export { PageHeader, PaymentsMainContent };
