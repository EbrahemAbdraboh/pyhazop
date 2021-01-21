import {
  dataPie,
  height,
  sharedOptions

} from './chart';

const statusChart = {

    type: 'pie',
    title: 'Projects Status',
    subtitle: 'Pie',
    data: dataPie,
    height,
    options: {
      ...sharedOptions,
      elements: {
        arc: {
          borderWidth: 1
        }
      }
    }
  };

export default statusChart;
