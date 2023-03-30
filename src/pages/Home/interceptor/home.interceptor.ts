import {Crypto} from 'src/models/crypto.models';
import fetchAPI from 'src/services/fetchAPI.service';
import {URLs} from 'src/services/URLs.service';
import {replaceTo} from 'src/utils/replaceTo.utils';
import {cryptoAdapter} from '../adapter/crypto.adapter';

const getCryptosByUser = async (arrayData: Crypto[], signal: AbortSignal) => {
  let cryptosByUser: Crypto[] = [];

  const promises = arrayData.map(async crypto => {
    const url = replaceTo(URLs.cryptoWithMetrics, 'CRYPTO_ID', crypto.id);

    const fetching = await fetchAPI({url, signal});

    if (fetching.status.error_code) {
      cryptosByUser.push(crypto);
    } else {
      const {data} = fetching;
      cryptosByUser.push(cryptoAdapter(data));
    }

    return fetching;
  });

  await Promise.all(promises);

  return [...cryptosByUser].sort((a, b) => b.price_usd - a.price_usd);
};

export {getCryptosByUser};
