import styled from 'styled-components'
import { media } from './responsive';

const MainPageContainer = styled.div`
    background-color: var(--color-bg-primary);
    height: calc(100vh - 60px);
    width: 100vw;
    overflow: hidden;

    padding-top: var(--padding-l);
  ${media.md`
    padding-top:90px;
  `}
    padding-bottom: var(--padding-l);
    padding-left: var(--padding-s);
    padding-right: var(--padding-s);
`
export { MainPageContainer };
