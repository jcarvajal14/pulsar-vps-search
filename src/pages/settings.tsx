import SettingsPage from '../ui/pages/settings';
import withAuth from '../auth/withAuth';

const Settings = () => {
  return <SettingsPage />
}
export default withAuth(Settings);
// export default Settings;
