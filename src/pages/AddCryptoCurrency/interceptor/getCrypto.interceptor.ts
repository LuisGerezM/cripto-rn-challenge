import {cryptoAdapter} from 'src/adapters';
import {fetchAPI, URLs} from 'src/services';
import {replaceTo} from 'src/utils';

const getCrypto = async (criptoCurrency: string, signal: AbortSignal) => {
  const url = replaceTo(URLs.cryptoWithMetrics, 'CRYPTO_ID', criptoCurrency);

  const fetching = await fetchAPI({url, signal});

  return fetching.data?.id ? cryptoAdapter(fetching.data) : fetching.status;
};

export default getCrypto;
