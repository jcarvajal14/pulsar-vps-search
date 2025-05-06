import { ServerCellDiv } from "./styled";

interface ServerCellProps {
    serverAddress: string;
    serverType: string;
}

const ServerCell = ({serverAddress, serverType}: ServerCellProps) => {
    return (
        <ServerCellDiv>
            <label>{serverAddress}</label>
            <label>{serverType}</label>
        </ServerCellDiv>
    )
}
export default ServerCell;
