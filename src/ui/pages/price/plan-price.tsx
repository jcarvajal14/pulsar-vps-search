import React from 'react';
import styled from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import { IconButtonDiv } from '../../components/common/button/IconButton';
import PaymentsIcon from '../../components/common/svgicons/PaymentsIcon';

const PlanPrice = () => {
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <Header>
          <h3>Your Plan</h3>
          <p>
            Based on your current choices.
          </p>
        </Header>
        <Body>
          <SubBody>
            <label>Servers</label>
            <label>$1150</label>
          </SubBody>
          <SubBody>
            <label>Bandwidth Commit</label>
            <label>$60</label>
          </SubBody>
          <SubBody>
            <label>Support Plan</label>
            <label>$15</label>
          </SubBody>
          <hr />
          <SubBody>
            <label>Total</label>
            <label>$1225</label>
          </SubBody>
          <CheckoutButton>
          <IconButtonDiv className='button-primary'>
            <PaymentsIcon stroke={Color.$white} />
            <span>Checkout</span>
            </IconButtonDiv>
            </CheckoutButton>
        </Body>
      </ContentBorderDiv>
    </ContentDiv>
  );
};
export default  PlanPrice;

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
  flex-direction: column;
  gap: ${Space.sb};
`;

const SubBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    &:first-child {
      color: ${Color.$netural_700};
    }
    &:last-child {
      color: ${Color.$white};
    }
  }
`;
const CheckoutButton = styled.div`
  width: 250px;
`