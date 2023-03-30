import {Crypto} from 'src/models/crypto.models';
import {cryptoSchema} from 'src/schema/crypto.schema';

export const mockCryptosData: Crypto[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: 28286.21,
    percent_24: -1.82,
    icon: cryptoSchema.cryptosImg.bitcoin,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: 146.83,
    percent_24: 1.82,
    icon: cryptoSchema.cryptosImg.ethereum,
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price_usd: 0.22,
    percent_24: 1.82,
    icon: cryptoSchema.cryptosImg.xrp,
  },
];
