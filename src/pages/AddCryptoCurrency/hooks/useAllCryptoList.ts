import {useEffect, useState} from 'react';
import {useAlertUserConfirm, useAlertUserFeedback} from 'src/hooks';
import {Crypto} from 'src/models';
import {errorType} from 'src/utils';
import {getAllCryptos} from '../interceptor';
import {createCryptoFoundMsg, searchExistCrypto} from '../utilities';
import {mockCryptoExist} from './useAddCryptoForm';

const useAllCryptoList = () => {
  const {showAlertUserFeedback} = useAlertUserFeedback();
  const {showAlertUserConfirm} = useAlertUserConfirm();

  const [pageNumber, setPageNumber] = useState(1);
  const [loadingAllCryptos, setLoadingAllCryptos] = useState(false);
  const [allCryptos, setAllCryptos] = useState<Crypto[]>([]);
  const [messageError, setMessageError] = useState('');

  interface FilterCrypto {
    symbol: string;
  }

  useEffect(() => {
    const fecthAllCryptos = async (signal: AbortSignal) => {
      try {
        const fetchCryptos = await getAllCryptos(pageNumber, signal);

        if (fetchCryptos.error_code) {
          setMessageError(
            'Ups. Error in fetch all cryptos. Contact your administrator',
          );
          return;
        }

        const filterCriptos = fetchCryptos.filter(
          (crypto: FilterCrypto) =>
            !searchExistCrypto(mockCryptoExist, crypto.symbol),
        );

        setAllCryptos([...allCryptos, ...filterCriptos]);
      } catch (error: unknown) {
        console.error('Error fetch all cryptos', error.message);
        errorType(error.message, showAlertUserFeedback);
      } finally {
        setLoadingAllCryptos(false);
      }
    };

    setLoadingAllCryptos(prevState => !prevState);

    const controller = new AbortController();

    const timeOut = setTimeout(() => {
      controller.abort();
    }, 10000);

    fecthAllCryptos(controller.signal);

    return () => {
      controller.abort();
      clearTimeout(timeOut);
    };
  }, [pageNumber]);

  const handlePress = async (crypto: Crypto) => {
    const message = createCryptoFoundMsg(
      'Data',
      crypto.name,
      crypto.symbol,
      crypto.price_usd,
      crypto.percent_24,
    );

    const userConfirm = await showAlertUserConfirm({
      title: `Seleccionaste ${crypto.name}`,
      message,
    });

    if (userConfirm) {
      showAlertUserFeedback({
        title: 'Operation successfully',
        message: `Crypto ${crypto.name} added correctly`,
      });
    }
  };

  const handleAddPages = () => {
    setPageNumber(prevState => ++prevState);
  };

  return {
    messageError,
    allCryptos,
    handlePress,
    loadingAllCryptos,
    handleAddPages,
  };
};

export default useAllCryptoList;
