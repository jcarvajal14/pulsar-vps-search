import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OsciloIcon from '../../components/common/svgicons/OsciloIcon';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import { BandwidthSliderDiv, IpSliderDiv } from './styled';
import { Slider } from 'antd';
import { media } from '../../../styles/responsive';

const BandwidthCommit = () => {
  const [isClient, setClient] = useState<boolean | undefined>();
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <BandwidthCommitContent>
          <BandwidthInfo>
            <IconDiv>
              <OsciloIcon stroke={Color.$white} />
              <h5>Bandwidth Commit</h5>
            </IconDiv>
            {isClient ? <BandwidthSliderDiv>
              <Slider defaultValue={40} max={50} min={5} />
            </BandwidthSliderDiv> : null}
          </BandwidthInfo>
          <BandwidthPrice>
            <label>Amount</label>
            <label>$ 60</label>
          </BandwidthPrice>
        </BandwidthCommitContent>
      </ContentBorderDiv>
    </ContentDiv>
  );
};
export default BandwidthCommit;

const ContentDiv = styled.div`
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
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.l} ${Space.l};
`;

const BandwidthCommitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BandwidthInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xxl};
  ${media.md`
    flex-direction: column;
    gap: ${Space.s};
  `}
  
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
`;
const BandwidthPrice = styled.div`
  label {
    font-size: 16px;
    color: white;
    display: block;
    text-align: end;
  }
`
