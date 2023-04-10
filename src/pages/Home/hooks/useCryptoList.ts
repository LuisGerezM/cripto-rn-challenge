import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAlertUserFeedback} from 'src/hooks';
import {Crypto} from 'src/models';
import {updateCryptoToList} from 'src/redux/states/cryptoData';
import {errorType} from 'src/utils';
import {getCryptosByUser} from '../interceptor/home.interceptor';

export const useCryptoList = () => {
  const cryptoData = useSelector(state => state.cryptoData);
  const [backUpCryptoList, setBackUpCryptoList] = useState<Crypto[]>([]);
  const {showAlertUserFeedback} = useAlertUserFeedback();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchCryptosByUser = await getCryptosByUser(cryptoData);

        setBackUpCryptoList(fetchCryptosByUser);
        dispatch(updateCryptoToList(fetchCryptosByUser));
      } catch (error) {
        errorType(error.message, showAlertUserFeedback);
        dispatch(updateCryptoToList(backUpCryptoList));
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {cryptoData};
};
