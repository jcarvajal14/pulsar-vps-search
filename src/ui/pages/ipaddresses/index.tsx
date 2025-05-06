import { MainPageContainer } from '../../../styles/global';
import {
  IPAllocateButton,
  PageHeader,
  IPAddressesHeader,
  IPAddressesMainContent,
} from './styled';
import SearchComponent from '../../../ui/components/common/input/search';
import IPAddressesTable from '../../components/lists/ipaddress-table';
import ShoppingBagIcon from '../../components/common/svgicons/ShoppingBagIcon';
import { Color } from '../../../constants/color';

export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>IP Addresses</strong>
        </h3>
      </PageHeader>
      <IPAddressesMainContent>
        <IPAddressesHeader>
          <SearchComponent />
          <IPAllocateButton className='button-secondary'>
            <ShoppingBagIcon stroke={Color.$white} />
            <label>Allocate additional IPs</label>
          </IPAllocateButton>
        </IPAddressesHeader>
        <IPAddressesTable />
      </IPAddressesMainContent>
    </MainPageContainer>
  );
}
