import {
  data,
  gridOptions,
  sharedOptions,
  options

} from './chart';

const usageChart = {
    type: 'bar',
    title: 'Users Usage',
    subtitle: 'Basic',
    data,
    height: 200,
    options: {
      ...options,
      ...sharedOptions,
      ...gridOptions
    }
  };

export default usageChart;
