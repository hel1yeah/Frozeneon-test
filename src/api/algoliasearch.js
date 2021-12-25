import algoliasearch from 'algoliasearch';
import { ALGOLIA_CONFIG } from '../config';

const algolia = algoliasearch(
  ALGOLIA_CONFIG.applicationID,
  ALGOLIA_CONFIG.apiKey,
  { protocol: 'https:' }
);
const algoliaIndex = algolia.initIndex('npm-search');

function getPackageList(queryString, page = 0, hitsPerPage = 10) {
  const options = { page, hitsPerPage };
  return algoliaIndex.search(queryString, options);
}

export { getPackageList };
