import axios from './axios';

const getFileInfo = ({ name, version }, structure = 'tree') => {
  return axios.get(`/package/npm/${name}@${version}/${structure}`);
};

export { getFileInfo };
