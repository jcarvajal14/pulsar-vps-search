// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerType } from '../../../types/server.module';

type ServerList = {
  serverList: ServerType[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerList>
) {
    const data: ServerList = {
        serverList: [
            {
              id: 1,
              type: 'd1.c1.large',
              status: true,
              ipAddresses: [{ ip: '192.168.1.24' }, { ip: '192.168.1.23' }],
              location: 'Phoenix',
              os: 'Ubuntu',
              cpuUtilization: 10,
              diskUtilization: 80,
              ramUtilization: 70,
              bandwidth: 60,
              incomingTraffic: 40,
              outcomingTraffic: 50,
              date: '17 Oct, 2022',
            },
            {
              id: 2,
              type: 'd1.c2.medium',
              status: true,
              ipAddresses: [{ ip: '192.168.1.36' }, { ip: '192.168.1.37' }, { ip: '192.168.1.88' }],
              location: 'Phoenix',
              os: 'Ubuntu',
              cpuUtilization: 20,
              diskUtilization: 70,
              ramUtilization: 60,
              bandwidth: 50,
              incomingTraffic: 30,
              outcomingTraffic: 40,
              date: '17 Oct, 2022',
            },
            {
              id: 3,
              type: 'd1.c1.small',
              status: false,
              ipAddresses: [{ ip: '192.168.1.26' }, { ip: '192.168.1.27' }],
              location: 'Phoenix',
              os: 'Ubuntu',
              cpuUtilization: 30,
              diskUtilization: 60,
              ramUtilization: 50,
              bandwidth: 40,
              incomingTraffic: 20,
              outcomingTraffic: 70,
              date: '17 Oct, 2022',
            },
            {
              id: 4,
              type: 'd1.c3.medium',
              status: true,
              ipAddresses: [{ ip: '192.168.1.28' }, { ip: '192.168.1.29' }],
              location: 'Phoenix',
              os: 'Ubuntu',
              cpuUtilization: 26,
              diskUtilization: 85,
              ramUtilization: 73,
              bandwidth: 64,
              incomingTraffic: 41,
              outcomingTraffic: 59,
              date: '17 Oct, 2022',
            },
          ],
    }
  res.status(200).json(data);
}
