import Url from 'url';
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

interface IUri{
  uri: string;
}

async function req() {
  const uri = Url.format(getUrlWithParamsConfig('getPokemons')
  );
  console.log('####:uri', uri);
  console.log('####: getUrlWithParamsConfig', )
  return await fetch(uri).then((res)=>res.json());
}

export default req;