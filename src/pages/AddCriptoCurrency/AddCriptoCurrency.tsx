import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, Text} from 'react-native';
import ButtonToNavigate from 'src/components/Buttons/ButtonToNavigate/ButtonToNavigate';
import {ErrorsValidationForm} from 'src/components/Errors/ErrorsValidationForm/ErrorsValidationForm';
import {useAlertUserFeedback} from 'src/hooks/useAlertUserFeedback';
import {routes} from 'src/models/routes.models';
import {
  CustomButton,
  Input,
  TextComponent,
} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {validationFields} from 'src/utils/validationFields.util';
import {
  WrapAddButton,
  WrapAddCripto,
  WrapButtonBack,
  WrapForm,
} from './styled-components/AddCriptoCurrency.styled';
import {API_BASE_URL} from '@env';
import fetchAPI from 'src/services/fetchAPI.service';
import {errorType} from 'src/utils/errorType.util';
import {useAlertUserConfirm} from 'src/hooks/useAlertUserConfirm';
import {fixedCriptoNumber} from 'src/utils/fixedCriptoNumber.utils';

type FormData = {
  criptoCurrency: string;
};

interface AreSerching {
  criptoCurrency: null | string;
}

const AddCriptoCurrency = (): JSX.Element => {
  const {
    control,
    handleSubmit,
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

  const onSubmit = (data: FormData) => setAreSerching(data);

  useEffect(() => {
    const searchingCripto = async (signal: AbortSignal) => {
      try {
        // https://data.messari.io/api/v1/assets/BTC

        const url = `${API_BASE_URL}/assets/${areSerching.criptoCurrency}/metrics`;

        console.log({url});

        const fetching = await fetchAPI({url, signal});
        console.log(fetching.status);
        if (fetching.status.error_code) {
          throw new Error(JSON.stringify(fetching.status));
        }

        const {
          id,
          name,
          symbol,
          market_data: {percent_change_usd_last_24_hours, price_usd},
        } = fetching.data;

        const message = `Moneda encontrada:
          Name:   ${name}
          Symbol: ${symbol}
          Price:     ${fixedCriptoNumber(percent_change_usd_last_24_hours)}
          Percent usd last 24 hs: 
                          ${fixedCriptoNumber(price_usd)}
        `;

        const userConfirm = await showAlertUserConfirm({
          title: 'Busqueda con éxito',
          message,
        });

        if (userConfirm) {
          console.log(
            'actualizar lista de criptomonedas con el id de esta cripto',
            id,
          );
        }
      } catch (error) {
        console.error('Error searching cripto', error.message);
        errorType(error.message, showAlertUserFeedback);
      } finally {
        setLoadingSearchCripto(false);
      }
    };

    if (areSerching.criptoCurrency) {
      const controller = new AbortController();
      setLoadingSearchCripto(true);
      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10000);

      searchingCripto(controller.signal);

      return () => {
        controller.abort();
        clearTimeout(timeOut);
        console.log('DESMONTANDO efecto  areSerching.criptoCurrency');
      };
    }

    // return () => {
    //   second
    // }
  }, [areSerching]);

  return (
    <ScrollView>
      <WrapAddCripto>
        <WrapButtonBack>
          <ButtonToNavigate text="< Back to list" to={routes.HOME} />
        </WrapButtonBack>

        <WrapForm>
          <TextComponent
            fontSizeType="title"
            fontWeight="heavy"
            color="darkBlue">
            Add a Cryptocurrency
          </TextComponent>
          <Controller
            control={control}
            rules={validationFields.criptoCurrency}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Use a name or ticket symbol..."
              />
            )}
            name="criptoCurrency"
          />
          {errors.criptoCurrency && (
            <ErrorsValidationForm errors={errors} errorKey={'criptoCurrency'} />
          )}

          <WrapAddButton isLoading={loadingSearchCripto}>
            {loadingSearchCripto && <Text>Buscando... </Text>}
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              backgroundColor="yellow"
              borderColor="grey"
              width="50%"
              disabled={!!loadingSearchCripto}>
              <TextComponent
                fontSizeType="text"
                fontWeight="bold"
                color="darkBlue">
                Add
              </TextComponent>
            </CustomButton>
          </WrapAddButton>
        </WrapForm>
      </WrapAddCripto>
    </ScrollView>
  );
};
export default AddCriptoCurrency;
