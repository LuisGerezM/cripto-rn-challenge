import React from 'react';
import {Controller} from 'react-hook-form';
import {Text} from 'react-native';
import {Button} from 'src/components';
import {ErrorsValidationForm} from 'src/components/Errors/ErrorsValidationForm/ErrorsValidationForm';
import {
  Input,
  TextComponent,
} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {validationFields} from 'src/utils';
import {useAddCryptoForm} from '../../hooks';
import {WrapAddButton, WrapForm} from './styled-components/Form.styled';

const Form = () => {
  const {control, errors, loadingSearchCripto, handleSubmit, onSubmit} =
    useAddCryptoForm();

  return (
    <WrapForm>
      <TextComponent fontSizeType="title" fontWeight="heavy" color="darkBlue">
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
        <Button
          onPress={handleSubmit(onSubmit)}
          backgroundColor="yellow"
          borderColor="grey"
          width="50%"
          disabled={!!loadingSearchCripto}
          buttonColor="darkBlue"
        />
      </WrapAddButton>
    </WrapForm>
  );
};
export default Form;
