import algoliasearch from 'algoliasearch';
import { ALGOLIA_CONFIG } from '../config';

const algolia = algoliasearch(
  ALGOLIA_CONFIG.applicationID,
  ALGOLIA_CONFIG.apiKey
);
const algoliaIndex = algolia.initIndex('npm-search');

const stdOptionsSearch = {
  attributesToRetrieve: [
    'description',
    'homepage',
    'keywords',
    'license',
    'name',
    'owner',
    'version',
    'downloadsLast30Days',
    'humanDownloadsLast30Days',
    'popular',
  ],
};

function getPackageList(queryString, page = 0, hitsPerPage = 12) {
  const options = { ...stdOptionsSearch, page, hitsPerPage };
  return algoliaIndex.search(queryString, options);
}

export { getPackageList };
