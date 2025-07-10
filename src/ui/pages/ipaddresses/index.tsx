import {useState, useMemo} from 'react'; // Added for state management and memoization
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
import { StatusType } from '../../../types/status.module';

// Mock data, complete dataset added for testing purposes

const mockIpData = [
  {
    id: 1,
    ipaddress: '192.168.1.1',
    location: 'Phoenix',
    dateAllocated: '17 Oct, 2022',
    status: StatusType.provisioning,
    assignedTo: {
      serverAddress: '192.168.1.1',
      serverType: 'd1.c1.large',
    },
    manage: true,
  },
  {
    id: 2,
    ipaddress: '10.0.0.1',
    location: 'New York',
    dateAllocated: '18 Oct, 2022',
    status: StatusType.assigned,
    assignedTo: {
      serverAddress: '10.0.0.1',
      serverType: 'd1.c1.medium',
    },
    manage: true,
  },
  {
    id: 3,
    ipaddress: '172.16.0.1',
    location: 'London',
    dateAllocated: '19 Oct, 2022',
    status: StatusType.error,
    assignedTo: {
      serverAddress: '172.16.0.1',
      serverType: 'd1.c1.small',
    },
    manage: true,
  },
  {
    id: 4,
    ipaddress: '192.168.0.101',
    location: 'Tokyo',
    dateAllocated: '20 Oct, 2022',
    status: StatusType.unassigned,
    assignedTo: {
      serverAddress: '192.168.0.101',
      serverType: 'd1.c1.xlarge',
    },
    manage: true,
  },
  {
    id: 5,
    ipaddress: '10.0.0.255',
    location: 'Sydney',
    dateAllocated: '21 Oct, 2022',
    status: StatusType.assigned,
    assignedTo: {
      serverAddress: '10.0.0.255',
      serverType: 'd1.c1.large',
    },
    manage: true,
  },
  {
    id: 6,
    ipaddress: '172.16.254.1',
    location: 'Berlin',
    dateAllocated: '22 Oct, 2022',
    status: StatusType.provisioning,
    assignedTo: {
      serverAddress: '172.16.254.1',
      serverType: 'd1.c1.medium',
    },
    manage: true,
  },
];

export default function ServersPage() {

  // State hook to manage the search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Memoized filtering logic for performance optimization
  const filteredIpData = useMemo(() => {
    // Return all data when search is empty
    if (!searchTerm) return mockIpData;
    
    // Case-insensitive filtering
    const term = searchTerm.toLowerCase();
    return mockIpData.filter(item => 
      item.ipaddress.toLowerCase().includes(term)
    );
  }, [searchTerm]); // Only re-run when searchTerm changes

  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>IP Addresses</strong>
        </h3>
      </PageHeader>
      <IPAddressesMainContent>
        <IPAddressesHeader>
          <SearchComponent 
            searchTerm={searchTerm} // Pass current search value
            onSearchChange={setSearchTerm} // Pass state updater
          />
          <IPAllocateButton className='button-secondary'>
            <ShoppingBagIcon stroke={Color.$white} />
            <label>Allocate additional IPs</label>
          </IPAllocateButton>
        </IPAddressesHeader>
        {/* Table with dynamically filtered data */}
        <IPAddressesTable ipList={filteredIpData} />
      </IPAddressesMainContent>
    </MainPageContainer>
  );
}
