import withAuth from "../../auth/withAuth";
import ServerManagement from "../../ui/pages/servers/management/management";

const ServerManagementPage = () => {
    return (
        <ServerManagement />
    )
}
export default withAuth(ServerManagementPage);
