import PaymentsPage from '../ui/pages/payments';
import withAuth from '../auth/withAuth';

const Payments = () => {
  return <PaymentsPage />
}
export default withAuth(Payments);
// export default Payments;
