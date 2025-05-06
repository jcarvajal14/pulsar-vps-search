import { BasicPlanType } from "../../types/plan.modulet";

export const BasicPlan: BasicPlanType = {
    price: 100,
    type: `Basic Plan`,
    detail: `Billed monthly`,
    cpu: `4 Cores @ 2.95GHz`,
    storage: `2TB NVME SSD`,
    ram: `16GB RAM`,
    ipaddressInfo: `1 Dedicated IP Address`,
    bandwidth: `10GB Commit`,
}

export const BusinessPlan: BasicPlanType = {
    price: 200,
    type: `Business Plan`,
    detail: `Billed monthly`,
    cpu: `8 Cores @ 3.15GHz`,
    storage: `2\u00d7 2TB NVME SSD`,
    ram: `32GB RAM`,
    ipaddressInfo: `2 Dedicated IP Address`,
    bandwidth: `20GB Commit`,
}

export const EnterprisePlan: BasicPlanType = {
    price: 400,
    type: `Enterprise Plan`,
    detail: `Billed monthly`,
    cpu: `16 Cores @ 3.25GHz`,
    storage: `4\u00d7 2TB NVME SSD`,
    ram: `64GB RAM`,
    ipaddressInfo: `8 Dedicated IP Address`,
    bandwidth: `40GB Commit`,
}