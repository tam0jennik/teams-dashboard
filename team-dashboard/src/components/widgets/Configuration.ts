import { ApexOptions } from "apexcharts";

export const colors = [
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
];

export const plotConfiguration: ApexOptions = {
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
    colors: colors,
    fill: {
        type: 'solid',
    },
    xaxis: {
        type: 'datetime',
    },
    legend: {
        show: false,
        position: 'right',
    }
}

