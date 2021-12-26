import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://data.jsdelivr.com/v1',
});

export default requestAxios;
