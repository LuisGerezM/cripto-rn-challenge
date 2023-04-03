import {API_BASE_URL} from '@env';
import {API_CRYPTO_IMAGE_URL} from '@env';

const URLs = {
  allCryptos: `${API_BASE_URL}/assets?fields=id,slug,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours`,
  cryptoImages: API_CRYPTO_IMAGE_URL,
  cryptoWithMetrics: `${API_BASE_URL}/assets/CRYPTO_ID/metrics`,
};

export default URLs;
