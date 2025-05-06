import { MainPageContainer } from '../../../styles/global';
import { BuyServerButton, PageHeader, ServersHeader, ServersMainContent } from './styled';
import TrafficTable from '../../../ui/components/lists/traffic-table';
import SearchComponent from '../../../ui/components/common/input/search';
import ShoppingBagIcon from '../../components/common/svgicons/ShoppingBagIcon';
import { Color } from '../../../constants/color';

export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Servers</strong>
        </h3>
      </PageHeader>
      <ServersMainContent>
        <ServersHeader>
          <SearchComponent />
          <BuyServerButton className='button-secondary'>
            <ShoppingBagIcon stroke={Color.$white} />Buy Server</BuyServerButton>
        </ServersHeader>
        <TrafficTable isminimized={false} />
      </ServersMainContent>
    </MainPageContainer>
  );
}
