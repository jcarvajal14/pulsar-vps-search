import { Color } from '../../../constants/color';
import { Space } from '../../../constants/size';
import styled from 'styled-components';
import { IconCardButton } from './management/server-details';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-bottom: ${Space.s};
  h6 {
    color: ${Color.$gray_primary};
  }
`;
const ServersMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-base);
  height: calc(100vh - 160px);
  
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

`;

const ServersHeader = styled.div`
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

const BuyServerButton = styled(IconCardButton)`
  height: 36px;
  border: none !important;
  border-radius: var(--space-bl);
  padding: var(--padding-none) var(--padding-bl);
`;

export { PageHeader, ServersMainContent, ServersHeader, BuyServerButton };
