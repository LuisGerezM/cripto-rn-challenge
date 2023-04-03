import {cryptoAdapter} from 'src/adapters';
import {Crypto} from 'src/models';
import {fetchAPI, URLs} from 'src/services';
import {replaceTo} from 'src/utils';

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
