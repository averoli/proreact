import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };

  return url;
}

export default getUrlWithParamsConfig;
