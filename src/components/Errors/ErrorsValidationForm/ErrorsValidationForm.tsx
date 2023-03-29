import React from 'react';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';

interface ErrorsValForm {
  [key: string]: any;
  errorKey: string;
}

export const ErrorsValidationForm = ({
  errors,
  errorKey,
}: ErrorsValForm): JSX.Element => {
  return errors[errorKey] ? (
    <TextComponent fontSizeType="text" fontWeight="bold" color="red">
      {errors[errorKey].message}
    </TextComponent>
  ) : (
    <></>
  );
};
