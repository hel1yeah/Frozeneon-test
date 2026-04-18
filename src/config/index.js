const applicationID = process.env.VUE_APP_ALGOLIA_APP_ID;
const apiKey = process.env.VUE_APP_ALGOLIA_API_KEY;

if (!applicationID || !apiKey) {
  throw new Error(
    'Algolia credentials are missing. Set VUE_APP_ALGOLIA_APP_ID and VUE_APP_ALGOLIA_API_KEY in your .env file.'
  );
}

export const ALGOLIA_CONFIG = {
  applicationID,
  apiKey,
};
