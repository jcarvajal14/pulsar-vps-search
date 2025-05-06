import React from 'react';
import {
  ConfigureInfoBody,
  PricePageContent,
  ServerConfigureDiv,
  SubBody,
  SubContent,
  SubHeader,
} from './styled';
import SubscribePriceCard from '../../components/cards/subscribe-pricing';
import ServerConfigure from './server-configuration-card';
import CustomPrice from './custom-price';
import BandwidthCommit from './bandwidth-commit';
import ConfigureTable from './configure-table';
import ConfigureSupport from './support';
import PlanPrice from './plan-price';
import Footer from '../../components/footer';
import {
  BasicPlan,
  BusinessPlan,
  EnterprisePlan,
} from '../../../constants/data/default-plan';

const planDetails = [
  { planType: BasicPlan, firstCard: true },
  { planType: BusinessPlan, firstCard: false },
  { planType: EnterprisePlan, firstCard: false },
];

const PricePage = () => {
  return (
    <PricePageContent>
      <SubContent>
        <SubHeader>
          <div>
            <label>Pricing</label>
            <h1>Simple, Transparent pricing</h1>
          </div>
          <p>
            We believe hosting should be accessible to all companies, no matter
            the size.
          </p>
        </SubHeader>
        <SubBody>
          {planDetails.map((plan, index) => (
            <SubscribePriceCard
              key={index}
              planDetail={plan.planType}
              firstCard={plan.firstCard}
            />
          ))}
        </SubBody>
      </SubContent>
      <SubContent>
        <SubHeader>
          <div>
            <label>Pricing</label>
            <h1>Build a plan that fits your needs</h1>
          </div>
          <p>Unlimited data transfer, unshared 1×10GE — 2×100GE ports</p>
        </SubHeader>
        <ConfigureInfoBody>
          <ServerConfigureDiv>
            <ServerConfigure />
            <CustomPrice />
          </ServerConfigureDiv>
          <BandwidthCommit />
          <ConfigureTable />
          <ConfigureSupport />
          <PlanPrice />
        </ConfigureInfoBody>
      </SubContent>
      <Footer />
    </PricePageContent>
  );
};
export default PricePage;
