import { ApexOptions } from 'apexcharts';
import { SolidApexCharts } from 'solid-apexcharts';
import { SettingsContextValue, useSettings } from '../providers/SettingsProvider';

function Charts() {
  const { settings } = useSettings() as SettingsContextValue;

  const getMorningTime = (persons: Array<any>) => {
    return {
      name: 'night time',
      data: persons.map((el) => ({
        x: el.name,
        y: [new Date().setUTCHours(0, 0, 0, 0), el.startWork],
      })),
    };
  };
  const getWorkTime = (persons: Array<any>) => {
    return {
      name: 'work time',
      data: persons.map((el) => ({
        x: el.name,
        y: [el.startWork, el.endWork],
      })),
    };
  };
  const getGaps = (persons: Array<any>) => {
    return {
      name: 'gaps',
      data: persons.map((el) => ({
        x: el.name,
        y: el.gaps,
      })),
    };
  };

  const getEviningTime = (persons: Array<any>) => {
    return {
      name: 'evening time',
      data: persons.map((el) => ({
        x: el.name,
        y: [el.endWork, new Date().setHours(23, 59, 0, 0), el.endWork],
      })),
    };
  };
  const data = {
    series: [getMorningTime(settings()), getWorkTime(settings()), getGaps(settings()), getEviningTime(settings())],
    options: {
      chart: {
        height: 350,
        type: 'rangeBar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '20%',
          rangeBarGroupRows: true,
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#3F51B5',
        '#546E7A',
        '#D4526E',
        '#8D5B4C',
        '#F86624',
        '#D7263D',
        '#1B998B',
        '#2E294E',
        '#F46036',
        '#E2C044',
      ],
      fill: {
        type: 'solid',
      },
      xaxis: {
        type: 'datetime',
      },
      legend: {
        show: false,
        position: 'right',
      },
      tooltip: {
        custom: function (opts: any) {
          // const fromYear = new Date(opts.y1).getFullYear();
          // const toYear = new Date(opts.y2).getFullYear();
          // const values = opts.ctx.rangeBar.getTooltipValues(opts);

          return '';
        },
      },
      annotations: {
        xaxis: [
          {
            x: new Date().getTime(),
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'right now',
            },
          },
        ],
      },
    } as ApexOptions,
  };
  return <SolidApexCharts width="800" type="rangeBar" options={data.options} series={data.series} />;
}

export default Charts;
