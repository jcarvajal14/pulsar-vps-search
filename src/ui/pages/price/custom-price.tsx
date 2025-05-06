import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../constants/color';
import { BorderRadius, Padding, Space } from '../../../constants/size';
import FilledSuccessIcon from '../../components/common/svgicons/FilledSuccessIcon';

import PlusRoundedIcon from '../../components/common/svgicons/PlusRoundedIcon';
import { media } from '../../../styles/responsive';

const CustomPrice = () => {
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <Header>
          <h1>$150</h1>
          <p>Hardware costs Billed monthly</p>
        </Header>
        <Body>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>4 Cores @ 2.90GHz</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>2TB NVME SSD</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>16GB RAM</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>1 Dedicated IP Address</label>
          </PerformanceDiv>
        </Body>
        <AddServerButton>
          <PlusRoundedIcon stroke={Color.$white} />
          <label>
            Addition Contacts
          </label>
        </AddServerButton>
      </ContentBorderDiv>
    </ContentDiv>
  );
};

export default CustomPrice;

const ContentDiv = styled.div`
  flex-basis: 320px;
  ${media.lg`
    flex-basis: 230px;
  `}
  background-image: linear-gradient(
    to bottom,
    #7f56d9,
    rgba(42, 108, 236, 0.88),
    rgba(0, 42, 255, 0.78)
  );
  /* border: 1px solid ; */
  border-radius: 16px;
`;
const ContentBorderDiv = styled.div`
  height: calc(100% - 2px);
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.l} ${Space.l};
  display: flex;
  flex-direction: column;
  gap: ${Space.xl};
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
  p {
    text-align: center;
    font-size: 16px;
  }
`;
const PerformanceDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
  label {
    color: white;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
`;
export const AddServerButton = styled.button`
  border-radius: ${BorderRadius.xl};
  padding: ${Padding.s} ${Padding.sb};
  border: solid 1px ${Color.$gray_600};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${Space.s};
  color: ${Color.$white};
  label {
    font-size: 16px;
  }
`;
