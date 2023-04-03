import {Crypto} from 'src/models';
import {URLs} from 'src/services';
import {replaceTo, toFixedCryptoNumber} from 'src/utils';

interface CryptoAdaptParams {
  id: string;
  slug: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  };
}

const allCryptosAdapter = (arrayCrypto: CryptoAdaptParams[]): Crypto[] =>
  arrayCrypto.map(crypto => ({
    id: crypto.id,
    name: crypto.slug,
    symbol: crypto.symbol,
    price_usd: toFixedCryptoNumber(crypto.metrics.market_data.price_usd),
    percent_24: toFixedCryptoNumber(
      crypto.metrics.market_data.percent_change_usd_last_24_hours,
    ),
    icon: replaceTo(URLs.cryptoImages, 'CRYPTO_ID', crypto.id),
  }));

export default allCryptosAdapter;
