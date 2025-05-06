import TrafficChart from '../../../ui/components/charts/traffic-chart';
import TrafficTable from '../../../ui/components/lists/traffic-table';
import { MainPageContainer } from '../../../styles/global';
import { PageHeader, DashboardMainContent } from './styled';
import BillingCard from './upcoming-payments';
import IpSummary from './ip-summary';
import BandwidthCommit from './bandwidth-commit';

export default function DashboardPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Dashboard</strong>
        </h3>
      </PageHeader>
      <DashboardMainContent className='dashboard-content'>
        <section className='sub-content'>
          <TrafficChart />
          <TrafficTable isminimized={true} />
        </section>
        <section className='sub-content dashboard-right-sidebar'>
          <BillingCard />
          <IpSummary />
          <BandwidthCommit />
        </section>
      </DashboardMainContent>
    </MainPageContainer>
  );
}
