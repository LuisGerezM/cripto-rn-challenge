import {API_BASE_URL} from '@env';
import {Cripto} from 'src/models/cripto.models';
import fetchAPI from 'src/services/fetchAPI.service';
import {criptoAdapter} from '../adapter/cripto.adapter';

const getCriptosByUser = async (arrayData: Cripto[], signal: AbortSignal) => {
  let criptosByUser: Cripto[] = [];

  const promises = arrayData.map(async cripto => {
    const url = `${API_BASE_URL}/assets/${cripto.id}/metrics`;

    const fetching = await fetchAPI({url, signal});

    if (!fetching.status.error_code) {
      const {data} = fetching;
      criptosByUser.push(criptoAdapter(data));
    } else {
      const doNotChangeData = arrayData.find(money => money.id === cripto.id);
      if (doNotChangeData) {
        criptosByUser.push(doNotChangeData);
      }
    }

    return fetching;
  });

  await Promise.all(promises);

  return [...criptosByUser].sort((a, b) => b.price_usd - a.price_usd);
};

export {getCriptosByUser};
