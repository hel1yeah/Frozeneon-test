const applicationID =
  import.meta.env.VITE_ALGOLIA_APP_ID || import.meta.env.VUE_APP_ALGOLIA_APP_ID;
const apiKey =
  import.meta.env.VITE_ALGOLIA_API_KEY ||
  import.meta.env.VUE_APP_ALGOLIA_API_KEY;

if (!applicationID || !apiKey) {
  throw new Error(
    'Algolia credentials are missing. Set VITE_ALGOLIA_APP_ID and VITE_ALGOLIA_API_KEY in your .env file.'
  );
}

export const ALGOLIA_CONFIG = {
  applicationID,
  apiKey,
};
