import {
  dataPie,
  sharedOptions,

} from './chart';

const statusChart = {

    type: 'pie',
    title: 'Projects Status',
    subtitle: 'Pie',
    data: dataPie,
    height: 200,
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
