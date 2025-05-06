import React from 'react';
import {
  Body,
  Header,
  PerformanceDiv,
  SubscribeBorderContent,
  SubscribeButton,
  SubscribePriceContent,
} from './styled';
import FilledSuccessIcon from '../../common/svgicons/FilledSuccessIcon';
import CurveArrowIcon from '../../common/svgicons/CurveArrowIcon';
import { BasicPlanType } from '../../../../types/plan.modulet';

const SubscribePriceCard = ({
  firstCard,
  planDetail,
}: {
  firstCard?: boolean | undefined;
  planDetail: BasicPlanType;
}) => {
  return (
    <SubscribePriceContent>
      <SubscribeBorderContent>
        <Header>
          <h1>{`$${planDetail.price}`}</h1>
          <label>{planDetail.type}</label>
          <label>{planDetail.detail}</label>
        </Header>
        <Body>
          {Object.keys(planDetail).map((key) => {
            if (key !== 'price' && key !== 'type' && key !== 'detail') {
              return (
                <PerformanceDiv key={key}>
                  <FilledSuccessIcon />
                  {/* @ts-ignore */}
                  <label>{planDetail[key]}</label>
                </PerformanceDiv>
              );
            }
          })}
        </Body>
        <SubscribeButton className='button-primary'>
          Get started
        </SubscribeButton>
        {firstCard ? (
          <div style={{ position: 'absolute', top: '-24px', right: '24px' }}>
            <CurveArrowIcon />
          </div>
        ) : null}

        {firstCard ? (
          <label
            style={{
              color: '#6941C6',
              position: 'absolute',
              top: '-36px',
              right: '-84px',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Most popular!
          </label>
        ) : null}
      </SubscribeBorderContent>
    </SubscribePriceContent>
  );
};
export default SubscribePriceCard;
