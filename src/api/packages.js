import axios from 'axios';
import { getPackageList } from './algoliasearch';

export const getPackageFiles = async (packageName) => {
  console.log(await getPackageList('data'));
  // algoliaIndex
  //   .search('data')
  //   .then((data) => console.log(data))
  //   .catch((data) => console.log(data));

  return axios.get(`/package/npm/${packageName}`);
};
