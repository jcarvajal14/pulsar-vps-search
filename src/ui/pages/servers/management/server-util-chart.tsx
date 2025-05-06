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

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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

const ServerUtilChart = ({isBandwidth} : {isBandwidth?: boolean}) => {
  const [chartLoading, setIsChartsLoaded] = useState<boolean | undefined>();
  const [gradientColor, setGradientColor] = useState<any | undefined>();

  const data = {
    labels: [
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
    ],
    datasets: isBandwidth ? [
      {
        label: 'Bandwidth-Incoming',
        data: [65, 59, 80, 45, 67, 89, 90, 45, 60, 68, 43, 70],
        backgroundColor: gradientColor?.gradient1,
        borderColor: '#F17F7F',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
      {
        label: 'Bandwidth-Outgoing',
        data: [45, 20, 25, 30, 35, 59, 29, 36, 58, 68, 43, 70],
        backgroundColor: gradientColor?.gradient2,
        borderColor: '#72B1FC',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
    ] : [
      {
        label: 'server-management',
        data: [65, 59, 80, 45, 67, 89, 90, 45, 60, 68, 43, 70],
        backgroundColor: gradientColor?.gradient1,
        borderColor: '#72FCA9',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
    ] 
    ,
  };

  const utilChart = (
    // () => (
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
              count: 5,
              padding: 4,
              callback: function (value, index, ticks) {
                {
                  /* @ts-ignore */
                }
                // if ( value % 20 === 0) { // Set the step size as per your requirement
                return value;
                // } else {
                //   return '';
                // }
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
  useEffect(() => {
    if (chartLoading) {
      const canvas = document.getElementById('chart') as HTMLCanvasElement;
      if (typeof document !== 'undefined') {
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const gradient1 = ctx?.createLinearGradient(0, 0, 0, 300);
          if (isBandwidth) {
            gradient1?.addColorStop(0, 'rgba(241, 127, 127, 0.3)');
          gradient1?.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
          const gradient2 = ctx?.createLinearGradient(0, 0, 0, 300);
          gradient2?.addColorStop(0, 'rgba(114, 177, 252, 0.6)');
            gradient2?.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
            setGradientColor({gradient1, gradient2});
          }
          else {
            gradient1?.addColorStop(0, 'rgba(114, 252, 169, 0.3)');
          gradient1?.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
          setGradientColor({gradient1});
           }

          
        }
      }
    }
  }, [chartLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChartsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

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
      <div
      style={{ height: '100%' }}
      >
        {chartLoading ? (
          utilChart
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Spin indicator={antIcon} />
          </div>
        )}
      </div>
    </>
  );
};

export default ServerUtilChart;
