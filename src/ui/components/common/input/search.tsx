import { Space } from '../../../../constants/size'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const SearchDiv = styled.div`
    background-color: #1f2128;
    width: 600px;
    border-radius: 24px;
    padding: ${Space.s} ${Space.base};
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: ${Space.s};
`
const SearchIconDiv = styled.div`
    
`
const SearchTextDiv = styled.input`
    background-color: #1f2128;
    color: white;
    flex: 1 1 200px;
    &:hover {
        background-color: #1f2128;
        
    }
    &:focus-visible {
        outline: none;
    }
`
interface SearchComponentProps {
    searchTerm: string; // Current search value
    onSearchChange: (value: string) => void; // Change handler
}

const SearchComponent: React.FC<SearchComponentProps> = ({ 
    searchTerm, 
    onSearchChange 
}) => {
    return (
        <SearchDiv>
            <SearchIconDiv>
                <SearchIcon />
            </SearchIconDiv>
            {/* Controlled input component */}
            <SearchTextDiv 
                placeholder='Search IP addresses'
                value={searchTerm} // Bind to prop value
                 // Update state on change
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </SearchDiv>
    )
}

export default SearchComponent;