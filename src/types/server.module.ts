import { StatusType } from "./status.module";

type IpAddress = {
    ip: string;
}

export type ServerType = {
    id: number;
    type: string;
    status: boolean;
    ipAddresses?: Array<IpAddress>;
    location: string;
    os: string;
    cpuUtilization?: number;
    ramUtilization?: number;
    diskUtilization?: number;
    bandwidth?: number;
    incomingTraffic?: number;
    outcomingTraffic?: number;
    date?: string;
}

export type ServerDetails = {
    ipAddress: string;
    status: StatusType.on | StatusType.off;
    CPU: string;
    RAM: string;
    OS: string;
    type: string;
    storage: string;
    created: string;
    uptime: string;
}