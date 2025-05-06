import styled from 'styled-components';
import { Hr } from '../../common/Hr';
import { media } from '../../../../styles/responsive';

const TrafficChartContainer = styled.div`
  background-color: var(--color-primary);
  border-radius: var(--space-l);
  padding: var(--space-s) var(--space-base);
  gap: var(--space-base);
`;

const TrafficChartHeader = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTextDiv = styled.div`
  padding: var(--padding-none) var(--padding-base);
  h6 {
    color: var(--color-gray-100);
  }
`;

const HeaderDateDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-base);
`;

const MonthButton = styled.button`
  height: 36px;
  border-radius: var(--space-bl);
  padding: var(--padding-none) var(--padding-bl);
`;

const PeriodButtonGroupDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--space-xs);
  height: 36px;
  border-radius: var(--padding-l);
  padding: var(--padding-xs) var(--padding-s);
  background-color: var(--color-neutral-primary);

  ${media.lg`
        display: none;
  `}

  & > .active-button {
    border-radius: 22px;
    padding: var(--padding-none) var(--padding-sb);
    background-color: var(--color-pink-600);
  }
  & > button {
    color: white;
    padding: var(--padding-none) var(--padding-sb);
    border-radius: 22px;
    font-size: 12px;
    &:hover {
      background-color: var(--color-bg-primary);
    }
    &:active {
      background-color: var(--color-pink-600);
    }
    &:focus {
      background-color: var(--color-pink-600);
    }
  }
`;

const Divider = styled(Hr)`
  margin: var(--padding-xs) var(--padding-base);
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 200px;
  span {
    padding: var(--padding-none) var(--space-base);
    color: var(--color-gray-100);
  }
  section {
    display: flex;
    span {
      flex: 1;
      color: white;
      font-size: 12px;
    }
    label {
      flex-grow: 1;
      width: 50%;
      padding: var(--padding-none) var(--space-base);
      font-size: 1.2em;
      &:first-child {
        color: #f17f7f;
      }
      &:last-child {
        color: #72c2fc;
      }
    }
  }
`;

export {
  TrafficChartContainer,
  TrafficChartHeader,
  HeaderTextDiv,
  HeaderDateDiv,
  MonthButton,
  PeriodButtonGroupDiv,
  Divider,
  Footer,
};
