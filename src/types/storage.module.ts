import { StatusType } from "./status.module";

export type StorageType = {
    deviceName: string;
    diskUtilization: string;
    diskUsage: number;
    status: StatusType;
    usedBy: number;
    manage: string;
}