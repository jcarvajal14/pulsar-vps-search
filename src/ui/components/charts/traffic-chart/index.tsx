import React, { useEffect, useState } from 'react';
import PeriodButtonGroup from './button-group';
import LineChart from './server-chart';
import {
  TrafficChartContainer,
  TrafficChartHeader,
  HeaderTextDiv,
  HeaderDateDiv,
  MonthButton,
  Divider,
  Footer,
} from './styled';
import apiService from '../../../../services/apiservice';
import { DatePeriod } from '../../../../types/datePeriod.module';

type TrafficData = { incoming: number[], outgoing: number[] };

const TrafficChart = () => {

  const [period, setPeriod] = useState<DatePeriod>(DatePeriod.year);
  const [trafficData, setTrafficData] = useState<TrafficData | undefined>();

  useEffect(() => {
    const getData = async () => {
      apiService.secureApi('pulsar').getTrafficData(period).then(
        (res) => {
          setTrafficData(res.data);
        }
      ).catch(err => console.log(err));
    }
    getData();
  }, [period])

  return (
    <TrafficChartContainer>
      <TrafficChartHeader>
        <HeaderTextDiv>
          <h6>Acitivity</h6>
          <h4>
            <strong>Total Traffic</strong>
          </h4>
        </HeaderTextDiv>
        <HeaderDateDiv>
          <PeriodButtonGroup setPeriod={setPeriod} />
          <MonthButton className='button-secondary'>January, 2023</MonthButton>
        </HeaderDateDiv>
      </TrafficChartHeader>
      <Divider />
      <LineChart period={period} trafficData={trafficData??{incoming:[], outgoing: []}}/>
      <Footer>
        <span>Traffic</span>
        <Divider />
        <section>
          <span>Incoming</span>
          <span>Outgoing</span>
        </section>
        <section>
          <label><strong>300G</strong></label>
          <label><strong>200G</strong></label>
        </section>
      </Footer>
    </TrafficChartContainer>
  );
};
export default TrafficChart;
