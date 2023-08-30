import { ApexOptions } from 'apexcharts';
import { SolidApexCharts } from 'solid-apexcharts';
import { SettingsContextValue, useSettings } from '../providers/SettingsProvider';
import { createMemo } from 'solid-js';
import { plotConfiguration } from './Configuration';

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
        y: [el.endWork, new Date().setUTCHours(23, 59, 0, 0), el.endWork],
      })),
    };
  };

  const options = createMemo<ApexOptions>(() => ({
    ...plotConfiguration,
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
            text: `Your time: ${new Date().getHours()}:${new Date().getMinutes()}`,
          },
        },
      ],
    },
  }));

  const series = createMemo(() => [
    getMorningTime(settings()),
    getWorkTime(settings()),
    getGaps(settings()),
    getEviningTime(settings()),
  ]);

  return <SolidApexCharts width="800" type="rangeBar" options={options()} series={series()} />;
}

export default Charts;
