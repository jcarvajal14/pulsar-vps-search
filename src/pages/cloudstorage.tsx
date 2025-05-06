import CloudStoragePage from '../ui/pages/cloudstorage';
import withAuth from '../auth/withAuth';

const CloudStorage = () => {
  return <CloudStoragePage />
}
export default withAuth(CloudStorage);
// export default IPAddresses;
