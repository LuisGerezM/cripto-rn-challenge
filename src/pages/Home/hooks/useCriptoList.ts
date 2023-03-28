import {useEffect, useState} from 'react';
import {useAlertUserFeedback} from 'src/hooks/useAlertUserFeedback';
import {Cripto} from 'src/models/cripto.models';
import {getCriptosByUser} from '../interceptor/home.interceptor';

export const useCriptoList = () => {
  const {showAlertUserFeedback} = useAlertUserFeedback();
  const [criptoData, setCriptoData] = useState<Cripto[]>([
    {
      id: '1e31218a-e44e-4285-820c-8282ee222035',
      name: '',
      symbol: '',
      price_usd: 0,
      percent: 0,
      icon: '',
    },
    {
      id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
      name: '',
      symbol: '',
      price_usd: 0,
      percent: 0,
      icon: '',
    },
    {
      id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
      name: '',
      symbol: '',
      price_usd: 0,
      percent: 0,
      icon: '',
    },
  ]);
  const [lodingPersonalCriptos, setLodingPersonalCriptos] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getYourCriptos = async (signal: AbortSignal) => {
      try {
        const criptosByUser = await getCriptosByUser(criptoData, signal);

        setCriptoData(criptosByUser);
      } catch (error: unknown) {
        console.error('Error get your criptos', error.message);
        const messageErrorToUser =
          'Ocurrió un problema al cargar tus criptomonedas; Intentalo mas tarde';
        setCriptoData([]);
        showAlertUserFeedback({
          title: 'Error',
          message: messageErrorToUser,
        });
        setErrorMessage(messageErrorToUser);
      } finally {
        setLodingPersonalCriptos(false);
      }
    };

    if (criptoData.length > 0) {
      const controller = new AbortController();

      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10000);

      setErrorMessage('');
      getYourCriptos(controller.signal);

      return () => {
        controller.abort();
        clearTimeout(timeOut);
      };
    }
  }, []);

  return {lodingPersonalCriptos, criptoData, errorMessage};
};
