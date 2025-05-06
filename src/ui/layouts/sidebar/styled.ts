import styled from 'styled-components'
import { media } from '../../../styles/responsive'

export const SidebarDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    min-width: 240px;
    height: calc(100vh - 60px);
    padding: var(--padding-l);
    background-color: var(--color-primary);
    justify-content: space-between;
    
    ${media.md`
    display: none;
  `}
    
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
`
export const ProContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
`
export const ProAccountDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--space-base);
    padding-top: calc(50% - var(--space-s));
    background: linear-gradient(to bottom left, #5c8fff, #c14FFF);
    border-radius: var(--space-base);
    aspect-ratio: 1/1;
`
export const UpgradeContentDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-neutral-primary);
    padding: var(--space-l) var(--space-xl);
    gap: var(--space-s);
`
export const UpgradeButton = styled.button`
    padding: 0 var(--space-base);
    border-radius: var(--space-l);
    width: 100%;
    height: 32px;
    font-size: 12px;
`
export const ToggleDiv = styled.div`
    background-color: var(--color-neutral-primary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: var(--padding-none) var(--padding-base);
    border-radius: 12px;
    align-items: center;
`
export const ToggleContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: var(--padding-xs);
    align-items: center;
`
export const Hr = styled.div`
    width: 2px;
    height: var(--space-l);
    background-color: var(--color-primary);
`