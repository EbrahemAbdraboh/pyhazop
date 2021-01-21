import {
  data,
  height,
  gridOptions,
  options

} from './chart';

const canceledChart = {

    type: 'bar',
    title: 'Users Canceled',
    subtitle: 'Basic',
    data,
    height,
    options: {
      ...options,
      ...gridOptions,
    }
  }

export default canceledChart;
