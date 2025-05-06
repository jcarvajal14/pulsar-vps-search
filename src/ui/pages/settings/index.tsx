import { MainPageContainer } from '../../../styles/global';
import { PageHeader, SettingsMainContent, CenterDiv } from './styled';
import SavedPaymentMethod from '../../components/cards/setting-cards/saved-payment-methods';
import BillingInformationCard from '../../components/cards/setting-cards/billing-infomation';
import ContactsCard from '../../components/cards/setting-cards/contacts';
import SupportPlanCard from '../../components/cards/setting-cards/support-plan';
import BillingAlertsCard from '../../components/cards/setting-cards/billing-alerts';

export default function SettingsPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Settings</strong>
        </h3>
      </PageHeader>
      <SettingsMainContent>
        <CenterDiv>
          <SavedPaymentMethod />
          <BillingInformationCard />
          <ContactsCard />
          <SupportPlanCard />
          <BillingAlertsCard />
        </CenterDiv>
      </SettingsMainContent>
    </MainPageContainer>
  );
}
