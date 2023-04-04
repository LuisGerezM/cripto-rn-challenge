import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useAlertUserConfirm, useAlertUserFeedback} from 'src/hooks';
import {errorType} from 'src/utils';
import {getCrypto} from '../interceptor';
import {createCryptoFoundMsg} from '../utilities';
import searchExistCrypto from '../utilities/searchExistCrypto.util';

type FormData = {
  criptoCurrency: string;
};

interface AreSerching {
  criptoCurrency: string;
}

export const mockCryptoExist = [
  {
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: 0,
    percent_24: 0,
    icon: 'https://asset-images.messari.io/images/1e31218a-e44e-4285-820c-8282ee222035/32.png?v=2',
  },
  {
    id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: 0,
    percent_24: 0,
    icon: 'https://asset-images.messari.io/images/21c795f5-1bfd-40c3-858e-e9d7e820c6d0/32.png?v=2',
  },
  {
    id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
    name: 'XRP',
    symbol: 'XRP',
    price_usd: 0,
    percent_24: 0,
    icon: 'https://asset-images.messari.io/images/97775be0-2608-4720-b7af-f85b24c7eb2d/32.png?v=2',
  },
];

const useAddCryptoForm = () => {
  const {
    resetField,
    control,
    handleSubmit,
    clearErrors,
    setError,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      criptoCurrency: '',
    },
  });

  const [areSerching, setAreSerching] = useState<AreSerching>({
    criptoCurrency: '',
  });

  const [loadingSearchCripto, setLoadingSearchCripto] =
    useState<boolean>(false);

  const {showAlertUserFeedback} = useAlertUserFeedback();
  const {showAlertUserConfirm} = useAlertUserConfirm();

  const [addNewCrypto, setAddNewCrypto] = useState({});

  const onSubmit = (data: FormData) => {
    const cryptoOfInterest = data.criptoCurrency.trim() ?? '';

    const cryptoExist = searchExistCrypto(mockCryptoExist, cryptoOfInterest);

    if (cryptoExist) {
      setError('criptoCurrency', {
        type: 'custom',
        message: 'This crypto already exists',
      });
    } else {
      setAreSerching(data);
    }
  };

  useEffect(() => {
    const searchingCripto = async (signal: AbortSignal) => {
      try {
        const fetching = await getCrypto(areSerching.criptoCurrency, signal);

        if (fetching.error_code) {
          setError('criptoCurrency', {
            type: 'custom',
            message:
              'Search not valid. Search for name or symbol, e.g.: Bitcoin or BTC',
          });
          return;
        }

        const {id, name, symbol, percent_24, price_usd} = fetching;

        const message = createCryptoFoundMsg(
          'Crypto found',
          name,
          symbol,
          price_usd,
          percent_24,
        );

        const userConfirm = await showAlertUserConfirm({
          title: 'Successful search',
          message,
        });

        if (userConfirm) {
          setAddNewCrypto({id});
          showAlertUserFeedback({
            title: 'Operation successfully',
            message: `Crypto ${name} added correctly`,
          });
          resetField('criptoCurrency');
        }
      } catch (error) {
        errorType(error.message, showAlertUserFeedback);
      } finally {
        setLoadingSearchCripto(false);
      }
    };

    if (areSerching.criptoCurrency) {
      clearErrors('criptoCurrency');
      const controller = new AbortController();
      setLoadingSearchCripto(true);
      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10000);

      searchingCripto(controller.signal);

      return () => {
        controller.abort();
        clearTimeout(timeOut);
      };
    }
  }, [areSerching]);

  return {control, errors, loadingSearchCripto, handleSubmit, onSubmit};
};

export default useAddCryptoForm;
