import styled from 'styled-components';
import { Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import { media } from '../../../../styles/responsive';

export const SubscribePriceContent = styled.div`
  flex: 1;
  background-image: linear-gradient(
    to bottom,
    #7f56d9,
    rgba(42, 108, 236, 0.88),
    rgba(0, 42, 255, 0.78)
  );
  /* border: 1px solid ; */
  border-radius: 16px;
`;
export const SubscribeBorderContent = styled.div`
  position: relative;
  background-color: ${Color.$dark_card};
  margin: 1px;
  /* height: 50vh; */
  border-radius: 15px;
  padding: ${Space.xl} ${Space.l};
  display: flex;
  flex-direction: column;
  gap: ${Space.xxl};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    color: white;
  }
  h1 {
    font-weight: 600;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.sb};
`;
export const PerformanceDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
  label {
    color: white;
  }
`;
export const SubscribeButton = styled.div`
  border-radius: ${Space.xxl};
  text-align: center;
  padding: ${Space.s};
`;
