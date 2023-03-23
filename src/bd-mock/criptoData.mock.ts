import {Cripto} from 'src/models/cripto.models';
import {criptoSchema} from 'src/schema/cripto.schema';

export const mockCriptosData: Cripto[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: 28286.21,
    percent_24: -1.82,
    icon: criptoSchema.criptosImg.bitcoin,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: 146.83,
    percent_24: 1.82,
    icon: criptoSchema.criptosImg.ethereum,
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price_usd: 0.22,
    percent_24: 1.82,
    icon: criptoSchema.criptosImg.xrp,
  },
];
