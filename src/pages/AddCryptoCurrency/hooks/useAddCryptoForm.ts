import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useAlertUserConfirm, useAlertUserFeedback} from 'src/hooks';
import {addCryptoToList} from 'src/redux/states/cryptoData';
import {errorType} from 'src/utils';
import {getCrypto} from '../interceptor';
import {createCryptoFoundMsg} from '../utilities';
import searchExistCrypto from '../utilities/searchExistCrypto.util';
import {routes} from 'src/models';

type FormData = {
  criptoCurrency: string;
};

const useAddCryptoForm = () => {
  const {
    resetField,
    control,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      criptoCurrency: '',
    },
  });

  const dispatch = useDispatch();
  const cryptoData = useSelector(state => state.cryptoData);

  const navigation = useNavigation();

  const [isSearching, setAreSearching] = useState('');

  const [loadingSearchCripto, setLoadingSearchCripto] = useState(false);

  const {showAlertUserFeedback} = useAlertUserFeedback();
  const {showAlertUserConfirm} = useAlertUserConfirm();

  const watchingCriptoCurrencyInput = watch('criptoCurrency');

  const onSubmit = (data: FormData) => {
    const cryptoOfInterest = data.criptoCurrency.trim();

    const cryptoExist = searchExistCrypto(cryptoData, cryptoOfInterest);

    if (cryptoExist) {
      setError('criptoCurrency', {
        type: 'custom',
        message: 'This crypto already exists',
      });
    } else {
      setAreSearching(cryptoOfInterest);
    }
  };

  useEffect(() => {
    const searchingCripto = async (
      cryptoSearching: string,
      signal: AbortSignal,
    ) => {
      try {
        const fetching = await getCrypto(cryptoSearching, signal);

        if (fetching.error_code) {
          setError('criptoCurrency', {
            type: 'custom',
            message:
              'Search not valid. Search for name or symbol and word without spaces, e.g.: Bitcoin, or, BTC',
          });
          setAreSearching('');
          return;
        }

        const {name, symbol, percent_24, price_usd} = fetching;

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
          dispatch(addCryptoToList(fetching));
          resetField('criptoCurrency');

          const addOtherCrypto = await showAlertUserConfirm({
            title: 'Operation successfully',
            message: `Crypto ${name} added correctly.
Would do you add other crypto?`,
          });

          if (!addOtherCrypto) {
            navigation.navigate(routes.HOME);
          }
        } else {
          setAreSearching('');
        }
      } catch (error) {
        errorType(error.message, showAlertUserFeedback);
        setAreSearching('');
      } finally {
        setLoadingSearchCripto(false);
      }
    };

    if (isSearching) {
      clearErrors('criptoCurrency');
      const controller = new AbortController();
      setLoadingSearchCripto(true);
      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10000);

      searchingCripto(isSearching, controller.signal);

      return () => {
        controller.abort();
        clearTimeout(timeOut);
      };
    }
  }, [isSearching]);

  return {
    control,
    errors,
    loadingSearchCripto,
    handleSubmit,
    onSubmit,
    watchingCriptoCurrencyInput,
  };
};

export default useAddCryptoForm;
