import { DatePeriod } from '../types/datePeriod.module';

export const getLabels = (period: DatePeriod): string[] => {
  const currentTime = new Date();
  const result: string[] = [];
  switch (period) {
    case DatePeriod.quater: {
      for (let i = 0; i < 15; i++) {
        const time = new Date(currentTime.getTime() - i * 60000);

        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');

        const formarttedTime = `${hours}:${minutes}`;
        result.unshift(formarttedTime);
      }
      return result;
    }
    case DatePeriod.hour: {
      for (let i = 0; i < 12; i++) {
        const time = new Date(currentTime.getTime() - i * 5 * 60 * 1000);

        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');

        const formarttedTime = `${hours}:${minutes}`;
        result.unshift(formarttedTime);
      }
      return result;
    }
    case DatePeriod.day: {
      for (let i = 0; i < 12; i++) {
        const time = new Date(currentTime.getTime() - i * 60 * 60 * 1000 * 2);

        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');

        const formarttedTime = `${hours}:${minutes}`;
        result.unshift(formarttedTime);
      }
      return result;
    }
    case DatePeriod.month: {
      for (let i = 0; i < 15; i++) {
        const time = new Date(
          currentTime.getTime() - i * 60 * 60 * 1000 * 2 * 24
        );

        const day = time.getDate().toString().padStart(2, '0');
        const month = (time.getMonth() + 1).toString().padStart(2, '0');
        const dateString = `${month}/${day}`;

        result.unshift(dateString);
      }
      return result;
    }
    case DatePeriod.year: {
      return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
    }
    case DatePeriod.all:
      return ['2021', '2022', '2023'];
    default:
      return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
  }
};
