import InputComponent from '../../../common/input/input';
import { SettingCardDiv } from '../styled';
import { Header, CityInfo } from './styled';

const BillingInformationCard = () => {
  return (
    <SettingCardDiv>
      <Header>
        <h3>
          <strong>Billing Information</strong>
        </h3>
      </Header>
      <p>The following information is used for billing services.</p>
      <InputComponent inputPlaceholder='Company Name' />
      <InputComponent inputPlaceholder='Address' />
      <CityInfo>
        <InputComponent inputPlaceholder='City' />
        <InputComponent inputPlaceholder='State' />
        <InputComponent inputPlaceholder='Postal Code' />
      </CityInfo>
    </SettingCardDiv>
  );
};
export default BillingInformationCard;
