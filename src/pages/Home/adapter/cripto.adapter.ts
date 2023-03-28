import {Cripto} from 'src/models/cripto.models';
import {replaceCriptoImage} from 'src/utils/replaceCriptoImage.utils';

interface CriptoAdaptParams {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
}

export const criptoAdapter = (cripto: CriptoAdaptParams): Cripto => ({
  id: cripto.id,
  name: cripto.name,
  symbol: cripto.symbol,
  price_usd: Number(cripto.market_data.price_usd.toFixed(2)),
  percent: Number(
    cripto.market_data.percent_change_usd_last_24_hours.toFixed(2),
  ),
  icon: replaceCriptoImage(cripto.id),
});
