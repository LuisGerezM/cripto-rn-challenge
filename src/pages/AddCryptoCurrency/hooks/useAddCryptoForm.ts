import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useAlertUserConfirm, useAlertUserFeedback} from 'src/hooks';
import {cryptoAdapter} from 'src/pages/adapter/crypto.adapter';
import {fetchAPI, URLs} from 'src/services';
import {errorType, replaceTo, toFixedCryptoNumber} from 'src/utils';

type FormData = {
  criptoCurrency: string;
};

interface AreSerching {
  criptoCurrency: null | string;
}

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
    criptoCurrency: null,
  });

  const [loadingSearchCripto, setLoadingSearchCripto] =
    useState<boolean>(false);

  const {showAlertUserFeedback} = useAlertUserFeedback();
  const {showAlertUserConfirm} = useAlertUserConfirm();

  const [addNewCrypto, setAddNewCrypto] = useState({});

  const onSubmit = (data: FormData) => setAreSerching(data);

  useEffect(() => {
    const searchingCripto = async (signal: AbortSignal) => {
      try {
        const cryptoOfInterest = areSerching.criptoCurrency?.trim() ?? '';

        const url = replaceTo(
          URLs.cryptoWithMetrics,
          'CRYPTO_ID',
          cryptoOfInterest,
        );

        const fetching = await fetchAPI({url, signal});

        if (fetching.status.error_code) {
          setError('criptoCurrency', {
            type: 'custom',
            message:
              'Search not valid. Search for name or symbol, e.g.: Bitcoin or BTC',
          });
          return;
        }

        const {id, name, symbol, percent_24, price_usd} = cryptoAdapter(
          fetching.data,
        );

        const message = `Moneda encontrada:
              Name:   ${name}
              Symbol: ${symbol}
              Price:     ${toFixedCryptoNumber(price_usd)}
              Percent usd last 24 hs: 
                              ${toFixedCryptoNumber(percent_24)}
            `;

        const userConfirm = await showAlertUserConfirm({
          title: 'Busqueda con éxito',
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
        console.error('Error searching cripto', error.message);
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
