import { MainPageContainer } from '../../../styles/global';
import {
  IPAllocateButton,
  PageHeader,
  IPAddressesHeader,
  IPAddressesMainContent,
} from './styled';
import SearchComponent from '../../components/common/input/search';
import StorageTable from '../../components/lists/storage-table';
import ShoppingBagIcon from '../../components/common/svgicons/ShoppingBagIcon';
import { Color } from '../../../constants/color';


export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Cloud Storage</strong>
        </h3>
      </PageHeader>
      <IPAddressesMainContent>
        <IPAddressesHeader>
          <SearchComponent />
          <IPAllocateButton className='button-secondary'>
            <ShoppingBagIcon stroke={Color.$white} />
            Buy Storage
          </IPAllocateButton>
        </IPAddressesHeader>
        <StorageTable />
      </IPAddressesMainContent>
    </MainPageContainer>
  );
}
