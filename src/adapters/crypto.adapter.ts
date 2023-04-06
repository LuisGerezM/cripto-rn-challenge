import {Crypto} from 'src/models';
import {URLs} from 'src/services';
import {replaceTo, toFixedCryptoNumber} from 'src/utils';

interface CryptoAdaptParams {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
}
const cryptoAdapter = (crypto: CryptoAdaptParams): Crypto => ({
  id: crypto.id,
  name: crypto.name,
  symbol: crypto.symbol,
  price_usd: toFixedCryptoNumber(crypto.market_data.price_usd),
  percent_24: toFixedCryptoNumber(
    crypto.market_data.percent_change_usd_last_24_hours,
  ),
  icon: replaceTo(URLs.cryptoImages, 'CRYPTO_ID', crypto.id),
});

export default cryptoAdapter;
