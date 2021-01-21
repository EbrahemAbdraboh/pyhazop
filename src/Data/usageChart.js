import {
  data,
  height,
  gridOptions,
  options

} from './chart';

const usageChart = {
    type: 'bar',
    title: 'Users Usage',
    subtitle: 'Basic',
    data,
    height,
    options: {
      ...options,
      ...gridOptions,
    }
  }

export default usageChart;
