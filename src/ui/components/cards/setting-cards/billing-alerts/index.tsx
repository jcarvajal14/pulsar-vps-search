import { SettingCardDiv } from '../styled';
import { Header, AlertInfo, AlertType } from './styled';
import Checkbox from '@mui/material/Checkbox';

const BillingAlertsCard = () => {
  return (
    <SettingCardDiv>
      <Header>
        <label>
          <strong>Billing Alerts</strong>
        </label>
      </Header>
      <AlertInfo>
        <AlertType>
          <Checkbox />
          <label>Email Alerts</label>
        </AlertType>
        <p>Receive an email when your bill is due</p>
      </AlertInfo>
      <AlertInfo>
        <AlertType>
          <Checkbox />
          <label>Phone Alerts </label>
        </AlertType>
        <p>Receive a text message when your bill is due</p>
      </AlertInfo>
    </SettingCardDiv>
  );
};
export default BillingAlertsCard;
