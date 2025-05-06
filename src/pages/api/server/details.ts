// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerDetails } from '../../../types/server.module';
import { StatusType } from '../../../types/status.module';

let data: ServerDetails;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerDetails>
) {
  const serverId = Number(req.query?.id);

  switch (serverId) {
    case 1:
      data = {
        ipAddress: `192\u00d7168\u00d71\u00d724`,
        status: StatusType.on,
        CPU: `24C \u00d7 2.9GHz`,
        RAM: `256GB DDR4`,
        OS: `Ubutu Focal`,
        type: `d2.c2.large`,
        storage: `2\u00d7 2TB NVME`,
        created: `sep 15, 2023`,
        uptime: `385 days`,
      };
      break;
    case 2:
      data = {
        ipAddress: `192\u00d7168\u00d71\u00d736`,
        status: StatusType.on,
        CPU: `24C \u00d7 2.9GHz`,
        RAM: `256GB DDR4`,
        OS: `Ubutu Focal`,
        type: `d2.c2.large`,
        storage: `2\u00d7 2TB NVME`,
        created: `sep 15, 2023`,
        uptime: `385 days`,
      };
      break;
    case 3:
      data = {
        ipAddress: `192\u00d7168\u00d71\u00d726`,
        status: StatusType.off,
        CPU: `24C \u00d7 2.9GHz`,
        RAM: `256GB DDR4`,
        OS: `Ubutu Focal`,
        type: `d2.c2.large`,
        storage: `2\u00d7 2TB NVME`,
        created: `sep 15, 2023`,
        uptime: `385 days`,
      };
      break;
    case 4:
      data = {
        ipAddress: `192\u00d7168\u00d71\u00d728`  ,
        status: StatusType.on,
        CPU: `24C \u00d7 2.9GHz`,
        RAM: `256GB DDR4`,
        OS: `Ubutu Focal`,
        type: `d2.c2.large`,
        storage: `2\u00d7 2TB NVME`,
        created: `sep 15, 2023`,
        uptime: `385 days`,
      };
      break;
    default:
      break;
  }
  res.status(200).json(data);
}
