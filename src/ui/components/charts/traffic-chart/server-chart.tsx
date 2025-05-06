import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { DatePeriod } from '../../../../types/datePeriod.module';
import { getLabels } from '../../../../utilities/getLabels';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

interface LineChartProps {
  trafficData: { incoming: number[], outgoing: number[] }
  period: DatePeriod,
}

//linechat
const LineChart = ({ trafficData, period }: LineChartProps) => {
  const [chartLoading, setIsChartsLoaded] = useState<boolean | undefined>();
  const [gradientColor, setGradientColor] = useState<any | undefined>();
  const [labels, setLabels] = useState<string[] | undefined>();

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Traffic 1',
        data: trafficData.incoming,
        backgroundColor: gradientColor?.gradient1,
        borderColor: '#FC9272',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
      {
        label: 'Traffic 2',
        data: trafficData.outgoing,
        backgroundColor: gradientColor?.gradient2,
        borderColor: '#0D99FF',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
    ],
  };

  const trafficChartLine = (
    <Line
      id='chart'
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
              grid: {
              tickLength: 0,
            },
            ticks: {
              padding: 8,
              color: '#969696',
              font: {
                size: 11,
              },
            },
            beginAtZero: true,
          },
          y: {
            min: 0, // Set the minimum value of the y-axis
            max: 100,
            beginAtZero: true,
            grid: {
              tickLength: 0,
              color: 'white',
              lineWidth: 1,
              drawTicks: true,
            },
            ticks: {
              color: '#969696',
              padding: 8,
              callback: function (value, index, ticks) {
                return value + 'G';
              },
            },
            border: {
              dash: [4, 6],
            },
          },
        },
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      }}
    />
  );

  // Get canvas context and set the gradient
  useEffect(() => {
    if (chartLoading) {
      const canvas = document.getElementById('chart') as HTMLCanvasElement;
      if (typeof document !== 'undefined') {
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const gradient1 = ctx?.createLinearGradient(0, 0, 0, 300);
          gradient1?.addColorStop(0, 'rgba(255, 146, 114, 0.4)');
          gradient1?.addColorStop(1, 'rgba(0, 0, 0, 0)');

          const gradient2 = ctx?.createLinearGradient(0, 0, 0, 300);
          gradient2?.addColorStop(0, 'rgba(13, 153, 255, 0.4)');
          gradient2?.addColorStop(0.8, 'rgba(0, 0, 0, 0)');

          setGradientColor({ gradient1, gradient2 });
        }
      }
    }
  }, [chartLoading, period]);

  // Change the Chart x-axios labels
  useEffect(() => {
    let timeoutId: any;

    function handleResize() {
      setIsChartsLoaded(false); // Set loading to true when resizing starts

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsChartsLoaded(true); // Set loading to false after resizing is complete
      }, 500); // Adjust the delay time as needed
    }
    setLabels(getLabels(period));
    handleResize();
  }, [period]);

  // Initial Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChartsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  // Resize Loading
  useEffect(() => {
    let timeoutId: any;

    function handleResize() {
      setIsChartsLoaded(false); // Set loading to true when resizing starts

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsChartsLoaded(true); // Set loading to false after resizing is complete
      }, 500); // Adjust the delay time as needed
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div style={{ height: '250px' }}>
        {chartLoading ? (
          trafficChartLine
        ) : (
          <div
              style={{
                height: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              justifySelf: 'center',
            }}
          >
            <Spin indicator={antIcon} style={{color: 'white'}}/>
          </div>
        )}
      </div>
    </>
  );
};

export default LineChart;
