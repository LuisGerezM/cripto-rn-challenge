import {allCryptosAdapter} from 'src/adapters';
import {fetchAPI, URLs} from 'src/services';

const getAllCryptos = async (page: number, signal: AbortSignal) => {
  const url = `${URLs.allCryptos}&page=${page}`;

  const fetching = await fetchAPI({url, signal});

  return fetching?.data ? allCryptosAdapter(fetching.data) : fetching.status;
};

export default getAllCryptos;
