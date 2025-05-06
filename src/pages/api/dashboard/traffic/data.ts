import type { NextApiRequest, NextApiResponse } from 'next';
import { DatePeriod } from '../../../../types/datePeriod.module';

type TrafficData = {
  incoming: number[];
  outgoing: number[];

};

let data: TrafficData = {
  incoming: [],
  outgoing: []
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrafficData>
) {
  const period = Number(req.query?.period) ?? DatePeriod.year;
  
  switch (period) {
    case DatePeriod.quater:
      data.incoming = [
        12, 24, 45, 60, 68, 43, 70, 16, 59, 80, 45, 67, 89, 57, 45,
      ];
      data.outgoing = [
        15, 36, 67, 89, 14, 45, 14, 46, 45, 60, 68, 43, 70, 65, 59,
      ];
      
      break;
    case DatePeriod.hour:
      data.incoming = [
        89, 90, 45, 60, 68, 59, 70, 16, 59, 80, 45, 67,
      ];
      data.outgoing = [
        80, 45, 67,  14, 45, 14, 46, 68, 43, 70, 65, 59, 
      ];
      break;
    case DatePeriod.day:
      data.incoming = [
        70, 60, 68, 59, 70, 16, 59, 80, 45, 67, 90, 45,
      ];
      data.outgoing = [
        45, 67, 89, 59, 80, 90, 45, 89, 90, 45, 70, 65, 
      ];
      break;
    case DatePeriod.month:
      data.incoming = [
        43, 70, 65, 59, 80, 45, 89, 90, 45, 60, 68, 67, 89, 90, 45,
      ];
      data.outgoing = [
        45, 67, 89, 90, 45, 45, 60, 68, 43, 70, 89, 90, 65, 59, 80, 
      ];
      break;
    case DatePeriod.year:
      data.incoming = [
        67, 89, 90, 45, 90, 45, 43, 70, 65, 59, 80, 45, 
      ];
      data.outgoing = [
        60, 68, 43, 70, 65, 59, 80, 45, 67, 89, 90, 45,
      ];
      break;
    case DatePeriod.all:
      data.incoming = [65, 59, 80];
      data.outgoing = [60, 90, 45];
      break;
    default:
      data.incoming = [
        90, 45, 43, 70, 65, 59, 80, 45, 67, 89, 90, 45,
      ];
      data.outgoing = [
        60, 68,  45, 67, 89, 90, 45,43, 70, 65, 59, 80,
      ];
      break;
  }

  res.status(200).json(data);
}
