import {useEffect, useState} from 'react';
import {useAlertUserFeedback} from 'src/hooks/useAlertUserFeedback';
import {Crypto} from 'src/models/crypto.models';
import {errorType} from 'src/utils/errorType.util';
import {getCryptosByUser} from '../interceptor/home.interceptor';
import {messagesByHttpCode} from 'src/schema/messageByHttpCode.schema';

export const useCryptoList = () => {
  const {showAlertUserFeedback} = useAlertUserFeedback();
  const [cryptoData, setCryptoData] = useState<Crypto[]>([
    {
      id: '1e31218a-e44e-4285-820c-8282ee222035',
      name: 'BTC',
      symbol: '',
      price_usd: 0,
      percent_24: 0,
      icon: '',
    },
    {
      id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
      name: 'ETH',
      symbol: '',
      price_usd: 0,
      percent_24: 0,
      icon: '',
    },
    {
      id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
      name: 'RXP',
      symbol: '',
      price_usd: 0,
      percent_24: 0,
      icon: '',
    },
  ]);

  const [lodingPersonalCryptos, setLodingPersonalCryptos] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getYourCryptos = async (signal: AbortSignal) => {
      try {
        const cryptosByUser = await getCryptosByUser(cryptoData, signal);

        setCryptoData(cryptosByUser);
      } catch (error: unknown) {
        console.error('Error get your cryptos', error.message);

        errorType(error.message, showAlertUserFeedback);
        setCryptoData([]);
        setErrorMessage(messagesByHttpCode[500]);
      } finally {
        setLodingPersonalCryptos(false);
      }
    };

    if (cryptoData.length > 0) {
      setLodingPersonalCryptos(true);
      const controller = new AbortController();

      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10000);

      setErrorMessage('');
      getYourCryptos(controller.signal);

      return () => {
        controller.abort();
        clearTimeout(timeOut);
      };
    }
  }, []);

  return {lodingPersonalCryptos, cryptoData, errorMessage};
};
