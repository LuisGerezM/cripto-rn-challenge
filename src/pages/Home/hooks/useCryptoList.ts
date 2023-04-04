import {useSelector} from 'react-redux';

export const useCryptoList = () => {
  const cryptoData = useSelector(state => state.cryptoData);

  return {cryptoData};
};
