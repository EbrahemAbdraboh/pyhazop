import {
  data,
  sharedOptions,
  gridOptions,
  options

} from './chart';

const canceledChart = {

    type: 'bar',
    title: 'Users Canceled',
    subtitle: 'Basic',
    data,
    height: 200,
    options: {
      ...options,
      ...sharedOptions,
      ...gridOptions,
    }
  }

export default canceledChart;
