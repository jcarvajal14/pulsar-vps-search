import Dashboard from '../ui/pages/dashboard'
import withAuth from '../auth/withAuth';

const DashboardPage = () => {
  return <Dashboard />
}
export default withAuth(DashboardPage);
// export default DashboardPage;
