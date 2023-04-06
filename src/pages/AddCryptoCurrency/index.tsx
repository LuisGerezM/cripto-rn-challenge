import React from 'react';
import {ScrollView} from 'react-native';
import {ButtonToNavigate} from 'src/components';
import {routes} from 'src/models';
import {Form} from './components';
import {
  WrapAddCripto,
  WrapButtonBack,
} from './styled-components/AddCriptoCurrency.styled';

const AddCriptoCurrency = (): JSX.Element => (
  <ScrollView>
    <WrapAddCripto>
      <WrapButtonBack>
        <ButtonToNavigate text="< Back to list" to={routes.HOME} />
      </WrapButtonBack>
      <Form />
    </WrapAddCripto>
  </ScrollView>
);

export default AddCriptoCurrency;
