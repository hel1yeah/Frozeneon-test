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
  ],
};

function getPackageList(queryString: string, page = 0, hitsPerPage = 10) {
  const options = { ...stdOptionsSearch, page, hitsPerPage };
  return algoliaIndex.search(queryString, options);
}

export { getPackageList };
