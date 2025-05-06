import IPAddressesPage from '../ui/pages/ipaddresses';
import withAuth from '../auth/withAuth';

const IPAddresses = () => {
  return <IPAddressesPage />
}
export default withAuth(IPAddresses);
// export default IPAddresses;
