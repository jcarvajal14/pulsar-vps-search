import { MainPageContainer } from '../../../styles/global';
import { PageHeader, PaymentsMainContent } from './styled';
import PaymentAmount from '../../components/cards/payment-amount';
import PaymentInvoices from '../../components/cards/payment-invoices';

export default function PaymentsPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Payments</strong>
        </h3>
      </PageHeader>
      <PaymentsMainContent>
        <PaymentAmount />
        <PaymentInvoices />
      </PaymentsMainContent>
    </MainPageContainer>
  );
}
