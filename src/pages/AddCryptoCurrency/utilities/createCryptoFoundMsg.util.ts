import {toFixedCryptoNumber} from 'src/utils';

const createCryptoFoundMsg = (
  text: string,
  name: string,
  symbol: string,
  price_usd: number,
  percent_24: number,
) => {
  return `${text}:
              Name:   ${name}
              Symbol: ${symbol}
              Price:     ${toFixedCryptoNumber(price_usd)}
              Percent usd last 24 hs: 
                              ${toFixedCryptoNumber(percent_24)}
            `;
};

export default createCryptoFoundMsg;
