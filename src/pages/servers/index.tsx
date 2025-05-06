import Servers from '../../ui/pages/servers'
import withAuth from '../../auth/withAuth';

const ServersPage = () => {
  return <Servers />
}
export default withAuth(ServersPage);
// export default ServersPage;
