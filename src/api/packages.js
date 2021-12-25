import axios from './axios';

const getPackages = () => {
  return axios.get('stats/packages');
};

export { getPackages };
