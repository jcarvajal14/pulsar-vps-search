import { Color } from '../../../constants/color';
import { Space } from '../../../constants/size';
import styled from 'styled-components';
import { IconCardButton } from '../servers/management/server-details';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-bottom: ${Space.s};
  h6 {
    color: ${Color.$gray_primary};
  }
`;

const IPAddressesMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  overflow-y: auto;
  height: calc(100vh - 160px);

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

`;

const IPAddressesHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${Space.none} ${Space.sb};
  & > :first-child {
    background-color: ${Color.$dark_primary};
    width: 600px;
    border-radius: ${Space.l};
    padding: ${Space.none} ${Space.s};
    align-items: center;
    svg {
      color: white;
    }
    & > :last-child {
      /* display: none; */
    }
  }
`

const IPAllocateButton = styled(IconCardButton)`
  height: 36px;
  border-radius: var(--space-bl);
  border: none !important;
  padding: var(--padding-none) var(--padding-bl);
`;

export { PageHeader, IPAddressesMainContent, IPAddressesHeader, IPAllocateButton };
