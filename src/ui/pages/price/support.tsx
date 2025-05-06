import React from 'react';
import styled from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import SelectComponent from '../../components/common/select';
import ToolIcon from '../../components/common/svgicons/ToolIcon';
import { SelectDiv } from './styled';

const ConfigureSupport = () => {
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <Header>
          <h3>Support</h3>
          <p>
            Need help maintaining your servers? Get email and chat support from
            our technicians.
          </p>
        </Header>
        <Body>
          <SubBody>
            <label>Current Plan</label>
            <SelectDiv style={{ width: '150px' }}>
              <SelectComponent Icon={() => (<ToolIcon stroke={Color.$white} />)} />
            </SelectDiv>
          </SubBody>
          <SubBody>
            <label>
              Amount
            </label>
            <label>$ 15</label>
          </SubBody>
        </Body>
      </ContentBorderDiv>
    </ContentDiv>
  );
};
export default ConfigureSupport;

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
  height: calc(100% - 2px);
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.l} ${Space.l};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${Space.xl};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.s};
  label {
    color: ${Color.$white};
  }
`;
