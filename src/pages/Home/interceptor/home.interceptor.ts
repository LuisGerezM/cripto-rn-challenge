import {allCryptosAdapter, cryptoAdapter} from 'src/adapters';
import {Crypto} from 'src/models';
import {fetchAPI, URLs} from 'src/services';
import {replaceTo} from 'src/utils';

const getCryptosByUser = async (arrayData: Crypto[]) => {
  let cryptosByUser: Crypto[] = [];

  const promises = arrayData.map(async crypto => {
    const url = replaceTo(URLs.cryptoWithMetrics, 'CRYPTO_ID', crypto.id);

    const fetching = await fetchAPI({url});

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

const getAllCryptos = async (signal: AbortSignal) => {
  const url = `${URLs.allCryptos}`;

  const fetching = await fetchAPI({url, signal});

  return fetching?.data ? allCryptosAdapter(fetching.data) : fetching.status;
};

export {getCryptosByUser, getAllCryptos};
